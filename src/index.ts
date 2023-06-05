import "./screens/export";
import {addObserver, appState } from "./store";
import { Screens} from "./types/navigatio";
import { dispatch } from "../src/store/index";
import { navigate } from "./store/actions";



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
        
        const Exitbtn = this.ownerDocument.createElement("button")
    Exitbtn.className = "ExitBotton"
    Exitbtn.innerText = "SIGNUP"
    Exitbtn.addEventListener("click",() =>{
      dispatch(navigate(Screens.SIGNUP));
    } );
    this.shadowRoot?.appendChild(Exitbtn);
    this.shadowRoot?.appendChild(login);
        break;

        case Screens.SIGNUP:
            const signup = this.ownerDocument.createElement("app-signup");
            this.shadowRoot?.appendChild(signup);
            break; 

      default:
        break;
         
    }
}
}

customElements.define('app-container', AppContainer)