import { AuthRequest, AuthResponse } from "../types/auth-type";
import {HttpClientApi} from '../core/http-req';
import { axiosInstance } from "../core/axios-intercept";

const dati_di_prova:AuthRequest = {} as AuthRequest;
dati_di_prova.grant_type = 'password';
//dati_di_prova.grant_type = 'refresh_token';
dati_di_prova.client_id = 'access_token_fake';
dati_di_prova.client_secret = 'client_secret_fake';
dati_di_prova.username = 'user_fake';
dati_di_prova.password = 'password_fake';
dati_di_prova.scope = 'read_station';
dati_di_prova.refresh_token = 'refresh_token_fake';

const dati_responseSuccess:AuthResponse = {
    scope:'read_station',
    access_token:'access_token_fake',
    refresh_token:'refresh_token_fake',
    expires_in:'10800',
    expire_in:'10800'
} as AuthResponse;

jest.mock('axios',()=>{
    return {
        create:()=>{
            return {
                post: ()=> new Promise(resolve => resolve(dati_responseSuccess)),
                interceptors: {
                   request: {use:jest.fn(),eject:jest.fn()},
                   response: {use:jest.fn(),eject:jest.fn()}
                }
            }
        }
    }
});
const success = new Promise(resolve=>resolve(dati_responseSuccess));
jest.mock('../core/http-req.ts',()=>{
    return {
        HttpClientApi:jest.fn().mockImplementation((grantType:string,
            clientID:string,
            clientSecret:string,
            username:string,
            password:string,
            scope:string,
            refresh_token:string)=>{
                return{
                    auth:jest.fn().mockImplementation(()=>{
                        return success;
                    }),
                    refresh:jest.fn().mockImplementation(()=>{
                        return success;
                    })
                }
            })
    }
});
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;


describe('HTTP API Class Function',() =>{
    const classeApi = jest.mocked(HttpClientApi);

    beforeEach(()=>{
       classeApi.mockClear();
    });
    
    test('Class is been called', async()=>{
        mockedAxios.post.mockResolvedValueOnce(dati_responseSuccess);
        const myHttp:HttpClientApi = new HttpClientApi('',
       '',
       '',
       '',
       '',
       '',
       '');
       expect(classeApi).toHaveBeenCalled();
    });

    test('Auth success', async () =>{
       mockedAxios.post.mockResolvedValueOnce(dati_responseSuccess);
       const myHttp:HttpClientApi = new HttpClientApi('',
       '',
       '',
       '',
       '',
       '',
       '');
       const result = await myHttp.auth();
       expect(result).toEqual(dati_responseSuccess);
    });

    test('Refresh success', async () =>{
        mockedAxios.post.mockResolvedValueOnce(dati_responseSuccess);
        const myHttp:HttpClientApi = new HttpClientApi('',
        '',
        '',
        '',
        '',
        '',
        '');
        const result = await myHttp.refresh();
        expect(result).toEqual(dati_responseSuccess);
     });
});
