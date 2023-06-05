/* import dashboardStyle from './dashboard.css';

import Signbutton from "../../components/Signbutton/signbutton";
import { getmessage, logIn } from "../../store/actions";
import { getvideo } from "../../store/actions";

/* import LogIn from "../../components/log in/login"; */
/* import Messagecard, { messageAtt } from "../../components/message/message"
import Myvid, { videoAtt } from "../../components/vidss/vid"
import { addObserver, appState, dispatch } from "../../store/index";
import  sidebar  from '../../components/sidebar/sidebar'; 

import  Upperbar  from '../../components/Upperbar/upperbar'; 




class dashboardContainer extends HTMLElement {
  messageContainer: Messagecard[] = [];
  videoContainer: Myvid[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.message.length === 0) {
      const actionMs = await getmessage();
      dispatch(actionMs);
    } if (appState.video.length === 0) {
      const actionVd = await getvideo();
      dispatch(actionVd);
    } else {
      this.render();
    }
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
    
      const css = this.ownerDocument.createElement("style");
      css.innerHTML = dashboardStyle;
      this.shadowRoot?.appendChild(css);
  }


    const Upper = this.ownerDocument.createElement('my-upperbar') as Upperbar;
    Upper.className = 'upper-section'
    this.shadowRoot?.appendChild(Upper); 

    const button = this.ownerDocument.createElement('sign-button') as Signbutton;
    button.className = 'button-section'
    this.shadowRoot?.appendChild(button);

    const side = this.ownerDocument.createElement('side-bar') as sidebar;
    this.shadowRoot?.appendChild(side); 
    

    appState.video.forEach((data) => {
      const vidCard = this.ownerDocument.createElement("my-vid") as Myvid;
      vidCard.setAttribute(videoAtt.heart, data.heart);
      vidCard.setAttribute(videoAtt.like, data.likes);
      vidCard.setAttribute(videoAtt.comment, data.comment);
      vidCard.setAttribute(videoAtt.share, data.share);
      vidCard.setAttribute(videoAtt.profpic, data.profpic);
      vidCard.setAttribute(videoAtt.profname, data.profname);
      vidCard.setAttribute(videoAtt.videsc, data.videsc);
      this.videoContainer.push(vidCard);
    });

    const vidCards = this.ownerDocument.createElement("section");
    vidCards.className = 'vforcontainer'
    this.videoContainer.forEach((vidCard) => {
      vidCards.appendChild(vidCard);
    })

    this.shadowRoot?.appendChild(vidCards);
 */

    //*Message

   /*  const messageSection = this.ownerDocument.createElement("section-message");
    messageSection.className = 'messageSection'

    appState.message.forEach((data) => {
      const messageCard = this.ownerDocument.createElement("message-contentcard") as Messagecard;
      messageCard.setAttribute(messageAtt.profile, data.profile);
      messageCard.setAttribute(messageAtt.comment, data.comment);
      messageCard.setAttribute(messageAtt.name, data.name);
      messageCard.setAttribute(messageAtt.days, data.days);
      this.messageContainer.push(messageCard);
    });


    const messageCards = this.ownerDocument.createElement("section");
    messageCards.className = 'Mcontent'
    this.messageContainer.forEach((messageCard) => {
      messageCards.appendChild(messageCard);
    })
    messageSection.appendChild(messageCards)
    this.shadowRoot?.appendChild(messageCards);

    const signB = button.shadowRoot?.getElementById('signButton');
    console.log(signB) */

    /* const login = this.ownerDocument.createElement('log-in') as LogIn; */
    
    /* this.shadowRoot?.appendChild(login);
    
    const loginSection = login.shadowRoot?.getElementById('mainLogin'); */
    
   /*  console.log("pipipi",loginSection)
    signB?.addEventListener('click', () => {
    console.log (loginSection?.classList) 
      loginSection?.classList.remove("noShow")
      console.log (loginSection?.classList) */
      
 /*    }
  }









customElements.define("my-dashboard", dashboardContainer); */


 import  Upperbar  from '../../components/Upperbar/upperbar';
 import  sidebar  from '../../components/sidebar/sidebar'; 
 import { addObserver, appState, dispatch } from "../../store/index";
 import { navigate } from "../../store/actions";
 import { Screens } from "../../types/navigatio";
 import dashboardStyle from './dashboard.css';

 


export default class home extends HTMLElement {
  constructor(){
      super();
      this.attachShadow({mode: "open"})
      addObserver(this);
  }

  async connectedCallback() {
    if (appState.message.length === 0) {
      const actionMs = await readmessage();
      dispatch(actionMs);
    } if (appState.video.length === 0) {
      const actionVd = await readvideo();
      dispatch(actionVd);
    } else {
      this.render();
    }
  }


  render() {if (this.shadowRoot) {
    this.shadowRoot.innerHTML = ``;
  
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = dashboardStyle;
    this.shadowRoot?.appendChild(css);
}

      if(this.shadowRoot)this.shadowRoot.innerHTML='';

     

      const h3 = this.ownerDocument.createElement("h3");
      h3.className="Uppercontainer"
      h3.innerText= "helloooo"

      this.shadowRoot?.appendChild(h3);

      const Upper = this.ownerDocument.createElement('my-upperbar') as Upperbar;
      Upper.className = 'upper-section'
      this.shadowRoot?.appendChild(Upper);

      const sinbtn = this.ownerDocument.createElement("button")
        sinbtn .className = "LoginBotton"
        sinbtn .innerText = "Login"
        sinbtn .addEventListener("click",() =>{
          dispatch(navigate(Screens.LOGIN));
        } );

        this.shadowRoot?.appendChild(sinbtn);
    

      

     

  }}

customElements.define('home-cont', home)



  
