/* import Firebase from "../../utils/Firebase"; */
import signStyle from "./signStyle.css";
import Signbutton from "../../components/Signbutton/signbutton";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import { addObserver, appState, dispatch } from "../../store/index";
import Firebase from "../../utils/Firebase";

const credentials = { email: "", password: "" };

class Signup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  async handleLoginButton() {
    const resp = await Firebase.registerUser(credentials);
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
        css.innerHTML = signStyle ;
        this.shadowRoot?.appendChild(css);
    }
    const container = this.ownerDocument.createElement("section")
    container.className = 'Maincontainer'

    const SignContainer = this.ownerDocument.createElement("section")
    SignContainer.className = 'SignContainer'

    const icon = this.ownerDocument.createElement("img")
    icon.src = "/img/arrow_left.png"
    icon.className = "iconArrow"
    icon.addEventListener("click", this.backWindow);
    SignContainer.appendChild(icon)

    const loginDiv = this.ownerDocument.createElement("login-div") as LoginDiv;
    SignContainer.appendChild(loginDiv)
    this.shadowRoot?.appendChild(SignContainer);

    const email = this.ownerDocument.createElement("input");
    email.placeholder = "Email";
    email.className = "BigInput"
    email.type = "email";
    email.addEventListener(
      "change",
      (e: any) => (credentials.email = e.target.value)
    );
    InputSection.appendChild(email);

    const password = this.ownerDocument.createElement("input");
    password.placeholder = "Password";
    password.className = "BigInput"
    password.type = "password";
    password.addEventListener(
      "change",
      (e: any) => (credentials.password = e.target.value)
    );
    InputSection.appendChild(password);

    SignContainer.appendChild(InputSection)

    const checkBoxLogin = this.ownerDocument.createElement("checkbox-login") as CheckBoxLogin;

    SignContainer.appendChild( checkBoxLogin)
    this.shadowRoot?.appendChild(SignContainer);

    const buttonSign = this.ownerDocument.createElement("button-sign") as ButtonSign;
    buttonSign.addEventListener("click", this.handleSignUpButton);
    SignContainer.appendChild(buttonSign)
    this.shadowRoot?.appendChild(SignContainer);

    const DescriptionDiv = this.ownerDocument.createElement("section")
    DescriptionDiv.className = "DescriptionDiv"

    const descLogin = this.ownerDocument.createElement("description-login") as DescriptionCardLogin;
    DescriptionDiv.appendChild(descLogin)

    const buttonLog = this.ownerDocument.createElement("button");
    buttonLog.innerText = "Login"
    buttonLog.className = "Link"
    buttonLog.addEventListener("click", this.changeWindow);
    DescriptionDiv.appendChild(buttonLog)

    SignContainer.appendChild(DescriptionDiv)
    this.shadowRoot?.appendChild(SignContainer);

    container.appendChild(SignContainer);
    this.shadowRoot?.appendChild(container);

    
  
  }
}customElements.define("app-signup", Signup);