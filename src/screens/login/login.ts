import loginStyle from "./login.css";
import { addObserver, appState,dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import Firebase from "../../utils/Firebase";


const credentials = { email: "", password: "" };

export default class Login extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
      console.log('AppState',appState.user);
    }
    async handleLoginButton() {
      Firebase.loginUser(credentials);
      console.log(appState.user)
      }
    
      render() {
    
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginStyle;
            this.shadowRoot?.appendChild(css);
        }

        const Maincontainer = this.ownerDocument.createElement('section');
        Maincontainer .className = 'mainContainer';

        const logContainer = this.ownerDocument.createElement('section');
        logContainer.className = 'loginContainer';

        const title = this.ownerDocument.createElement("h1");
        title .className = 'title';
        title.innerText = "Log in to Dap.u";
        logContainer?.appendChild(title);
    
        const email = this.ownerDocument.createElement("input");
        email.className = "input"
        email.placeholder = "Email";
        email.type = "Email";
        email.addEventListener(
          "change",
          (e: any) => (credentials.email = e.target.value)
        );
        logContainer?.appendChild(email);
    
        const password = this.ownerDocument.createElement("input");
        password.className = "input"
        password.placeholder = "*********";
        password.type = "Password";
        password.addEventListener(
          "change",
          (e: any) => (credentials.password = e.target.value)
        );
        logContainer?.appendChild(password);
    
        const loginBtn = this.ownerDocument.createElement("button");
        loginBtn .className = "LoginBotton"
        loginBtn.innerText = "Login";
        loginBtn.addEventListener("click", this.handleLoginButton);
        logContainer?.appendChild(loginBtn);

        const accountD = this.ownerDocument.createElement("section")
        accountD .className = "DescriptionDiv"
        logContainer.appendChild(accountD );
    
        const logAccount = this.ownerDocument.createElement('label');
        logAccount .className = "logtxt"
        logAccount.textContent = "Do you not have an account? "
        accountD.appendChild(logAccount  );
    
        const sinbtn = this.ownerDocument.createElement("button")
        sinbtn .className = "SignBotton"
        sinbtn .innerText = "Sign Up"
        sinbtn .addEventListener("click",() =>{
          dispatch(navigate(Screens.SIGNUP));
        } );
    
        accountD.appendChild(sinbtn);
        logContainer.appendChild(accountD );

        Maincontainer?.appendChild(logContainer);
        this.shadowRoot?.appendChild(Maincontainer);

      }
    }
    
    customElements.define("app-login", Login);
    
