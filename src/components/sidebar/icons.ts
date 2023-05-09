export enum AttributeIcon {
    "icon" = "icon",
    
}

export default class Icon extends HTMLElement {
    icon?: string;
    

    static get observedAttributes(){
        const attrs: Record <AttributeIcon, null> = {
            icon: null,
           
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeIcon,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section>
                <img src="${this.icon}">
                </section>
            `
        }
    }
}

customElements.define('side-icon',Icon);