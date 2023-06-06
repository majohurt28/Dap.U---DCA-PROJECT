import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import  Upperbar  from '../../components/Upperbar/upperbar';
import  sidebar  from '../../components/sidebar/sidebar'; 
import Firebase from "../../utils/Firebase";
import { addObserver, appState, dispatch } from "../../store/index";
import feedstyle from './feedstyle.css';
import { Shapepost } from "../../types/Shapeposts";




export default class feed extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
  
    async connectedCallback() {
      this.render();
    }

    async render() {
    
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = feedstyle ;
            this.shadowRoot?.appendChild(css);
        }

    
    const MainContainer = this.ownerDocument.createElement("section")
    MainContainer.className = 'MainContainer'

    //BARRA

    const Upper = this.ownerDocument.createElement('my-upperbar') as Upperbar;
    Upper.className = 'upper-section'
    MainContainer.appendChild(Upper);
  

    const logo = this.ownerDocument.createElement('img');
    logo .className = "Dapicon"
    logo .src = "../../../img/logo ama.png";
    Upper.appendChild(logo);

    const Dap = this.ownerDocument.createElement('h1');
    Dap .className = "DapName"
    Dap .innerText = "Dap.U"
    Upper.appendChild(Dap);

   

//BOTONES
  const buttonSection = this.ownerDocument.createElement('section');
     buttonSection.className= "button-section"
     MainContainer.appendChild(buttonSection);


      const button1 = this.ownerDocument.createElement('h1');
      /* button1.setAttribute("id","button1") */
      button1.className= "button"
      button1.innerText = "Feed";
      button1.addEventListener("click",() =>{
        dispatch(navigate(Screens.FEED));
      } );
      buttonSection.appendChild(button1);

      const button2 = this.ownerDocument.createElement('h1');
      button2.className= "button"
      button2.innerText = "Home";
      button2.addEventListener("click",() =>{
        dispatch(navigate(Screens.DASHBOARD));
      } );

      const button3 = this.ownerDocument.createElement('h1');
      button3.className= "button"
      button3.innerText = "Profile";
      button3.addEventListener("click",() =>{
        dispatch(navigate(Screens.PROFILE));
      } );
      
      buttonSection.appendChild(button1);
      buttonSection.appendChild(button2);
      buttonSection.appendChild(button3);
      
      //Feed
      const Feed = this.ownerDocument.createElement("section")
      Feed.className = 'Feed'
      MainContainer.appendChild(Feed);

    const infoFeed = this.ownerDocument.createElement("section")
    infoFeed.className = 'infoFeed'
    Feed.appendChild(infoFeed);


    const content = this.ownerDocument.createElement("section")
    content.className = 'content'
    const postSec = await Firebase.getPost();
    postSec.forEach((p: Shapepost) => {
         
          const name = this.ownerDocument.createElement("h3");
          name.innerText = p.comment;
          container.appendChild(name);
    
          const imgSection = this.ownerDocument.createElement("img");
          imgSection.className = "sec-img"
          imgSection.src = String(p.img);
          container.appendChild(imgSection);
          
          
        });
    const container = this.ownerDocument.createElement("section");
    container.className = "post-content"
    MainContainer.appendChild(content )



    
    this.shadowRoot?.appendChild(MainContainer );

    }
    }

    customElements.define("app-feed", feed );