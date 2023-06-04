import Signstyle from "./signbutton.css"

class Signbutton extends HTMLElement {
    button?: HTMLElement;

   

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "signButton"
        this.button.id = "signButton"
        this.button.textContent = 'Sign up';
        
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = Signstyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("sign-button", Signbutton);
export default Signbutton;