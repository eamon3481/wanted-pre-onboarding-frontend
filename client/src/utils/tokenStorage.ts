class TokenStorage {
  private authToken = '';

  constructor() {
    this.authToken = localStorage.getItem('authToken') || '';
  }

  setAuthToken = (token: string) => {
    this.authToken = token;

    window.localStorage.setItem('authToken', token);
  };

  getAuthToken = () => {
    if (this.authToken) return this.authToken;

    const token = window.localStorage.getItem('authToken') || '';
    return token;
  };

  removeAuthToken = () => {
    this.authToken = '';
    window.localStorage.removeItem('authToken');
  };
}

export const tokenStorage = new TokenStorage();
