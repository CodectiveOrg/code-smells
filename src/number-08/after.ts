// Code Smell: Duplicate Code | Before

import { showErrorToast } from "../demo-purpose/services/toast.service";

export class ApiService {
  private readonly DEFAULT_POST_REQUEST_INIT: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  private readonly DEFAULT_DELETE_REQUEST_INIT: RequestInit = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  private async getRequest<T>(
    url: string,
    init: RequestInit,
  ): Promise<T | null> {
    return this.fetchRequest(url, init);
  }

  private async postRequest<T>(
    url: string,
    init: RequestInit,
  ): Promise<T | null> {
    return this.fetchRequest(url, {
      ...this.DEFAULT_POST_REQUEST_INIT,
      ...init,
    });
  }

  private async deleteRequest<T>(
    url: string,
    init: RequestInit,
  ): Promise<T | null> {
    return this.fetchRequest(url, {
      ...this.DEFAULT_DELETE_REQUEST_INIT,
      ...init,
    });
  }

  private async fetchRequest<T>(
    url: string,
    init: RequestInit,
  ): Promise<T | null> {
    const response = await fetch(url, init);
    const data = await response.json();

    if (!response.ok) {
      showErrorToast(data.message);

      return null;
    }

    return data as T;
  }
}
