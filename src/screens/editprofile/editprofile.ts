import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import  Upperbar  from '../../components/Upperbar/upperbar';
import  sidebar  from '../../components/sidebar/sidebar'; 
import { addObserver, appState, dispatch } from "../../store/index";
import Firebase from "../../utils/Firebase";
import editpStyle from './editpStyle.css';


const credentials = { usermane: "", email: "", password: "", newpassword: "" };

export default class editprofile extends HTMLElement {
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
            css.innerHTML = editpStyle ;
            this.shadowRoot?.appendChild(css);
        }
        const Maincontainer = this.ownerDocument.createElement("section")
        Maincontainer.className = 'Maincontainer'
    
        const editPContainer = this.ownerDocument.createElement("section")
        editPContainer.className = 'editPContainer'
    
        const Exitbtn = this.ownerDocument.createElement("button")
        Exitbtn.className = "ExitBotton"
        Exitbtn.innerText = "X"
        Exitbtn.addEventListener("click",() =>{
          dispatch(navigate(Screens.EDITPROFILE));
        } );
        editPContainer.appendChild(Exitbtn);
    
}
}

customElements.define('edprof-cont', editprofile)
