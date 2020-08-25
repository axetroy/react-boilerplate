import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ApiResponse<T = unknown> {
  status: number;
  data: T;
}

class HTTPClient {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create();
  }
  public get interceptors() {
    return this.client.interceptors;
  }
  public async request(config: AxiosRequestConfig): Promise<ApiResponse> {
    const response = await this.client.request<ApiResponse>(config);

    switch (response.data.status) {
      case 0:
        // 处理相关的事情
        break;
    }

    return response.data;
  }
  public get(url: string, config: AxiosRequestConfig = {}) {
    return this.request({ url, method: "GET", ...config });
  }
  public post(url: string, data: unknown, config: AxiosRequestConfig = {}) {
    return this.request({ url, method: "POST", data, ...config });
  }
  public put(url: string, data: unknown, config: AxiosRequestConfig = {}) {
    return this.request({ url, method: "PUT", data, ...config });
  }
  public ["delete"](url: string, data: unknown, config: AxiosRequestConfig = {}) {
    return this.request({ url, method: "DELETE", data, ...config });
  }
}

export { HTTPClient };
