import "./screens/export";
import { addObserver, appState } from "./store";
import { Screens } from "./types/navigatio";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    async connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    switch (appState.screen) {

      case Screens.LOGIN:
        const login = this.ownerDocument.createElement("app-login");
        this.shadowRoot?.appendChild(login);
        break;

      default:
        break;
         
    }
}
}

customElements.define('app-container', AppContainer)