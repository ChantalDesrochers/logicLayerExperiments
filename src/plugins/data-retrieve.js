DataRetrieve = () => {
  return {
    getRandomDog: () => {
      console.log('in getRandomDog in the data-retrieve plugin')
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((json => {
          return json.message;
        })
        )
    },
    getDogBreeds: () => {
      console.log('in getDogBreeds in the data-retrieve plugin')
      return fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => response.json())
        .then((json => {
          return Object.keys(json.message);
        })
        )
    }
  }
};

