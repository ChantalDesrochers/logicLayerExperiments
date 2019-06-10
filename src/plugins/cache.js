Cache = () => {
  // basic cache set, get and clear
    return {
      set: (key, value) => {
        console.log(`setting cache with the key ${key}`)
        window.localStorage.setItem(key, value)
      },
      get: (key) => {
        console.log(`getting ${key} from the cache`)
        return window.localStorage.getItem(key);
      }
    }
  };