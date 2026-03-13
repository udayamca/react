const BASE_URL = 'https://api.rawg.io/api';
const API_KEY = 'aa7e43cd674d41f2aacf819544930190';

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class APIClient {
  async get<T>(endpoint: string, config?: RequestConfig): Promise<{ data: T }> {
    const { params, ...fetchConfig } = config || {};
    
    // Build URL with query parameters
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.set('key', API_KEY);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
      });
    }
    
    const response = await fetch(url.toString(), {
      ...fetchConfig,
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { data };
  }
}

export default new APIClient();