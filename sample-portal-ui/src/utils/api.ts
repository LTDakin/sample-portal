import { PatchSampleRequest } from '@/types/samples.api';
const serverURL = 'http://localhost:5000'; // For Dev only, production should use secret env

async function apiRequest(url: string, method: string = 'GET', data?: unknown) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // replace safely joins the url
  const response = await fetch(`${serverURL}/${url.replace(/^\//, '')}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const errorResponse = await response.json().catch(() => null);
    throw new Error(
      errorResponse?.message || `Request failed with status ${response.status}`
    );
  }

  // Some DELETE responses are empty (204 No Content)
  if (response.status === 204) return null;

  return await response.json();
}

export const api = {
  get: (url: string) => apiRequest(url, 'GET'),
  post: (url: string, data: PatchSampleRequest) =>
    apiRequest(url, 'POST', data),
  // put: (url: string, data: unknown) => apiRequest(url, "PUT", data),
  // patch: (url: string, data: unknown) => apiRequest(url, "PATCH", data),
  // delete: (url: string) => apiRequest(url, "DELETE"),
};
