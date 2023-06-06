import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import  Upperbar  from '../../components/Upperbar/upperbar';
import  sidebar  from '../../components/sidebar/sidebar'; 
import Firebase from "../../utils/Firebase";
import { addObserver, appState, dispatch } from "../../store/index";
import profilestyle from './profilestyle.css';



const credentials = { usermane: "", description: "", };

export default class profile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
  
    connectedCallback() {
      this.render();
    }

    render() {
    
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = profilestyle ;
            this.shadowRoot?.appendChild(css);
        }

        
    const MainContainer = this.ownerDocument.createElement("section")
    MainContainer.className = 'MainContainer'

    const infoProfile = this.ownerDocument.createElement("section")
    infoProfile.className = 'infoProfile'
    MainContainer.appendChild(infoProfile );

    const logAccount = this.ownerDocument.createElement('label');
    logAccount.textContent = "Already have an account?"
    infoProfile.appendChild(logAccount  );

    const uptbtn = this.ownerDocument.createElement("button")
    uptbtn .className = "upBotton"
    uptbtn .addEventListener("click",() =>{
      dispatch(navigate(Screens.EDITPROFILE));
    } );
    infoProfile.appendChild(uptbtn);

    const editbtn = this.ownerDocument.createElement("button")
    editbtn .className = "EditBotton"
    editbtn .innerText = "Edit profile"
    editbtn .addEventListener("click",() =>{
      dispatch(navigate(Screens.EDITPROFILE));
    } );
    infoProfile.appendChild(editbtn);

    const content = this.ownerDocument.createElement("section")
    content.className = 'content'
    MainContainer.appendChild(content )

    this.shadowRoot?.appendChild(MainContainer );

    }
    }

    customElements.define("app-profile", profile );