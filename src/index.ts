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
        
      
    this.shadowRoot?.appendChild(login);
        break;
        case Screens.DASHBOARD:

        const dashboard = this.ownerDocument.createElement("home-cont");   
        const btn2 = this.ownerDocument.createElement("button")
        btn2.className = "ExitBotton"
        btn2.innerText = "RET"
        btn2.addEventListener("click",() =>{
          dispatch(navigate(Screens.EDITPROFILE));
        } );
        this.shadowRoot?.appendChild(btn2);this.shadowRoot?.appendChild(dashboard);
      break; 

        case Screens.SIGNUP:
            const signup = this.ownerDocument.createElement("app-signup");
            const btn = this.ownerDocument.createElement("button")
            btn.className = "ExitBotton"
            btn.innerText = "DASHBOARD"
            btn.addEventListener("click",() =>{
              dispatch(navigate(Screens.DASHBOARD));
            } );
            this.shadowRoot?.appendChild(btn);
            this.shadowRoot?.appendChild(signup);
            break; 

       

      case Screens.EDITPROFILE:
        const editprofile = this.ownerDocument.createElement("edprof-cont");
        const btn3 = this.ownerDocument.createElement("button")
        btn3.className = "ExitBotton"
        btn3.innerText = "RET"
        btn3.addEventListener("click",() =>{
          dispatch(navigate(Screens.PROFILE));
        } );
        this.shadowRoot?.appendChild(btn3);

        this.shadowRoot?.appendChild(editprofile);
        break; 

        case Screens.PROFILE:
          const profile = this.ownerDocument.createElement("app-profile");
          const btn4 = this.ownerDocument.createElement("button")
          btn4.className = "ExitBotton"
          btn4.innerText = "RET"
          btn4.addEventListener("click",() =>{
            dispatch(navigate(Screens.ADDPOST));
          } );
          this.shadowRoot?.appendChild(btn4);
  
          this.shadowRoot?.appendChild(profile);
          break; 
          case Screens.ADDPOST:
            const Addpost = this.ownerDocument.createElement("addpost-cont");
    
            this.shadowRoot?.appendChild(Addpost);
            break; 


        case Screens.FEED:
          const feed = this.ownerDocument.createElement("app-feed");
  
          this.shadowRoot?.appendChild(feed);
          break; 

          
        
        
      default:
        break;
         
    }
}
}

customElements.define('app-container', AppContainer)