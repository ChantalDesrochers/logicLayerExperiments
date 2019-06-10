const template = document.createElement('template');
template.innerHTML = `
<div>
    <button id="dog">Retrieve Dog</button>
    <img id="image"></img>
</div>
<div>
    <button id="dogbreeds">Retrieve Dog Breeds</button>
    <ul></ul>
</div>
`;

class DogsSearch extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$dogButton = this._shadowRoot.querySelector('#dog');
        this.$dogButton.addEventListener('click', this._getDog.bind(this))
        this.$breedButton = this._shadowRoot.querySelector('#dogbreeds');
        this.$breedButton.addEventListener('click', this._getDogBreeds.bind(this))
        this.$imageDiv = this._shadowRoot.querySelector('#image');
        this.$breedList = this._shadowRoot.querySelector('ul');
        // setting listeners as example
        window.Core.routeFn('events', 'listen','photoRetrieved', this._populateImage.bind(this))
        window.Core.routeFn('events', 'listen','dogBreedsRetrieved', this._populateList.bind(this))
    }

    _getDog() {
            return new Promise((resolve, reject) => {
              return window.Core.routeFn('dataretrieve', 'getRandomDog')
              .then((data => {
                  window.Core.routeFn('events', 'notifyEvent', 'photoRetrieved', data)
              }))
                .then(resolve, reject);
            });
    }

    _getDogBreeds() {
        return new Promise((resolve, reject) => {
            let cachedData = window.Core.routeFn('cache', 'get', 'DOGBREEDS');
            // Resolve early if cached data exists.
            if (cachedData) {
                cachedData = cachedData.split(',')
                window.Core.routeFn('events', 'notifyEvent', 'dogBreedsRetrieved', cachedData)
              resolve(cachedData);
              return;
            }
          return window.Core.routeFn('dataretrieve', 'getDogBreeds')
          .then((data => {
            window.Core.routeFn('events', 'notifyEvent', 'dogBreedsRetrieved', data)
            window.Core.routeFn('cache', 'set', 'DOGBREEDS', data)
          }))
            .then(resolve, reject);
        });
}

    _populateImage(e) {
        this.$imageDiv.setAttribute('src', e.detail)
    }

    _populateList(e) {
        e.detail.forEach((breed) => {
            let li = document.createElement('li')
            li.innerHTML = breed;
            this.$breedList.appendChild(li)
        })
    }
}

window.customElements.define('dogs-search', DogsSearch)