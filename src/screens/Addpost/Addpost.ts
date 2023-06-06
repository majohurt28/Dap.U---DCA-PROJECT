import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import  Upperbar  from '../../components/Upperbar/upperbar';
import  sidebar  from '../../components/sidebar/sidebar'; 
import { addObserver, appState, dispatch } from "../../store/index";
import { Shapepost } from "../../types/Shapeposts";
import { saveproduct } from "../../store/actions";
import Firebase from "../../utils/Firebase";
import addStyle from './addpost.css';

const imputs: Shapepost = {
    comment: "",
    img: "",
   
} 
const credentials = { usermane: "", email: "", password: "", newpassword: "" };

export default class Addpost extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
  
    connectedCallback() {
      this.render();
    }

    render() {
    
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = addStyle ;
            this.shadowRoot?.appendChild(css);
        }

        const Maincontainer = this.ownerDocument.createElement("section")
        Maincontainer.className = 'Maincontainer'

        const editPContainer = this.ownerDocument.createElement("section")
        editPContainer.className = 'editPContainer'
        Maincontainer.appendChild(editPContainer)
        const Exitbtn = this.ownerDocument.createElement("h1")
    Exitbtn.className = "ExitBotton"
    Exitbtn.innerText = "X"
    Exitbtn.addEventListener("click",() =>{
      dispatch(navigate(Screens.PROFILE));
    } );
    editPContainer.appendChild(Exitbtn);

        const Comment = this.ownerDocument.createElement('label');
        Comment.className= "comment"
        Comment.textContent = "Comment..."
        editPContainer.appendChild(Comment)

        const comment = this.ownerDocument.createElement('input');
        comment .className= "comminput"
        comment.addEventListener("change",(e: any) => {
            imputs.comment = e.target.value;
        });
        editPContainer.appendChild(comment)
        
        const Img = this.ownerDocument.createElement('label');
        Img.className= "comment2"
        Img.textContent = "Share a photo!"
        editPContainer.appendChild(Img)
        
       /*  const img = this.ownerDocument.createElement('input');
        
        img.addEventListener("change",(e: any) => {
            const file = img.files?.[0];
            imputs.img = e.target.value;
            if (file) Firebase.uploadFile(file);
        }); */


        const iImg = this.ownerDocument.createElement("input");
        iImg.placeholder = "Upload file"
      iImg.type = "file";
      iImg .className = "imginput"
      iImg.addEventListener("change", (e: any) => {
       imputs.img = e.target.value;
        const file = iImg.files?.[0];
        if (file) Firebase.uploadFile(file);
      });
      editPContainer.appendChild(iImg)


        const saveB = this.ownerDocument.createElement('button');
        saveB.textContent = "Post";
        saveB .className = "postB"
        saveB.addEventListener("click", async () => {
            console.log(imputs);
            dispatch(await saveproduct(imputs));
        });
        editPContainer.appendChild(saveB)

       /*  const iImg = this.ownerDocument.createElement("input");
        iImg.type = "file";
        iImg.addEventListener("change", (e: any) => {
          const file = iImg.files?.[0];
          if (file) Firebase.uploadFile(file);
        });  */
        
     
      
        
        /* this.shadowRoot?.appendChild(img); */
        
        this.shadowRoot?.appendChild(Maincontainer);
        

       
}
}

customElements.define('addpost-cont', Addpost)
