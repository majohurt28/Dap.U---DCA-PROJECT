/* import dashboardStyle from './dashboard.css';

import Signbutton from "../../components/Signbutton/signbutton"; */
/* import { getmessage, logIn } from "../../store/actions"; */
/* import { getvideo } from "../../store/actions"; */

/*  import LogIn from "../../components/log in/login";  */
/* /import Messagecard, { messageAtt } from "../../components/message/message"; */
/* import Myvid, { videoAtt } from "../../components/vidss/vid"
import { addObserver, appState, dispatch } from "../../store/index";
import  sidebar  from '../../components/sidebar/sidebar'; 

import  Upperbar  from '../../components/Upperbar/upperbar'; 




export default class home extends HTMLElement { */
  /* messageContainer: Messagecard[] = [];
  videoContainer: Myvid[] = []; */
/* 
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
  this.render()
  }
 */
  
   /* {
    if (appState.message.length === 0) {
      const actionMs = await getmessage();
      dispatch(actionMs);
    } if (appState.video.length === 0) {
      const actionVd = await getvideo();
      dispatch(actionVd);
    } else {
      this.render();
    }
  }  */

  /* render() {
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
    this.shadowRoot?.appendChild(side);  */
    

    /* appState.video.forEach((data) => {
      const vidCard = this.ownerDocument.createElement("my-vid") as Myvid;
      vidCard.setAttribute(videoAtt.heart, data.heart);
      vidCard.setAttribute(videoAtt.like, data.likes);
      vidCard.setAttribute(videoAtt.comment, data.comment);
      vidCard.setAttribute(videoAtt.share, data.share);
      vidCard.setAttribute(videoAtt.profpic, data.profpic);
      vidCard.setAttribute(videoAtt.profname, data.profname);
      vidCard.setAttribute(videoAtt.videsc, data.videsc);
      this.videoContainer.push(vidCard);
    }); */

    /* const vidCards = this.ownerDocument.createElement("section");
    vidCards.className = 'vforcontainer'
    this.videoContainer.forEach((vidCard) => {
      vidCards.appendChild(vidCard);
    }) */

  /*   this.shadowRoot?.appendChild(vidCards);
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










customElements.define('home-cont', home) */


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
  this.render()
  }


  render()  {if (this.shadowRoot) {
    this.shadowRoot.innerHTML = ``;
  
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = dashboardStyle;
    this.shadowRoot?.appendChild(css);
}

/* const Maincontainer = this.ownerDocument.createElement('section');
Maincontainer.className = 'main-section' */
//BARRA

     const Upper = this.ownerDocument.createElement('my-upperbar') as Upperbar;
      Upper.className = 'upper-section'
    

      const logo = this.ownerDocument.createElement('img');
      logo .className = "Dapicon"
      logo .src = "../../../img/logo ama.png";
      Upper.appendChild(logo);

      const Dap = this.ownerDocument.createElement('h1');
      Dap .className = "DapName"
      Dap .innerText = "Dap.U"
      Upper.appendChild(Dap);

      const sinbtn = this.ownerDocument.createElement("button")
      sinbtn .className = "SignBotton"
      sinbtn .innerText = "Sign Up"
      sinbtn .addEventListener("click",() =>{
        dispatch(navigate(Screens.SIGNUP));
      } );
      Upper.appendChild(sinbtn);
      
      const loginbtn = this.ownerDocument.createElement("button")
      loginbtn .className = "LoginBotton"
      loginbtn .innerText = "Login"
      loginbtn .addEventListener("click",() =>{
          dispatch(navigate(Screens.LOGIN));
        } );
        Upper.appendChild(loginbtn);

        const side = this.ownerDocument.createElement('side-bar') as sidebar;
    this.shadowRoot?.appendChild(side); 

  //BOTONES
    const buttonSection = this.ownerDocument.createElement('section');
       buttonSection.className= "button-section"
        const button1 = this.ownerDocument.createElement('h1');
        /* button1.setAttribute("id","button1") */
        button1.className= "button"
        button1.innerText = "Music Sheets";
        button1.addEventListener("click",() =>{
          dispatch(navigate(Screens.SIGNUP));
        } );
        buttonSection.appendChild(button1);

        const button2 = this.ownerDocument.createElement('h1');
        button2.className= "button"
        button2.innerText = "Home";
        button2.addEventListener("click",() =>{
          dispatch(navigate(Screens.SIGNUP));
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
        
        this.shadowRoot?.appendChild(Upper);
        this.shadowRoot?.appendChild(buttonSection);
          
    //*MESSAGE**/
  }}

customElements.define('home-cont', home)





