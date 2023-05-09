/* import landtyles from './landing.css';

import Landsect1  from "../../components/Landing/landing";
import Signbutton  from "../../components/Signbutton/signbutton";
import { addObserver, appState, dispatch } from "../../store/index";

class Landscreen extends HTMLElement {

    constructor(){
        super();
            this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        if (appState.trips.length === 0) {
          const action = await getTrips();
          dispatch(action);
        } else {
          this.render();
        }
      }

        render() {
    
                if (this.shadowRoot) {
                    this.shadowRoot.innerHTML = ``;
                  
                    const css = this.ownerDocument.createElement("style");
                    css.innerHTML = landtyles;
                    this.shadowRoot?.appendChild(css);
                }

        const Land1 = this.ownerDocument.createElement("home-contentcard") as Landsect1 
        this.shadowRoot?.appendChild(Land1);

        const buttons = this.ownerDocument.createElement("section")
        buttons.className = "buttons-Section"
        this.shadowRoot?.appendChild(buttons);

        const SignButton  = this.ownerDocument.createElement("button-signup") as Signbutton ;
        buttons.appendChild(SignButton );

       

}}

customElements.define('app-landscreen', Landscreen)
 */