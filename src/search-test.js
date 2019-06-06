const template = document.createElement('template');
template.innerHTML = `
<div>
    <button>Retrieve Data</button>
</div>
`;

class SearchTest extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open'});
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$searchButton = this._shadowRoot.querySelector('button');
        this.$searchButton.addEventListener('click', this._getData.bind(this))
    }

    _getData() {
        console.log('clicked get data')
        // tell core that button was clicked
        // core tells getData
    }
}

window.customElements.define('search-test', SearchTest)