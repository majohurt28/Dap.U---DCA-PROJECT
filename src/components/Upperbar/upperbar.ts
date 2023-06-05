 import barstyle from "../Upperbar/upperbar.css"
 
class Upperbar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        
        if (this.shadowRoot){

        this.shadowRoot!.innerHTML = `
                <div class="bar-section">
                <input class="bar">
                <img class="dapIcon" src="/img/logo blanc.png">
                <img class="searchIcon" src="/img/buscando.png" >
                <input class="search" type="search" placeholder="Search...">
                <img class="profile" src="/img/pngaaa.com-4877784.png">
                <h1 class="dap" >Dap.U</h1>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
        css.innerHTML = barstyle ;
        this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("my-upperbar", Upperbar);
export default Upperbar; 