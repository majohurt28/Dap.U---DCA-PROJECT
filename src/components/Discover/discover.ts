export enum Attributediscover{
    "discover" = "discover",
    

}

class Discovercard extends HTMLElement{
    discover?: string
   
    
    static get observedAttributes(){
        const attrs : Record<Attributediscover,null> ={
            discover: null,
          
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attributediscover,oldValue: undefined,newValue: string){
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
            this.shadowRoot.innerHTML = `
            
            
            <div class="sheet-containercard">
            <img class="disc" src="${this.discover}"
           
            </div>
            
            
            
            `
        }
    }

}

customElements.define("discover-contentcard", Discovercard)
export default Discovercard;