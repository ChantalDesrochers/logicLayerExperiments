Cache = function() {
    let cache = {}
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