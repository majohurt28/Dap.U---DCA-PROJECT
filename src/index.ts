import "./components/export"
import "./screens/dashboard/dashboard"
import "./screens/Musicsheet/musicsheet"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        
        const dashboard = this.ownerDocument.createElement('my-dashboard');
         this.shadowRoot?.appendChild(dashboard);

       /*  const musicsheets = this.ownerDocument.createElement('app-musicsheet');
        this.shadowRoot?.appendChild(musicsheets); */

        
    }
}

customElements.define('app-container', AppContainer)