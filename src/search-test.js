const template = document.createElement('template');
template.innerHTML = `
<div>
    <button>Retrieve Data</button>
    <img id="image"></img>
</div>
`;

class SearchTest extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$searchButton = this._shadowRoot.querySelector('button');
        this.$searchButton.addEventListener('click', this._getData.bind(this))
        this.$imageDiv = this._shadowRoot.querySelector('#image');
    }

    _getData() {
            return new Promise((resolve, reject) => {
              return window.Core.callFn('dataretrieve', 'getApiData')
              .then((data => {
                  this._populateImage(data)
              }))
                .then(resolve, reject);
            });
    }

    _populateImage(image) {
        this.$imageDiv.setAttribute('src', image)
    }
}

window.customElements.define('search-test', SearchTest)