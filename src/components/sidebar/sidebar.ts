import Sidebutton, { AttributeSidebutton } from "../sidebar/buttons";
import { AttributeIcon } from "../sidebar/icons";

export enum AttributeSidebar {
    "text" = "text",
    "icon" = "icon",
}

export default class sidebar extends HTMLElement{
    text: string ="";
    icon: string="";

    static get observedAttributes(){
        const attrs: Record <AttributeSidebar,null> = {
            text: null,
            icon: null
        }
        return Object.keys(attrs);
    }
    attributeChangedCallback(
        propName: AttributeSidebar,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        constructor(){
            super();
            this.attachShadow({mode: 'open'});
        }

        connectedCallback(){
            this.render();
        }
        render(){
            if(this.shadowRoot) this.shadowRoot.innerHTML = '';

            const container = this.ownerDocument.createElement('section');

            const button = this.ownerDocument.createElement('side-button') as Sidebutton;
            button.setAttribute(AttributeSidebutton.text, this.text);

            const icon = this.ownerDocument.createElement('side-icon');
            icon.setAttribute(AttributeIcon.icon, this.icon);
    
           

            container.appendChild(icon);
            container.appendChild(button);

            this.shadowRoot?.appendChild(container)
        }
}

customElements.define('side-bar',sidebar);

