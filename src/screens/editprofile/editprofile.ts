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
    
        const Exitbtn = this.ownerDocument.createElement("h1")
        Exitbtn.className = "ExitBotton"
        Exitbtn.innerText = "X"
        Exitbtn.addEventListener("click",() =>{
          dispatch(navigate(Screens.EDITPROFILE));
        } );
        editPContainer.appendChild(Exitbtn);

     
    
        const dapu = this.ownerDocument.createElement("h1");
        dapu .className = "daputxt"
        dapu.innerText = "dap.u"
        editPContainer.appendChild(dapu);

        const username = this.ownerDocument.createElement("input");
        username.placeholder = "username";
        username.className = "userInput"
        username.type = "username";
        username.addEventListener(
          "change", (e: any) => (credentials.email = e.target.value)
        );
        editPContainer.appendChild(username);
    
    
        const email = this.ownerDocument.createElement("input");
        email.placeholder = "Email";
        email.className = "userInput"
        email.type = "email";
        email.addEventListener(
          "change", (e: any) => (credentials.email = e.target.value)
        );
        editPContainer.appendChild(email);
    
        const password = this.ownerDocument.createElement("input");
        password.placeholder = "Password...";
        password.className = "userInput"
        password.type = "password";
        password.addEventListener(
          "change", (e: any) => (credentials.password = e.target.value)
        );
        editPContainer.appendChild(password);

        const newpassword = this.ownerDocument.createElement("input");
        newpassword.placeholder = "new Password...";
        newpassword.className = "userInput"
        newpassword.type = "password";
        newpassword.addEventListener(
          "change", (e: any) => (credentials.password = e.target.value)
        );
        editPContainer.appendChild(newpassword);

        
        const Savebtn = this.ownerDocument.createElement("h1")
        Savebtn.className = "SaveBotton"
        Savebtn.innerText = "Save"
        Savebtn.addEventListener("click",() =>{
          dispatch(navigate(Screens.PROFILE));
        } );
        editPContainer.appendChild(Savebtn);
    
        Maincontainer.appendChild(editPContainer)
        this.shadowRoot?.appendChild(Maincontainer);
        this.shadowRoot?.appendChild(editPContainer);
    
}
}

customElements.define('edprof-cont', editprofile)
