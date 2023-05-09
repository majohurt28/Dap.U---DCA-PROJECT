import Landstyle from "./landing.css"

class Landsect1 extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <div class="home-section1">
                    <img class="background" src="/img/friends.png">
                    <p class="slogan">Share your musical passion for free.</p>
                </div>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = Landstyle;
            this.shadowRoot?.appendChild(css);

            
        }
}


customElements.define("home-contentcard", Landsect1   )
export default Landsect1  ;

