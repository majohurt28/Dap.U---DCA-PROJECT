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

        /* case Screens.SIGNUP:
            const signup = this.ownerDocument.createElement("app-signup");
            this.shadowRoot?.appendChild(signup);
            break; */

      default:
        break;
         
    }
}
}

customElements.define('app-container', AppContainer)