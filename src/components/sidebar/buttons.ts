import sidestyles from "./sidebarStyles.css"

export enum AttributeSidebutton {
    "text" = "text"
}

export default class Sidebutton extends HTMLElement {
    text?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeSidebutton, null> = {
            text: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeSidebutton,
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
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const style=this.ownerDocument.createElement('style')
        style.innerHTML= sidestyles;
        this.shadowRoot?.appendChild(style);

       const buttonSection = this.ownerDocument.createElement('section');
       buttonSection.className= "button-section"
       

        const button1 = this.ownerDocument.createElement('button');
        button1.setAttribute("id","button1")
        button1.innerText = "Music Sheets";
        button1.addEventListener('click',() =>{
            
        })
        buttonSection.appendChild(button1);

        const button2 = this.ownerDocument.createElement('button');
        button2.innerText = "Jams";
        button2.addEventListener('click',() =>{
           
        })

        const button3 = this.ownerDocument.createElement('button');
        button3.innerText = "Discover";
        button3.addEventListener('click',() =>{
           
        })
        

        buttonSection.appendChild(button1);
        buttonSection.appendChild(button2);
        buttonSection.appendChild(button3);
        this.shadowRoot?.appendChild(buttonSection);
    }
}

customElements.define('side-button',Sidebutton);