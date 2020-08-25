import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ApiResponse<T = unknown> {
  status: number;
  data: T;
}

type HTTPClientConfig = AxiosRequestConfig;

type GetHook<T> = (url: string, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type PostHook<T> = (url: string, data: unknown, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type PutHook<T> = (url: string, data: unknown, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type DeleteHook<T> = (url: string, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type CancelFunc = () => void;

class HTTPClient {
  private client: AxiosInstance;
  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }
  public get interceptors() {
    return this.client.interceptors;
  }
  public async request<T = unknown>(config: HTTPClientConfig): Promise<ApiResponse<T>> {
    const response = await this.client.request<ApiResponse<T>>(config);

    switch (response.data.status) {
      case 0:
        // 处理相关的事情
        break;
    }

    return response.data;
  }
  public get<T>(url: string, config: HTTPClientConfig = {}) {
    return this.request<T>({ url, method: "GET", ...config });
  }
  public post<T>(url: string, data: unknown, config: HTTPClientConfig = {}) {
    return this.request<T>({ url, method: "POST", data, ...config });
  }
  public put<T>(url: string, data: unknown, config: HTTPClientConfig = {}) {
    return this.request<T>({ url, method: "PUT", data, ...config });
  }
  public ["delete"]<T>(url: string, config: HTTPClientConfig = {}) {
    return this.request<T>({ url, method: "DELETE", ...config });
  }

  public useGet<T = unknown>(): [GetHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (url: string, config: HTTPClientConfig = {}) => {
      return this.request<T>({
        url,
        method: "GET",
        ...config,
        cancelToken: source.token,
      });
    };

    const cancel = () => source.cancel();

    return [request, cancel];
  }

  public usePost<T>(): [PostHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (url: string, data: unknown, config: HTTPClientConfig = {}) => {
      return this.request<T>({
        url,
        method: "POST",
        data,
        ...config,
        cancelToken: source.token,
      });
    };

    const cancel = () => source.cancel();

    return [request, cancel];
  }

  public usePut<T>(): [PutHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (url: string, data: unknown, config: HTTPClientConfig = {}) => {
      return this.request<T>({
        url,
        method: "PUT",
        data,
        ...config,
        cancelToken: source.token,
      });
    };

    const cancel = () => source.cancel();

    return [request, cancel];
  }

  public useDelete<T>(): [DeleteHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (url: string, config: HTTPClientConfig = {}) => {
      return this.request<T>({
        url,
        method: "DELETE",
        ...config,
        cancelToken: source.token,
      });
    };

    const cancel = () => source.cancel();

    return [request, cancel];
  }
}

export { HTTPClient };
