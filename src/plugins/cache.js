Cache = () => {
  // basic cache set, get and clear
    return {
      set: (key, value) => {
        window.localStorage.setItem(key, value)
      },
      get: (key) => {
        return window.localStorage.getItem(key);
      },
      clearAllCache: () => {

      }
    }
  };