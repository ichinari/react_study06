export type QueryParams = Record<string, string | number | boolean> | null;

export default abstract class APIClient {
  protected apiPath: string;

  constructor(apiPath: string) {
    this.apiPath = apiPath;
  }

  protected async apiGet<T>(apiPath: string, params: QueryParams): Promise<T> {
    const url = this.buildUrl(apiPath, params);
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      throw new Error(`API request failed: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as T;
  }

  private buildUrl(apiPath: string, params: QueryParams): string {
    if (!params) return apiPath;
    const url = new URL(apiPath);
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, String(value));
    }
    return url.toString();
  }
}
