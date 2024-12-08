class HttpClient {
  private baseUrl: string;
  private session: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.session = "";
  }

  private async request<T>(method: string, url: string, data?: Record<string, T>): Promise<T> {
    const response = await fetch(this.baseUrl + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        session: this.session,
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    return response.json();
  }

  public async get<T>(url: string): Promise<T> {
    return this.request("GET", url);
  }

  public async post<T>(url: string, data: Record<string, T>): Promise<T> {
    return this.request("POST", url, data);
  }

  public async put<T>(url: string, data: Record<string, T>): Promise<T> {
    return this.request("PUT", url, data);
  }

  public async delete<T>(url: string): Promise<T> {
    return this.request("DELETE", url);
  }
}

export const api = new HttpClient(process.env.BACKEND_URL || "http://localhost:4000/api/v1");
