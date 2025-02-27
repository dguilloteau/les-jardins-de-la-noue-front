import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const DEFAULT_TIMEOUT: number = 2000;

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    console.log("call " + config.method + " " + config.baseURL + config.url);
    if (config.data !== undefined) {
        console.log(config.data);
    }

    if (config.timeout !== undefined && config.timeout > DEFAULT_TIMEOUT) {
        // UPDATE: Add this code to show global loading indicator
        document.body.classList.add('loading-indicator');
    }
    return config;
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');

    console.log("return " + response.config.method + " " + response.config.baseURL + response.config.url + " " + response.status + " " + response.statusText);
    console.log(response.data);
    return response;
}

const onError = (error: AxiosError): Promise<AxiosError> => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onError);
    axiosInstance.interceptors.response.use(onResponse, onError);
    return axiosInstance;
}