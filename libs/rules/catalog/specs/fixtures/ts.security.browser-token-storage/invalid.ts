declare const localStorage: {
  setItem(key: string, value: string): void;
};

declare const accessToken: string;

localStorage.setItem('accessToken', accessToken);
