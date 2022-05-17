const { localStorage, sessionStorage } = window;

export type GetItemResponse = Record<string, string | undefined>;

const webStorage = {
  local: {
    setItem(itemName: string, itemValue: WebStorageStoredValue) {
      localStorage.setItem(itemName, JSON.stringify(itemValue));
    },
    getItem<T = GetItemResponse>(itemName: string) {
      let storedValue = localStorage.getItem(itemName);

      storedValue = storedValue ? JSON.parse(storedValue) : null;

      return storedValue as unknown as T | null;
    },
    removeItem(itemName: string) {
      localStorage.removeItem(itemName);
    },
  },

  cookie: {
    getCookie<T = GetItemResponse>(name: string) {
      const cookies = Object.fromEntries(
        document.cookie
          .split("; ")
          .map((cookie) => cookie.split("=").map(decodeURIComponent))
      );

      return (cookies[name] || null) as unknown as T | null;
    },
    deleteCookie(name: string) {
      document.cookie = `${name}=; Max-Age=-99999999`;
    },
  },
};

export default webStorage;
