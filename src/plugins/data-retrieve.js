DataRetrieve = () => {
  return {
    getRandomDog: () => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((json => {
          return json.message;
        })
        )
    },
    getDogBreeds: () => {
      return fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((json => {
          return Object.keys(json.message);
        })
        )
    }
  }
};

