import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ApiResponse<T = unknown> {
  status: number;
  data: T;
  message: string;
}

interface ApiResponseList<T> {
  status: number;
  data: T[];
  message: string;
  meta: { page: number; per_page: number; total: number };
}

type HTTPClientConfig = AxiosRequestConfig;

type GetHook<T> = (config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type ListHook<T> = (config?: HTTPClientConfig) => Promise<ApiResponseList<T>>;
type PostHook<T> = (data: unknown, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type PutHook<T> = (data: unknown, config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
type DeleteHook<T> = (config?: HTTPClientConfig) => Promise<ApiResponse<T>>;
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

  public get<T = unknown>(url: string): [GetHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (config: HTTPClientConfig = {}) => {
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

  public list<T = unknown>(url: string): [ListHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (config: HTTPClientConfig = {}) => {
      return this.request({
        url,
        method: "GET",
        ...config,
        cancelToken: source.token,
      }) as Promise<ApiResponseList<T>>;
    };

    const cancel = () => source.cancel();

    return [request, cancel];
  }

  public post<T>(url: string): [PostHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (data: unknown, config: HTTPClientConfig = {}) => {
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

  public put<T>(url: string): [PutHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (data: unknown, config: HTTPClientConfig = {}) => {
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

  public delete<T>(url: string): [DeleteHook<T>, CancelFunc] {
    const source = axios.CancelToken.source();

    const request = (config: HTTPClientConfig = {}) => {
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
