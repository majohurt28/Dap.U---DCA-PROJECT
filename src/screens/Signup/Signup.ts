/* import Firebase from "../../utils/Firebase"; */
import signStyle from "./signStyle.css";
import Signbutton from "../../components/Signbutton/signbutton";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import { addObserver, appState, dispatch } from "../../store/index";
import Firebase from "../../utils/Firebase";

const credentials = { email: "", password: "" };

export default class Signup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  async handlesignButton() {
    const resp = await Firebase.registerUser(credentials);
    console.log(resp);
    if (resp) {
      dispatch(navigate(Screens.LOGIN));
      sessionStorage.clear();
    };
    
  }

  render() {
    
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
      
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = signStyle ;
        this.shadowRoot?.appendChild(css);
    }
    const Maincontainer = this.ownerDocument.createElement("section")
    Maincontainer.className = 'Maincontainer'

    const SignContainer = this.ownerDocument.createElement("section")
    SignContainer.className = 'SignContainer'

    const Exitbtn = this.ownerDocument.createElement("button")
    Exitbtn.className = "ExitBotton"
    Exitbtn.innerText = "X"
    Exitbtn.addEventListener("click",() =>{
      dispatch(navigate(Screens.DASHBOARD));
    } );
    SignContainer.appendChild(Exitbtn);

    const Newaccount = this.ownerDocument.createElement("h1");
    Newaccount.innerText = "Create an account"
    SignContainer.appendChild(Newaccount);

    const email = this.ownerDocument.createElement("input");
    email.placeholder = "Email";
    email.className = "SignInput"
    email.type = "email";
    email.addEventListener(
      "change", (e: any) => (credentials.email = e.target.value)
    );
    SignContainer.appendChild(email);

    const password = this.ownerDocument.createElement("input");
    password.placeholder = "Password...";
    password.className = "SignInput"
    password.type = "password";
    password.addEventListener(
      "change", (e: any) => (credentials.password = e.target.value)
    );
    SignContainer.appendChild(password);

    Maincontainer.appendChild(SignContainer)
    this.shadowRoot?.appendChild(Maincontainer);
    this.shadowRoot?.appendChild(SignContainer);

    const signButton = this.ownerDocument.createElement("sign-button") as Signbutton;
    signButton.addEventListener("click", this.handlesignButton);
    SignContainer.appendChild(signButton);
    this.shadowRoot?.appendChild(SignContainer);

    const accountD = this.ownerDocument.createElement("section")
    accountD .className = "DescriptionDiv"
    SignContainer.appendChild(accountD );

    const logAccount = this.ownerDocument.createElement('label');
    logAccount.textContent = "Already have an account?"
    accountD.appendChild(logAccount  );

    const loginbtn = this.ownerDocument.createElement("button")
    loginbtn .className = "LoginBotton"
    loginbtn .innerText = "Login"
    loginbtn .addEventListener("click",() =>{
      dispatch(navigate(Screens.LOGIN));
    } );

    accountD.appendChild(loginbtn);
    SignContainer.appendChild(accountD );
    this.shadowRoot?.appendChild(SignContainer);
    Maincontainer .appendChild(SignContainer);
    this.shadowRoot?.appendChild(Maincontainer );

    
  
  }
}customElements.define("app-signup", Signup);