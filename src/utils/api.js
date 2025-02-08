// src/utils/api.js
export async function apiRequest(url, options = {}) {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
  
    if (token) {
      headers.Authorization = `Bearer ${token}`; // 携带 Token
    }
  
    const response = await fetch(url, { ...options, headers });
  
    if (response.status === 401) {
      alert('登录已过期，请重新登录');
      localStorage.removeItem('token'); // 清除 Token
      window.location.href = '/login'; // 重定向到登录页面
      return null;
    }
  
    return response.json();
  }
  