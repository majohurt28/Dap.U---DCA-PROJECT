import loginstyles from "./login.css"

class LogIn extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.render()
        }
    }

    render() {
        this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = loginstyles;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <section id="mainLogin" class="popUp noShow">
            <div class="popUpBody">
                <div class="closeButtonContainer">
                    <p id="closePopUp">X</p>
                </div>
                <h1 class="announce">Log in to Dap.U</h1>
                <input class="input" type="text" placeholder="Username"></input>
                <input class="input" type="password" placeholder="Password"></input>
                <button class="button" id="logInButton">Log In</button>
                <p>Do you not have an account? <a id="signUpButton" class="logIn">Sign Up.</a></p>
            </div>
        </section>
        `

        const mainLogin = this.shadowRoot!.getElementById('mainLogin')
        const closePopUp = this.shadowRoot!.getElementById('closePopUp')
        closePopUp?.addEventListener('click', () =>{
            mainLogin?.classList.add("noShow")
        })
    }
}

customElements.define('log-in', LogIn)
export default LogIn