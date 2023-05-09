import messagestyle from "./message.css"

export enum messageAtt{
    "profile"= "profile",
    "comment"= "comment",
    "name" = "name",
    "days" = "days",

}

class Messagecard extends HTMLElement{
    profile?: string
    comment?: string
    name?: string
    days?: string
    
    static get observedAttributes(){
        const attrs : Record<messageAtt,null> ={
            profile : null,
            comment :null,
            name: null,
            days: null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: messageAtt,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``
            const css = this.ownerDocument.createElement("style");
        css.innerHTML = messagestyle ;
        this.shadowRoot?.appendChild(css);

            
        this.shadowRoot!.innerHTML += ` 
            <div class="message-containercard">
            <img class="imag" src="${this.profile}">
            <p1><strong>${this.comment}</strong></p1>
            <div class="name-day">
            <h2>${this.name}</h2><h1>${this.days}</h1>
            </div>
            </div>
          
            `
        }
    }

}

customElements.define("message-contentcard", Messagecard)
export default Messagecard;

