import loginStyle from "./login.css";
import { dispatch } from "../../store";
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
    }
    async handleLoginButton() {
        const resp = await Firebase.loginUser(credentials);
        if (resp) {
          dispatch(navigate(Screens.DASHBOARD));
        } else {
          alert("Datos incorrectos");
        }
        console.log(resp);
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
        title.innerText = "Welcome! please sign in";
        logContainer?.appendChild(title);
    
        const email = this.ownerDocument.createElement("input");
        email.placeholder = "Email";
        email.type = "Email";
        email.addEventListener(
          "change",
          (e: any) => (credentials.email = e.target.value)
        );
        logContainer?.appendChild(email);
    
        const password = this.ownerDocument.createElement("input");
        password.placeholder = "*********";
        password.type = "Password";
        password.addEventListener(
          "change",
          (e: any) => (credentials.password = e.target.value)
        );
        logContainer?.appendChild(password);
    
        const loginBtn = this.ownerDocument.createElement("button");
        loginBtn.innerText = "Login";
        loginBtn.addEventListener("click", this.handleLoginButton);
        logContainer?.appendChild(loginBtn);
        Maincontainer?.appendChild(logContainer);
        this.shadowRoot?.appendChild(Maincontainer);
      }
    }
    
    customElements.define("app-login", Login);
    
