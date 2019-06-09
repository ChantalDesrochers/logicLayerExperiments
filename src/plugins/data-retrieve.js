DataRetrieve = function () {
  return {
    getApiData: () => {
        return fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
          .then((json => {
            return json.message;
          })
          )
        }
  }
};

