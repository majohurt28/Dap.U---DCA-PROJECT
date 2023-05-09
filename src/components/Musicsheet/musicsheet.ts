import musicstyle from "./musicsheet.css"

export enum Attributesheet{
    "sheet" = "sheet",

}

class Sheetcard extends HTMLElement{
    
    sheet?: string
    
    
    static get observedAttributes(){
        const attrs : Record<Attributesheet,null> ={
            
            sheet: null,
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attributesheet,oldValue: undefined,newValue: string){
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
        this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = musicstyle ;
        this.shadowRoot?.appendChild(css);
        this.shadowRoot!.innerHTML += `
            
            
            <div class="sheet-containercard">
            <img class="sheet" src="${this.sheet}"
           
            </div>
            
            
            
            `
        }
    }



customElements.define("sheet-contentcard", Sheetcard)
export default Sheetcard;