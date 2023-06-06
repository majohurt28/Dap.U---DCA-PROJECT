import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigatio";
import  Upperbar  from '../../components/Upperbar/upperbar';
import  sidebar  from '../../components/sidebar/sidebar'; 
import Firebase from "../../utils/Firebase";
import { addObserver, appState, dispatch } from "../../store/index";
import profilestyle from './profilestyle.css';



const credentials = { usermane: "", description: "", };

export default class profile extends HTMLElement {
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
            css.innerHTML = profilestyle ;
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
      
      //Profile
      const Profile = this.ownerDocument.createElement("section")
      Profile.className = 'Profile'
      MainContainer.appendChild(Profile );

    const infoProfile = this.ownerDocument.createElement("section")
    infoProfile.className = 'infoProfile'
    Profile.appendChild(infoProfile );

    const logAccount = this.ownerDocument.createElement('label');
    logAccount .className = "User"
    logAccount.textContent = "Username"
    infoProfile.appendChild(logAccount);

    const uptbtn = this.ownerDocument.createElement("h1")
    uptbtn .className = "upBotton"
    uptbtn.textContent = "✚"
    uptbtn .addEventListener("click",() =>{
      dispatch(navigate(Screens.EDITPROFILE));
    } );
    infoProfile.appendChild(uptbtn);

    const editbtn = this.ownerDocument.createElement("button")
    editbtn .className = "EditBotton"
    editbtn .innerText = "Edit profile"
    editbtn .addEventListener("click",() =>{
      dispatch(navigate(Screens.EDITPROFILE));
    } );
    infoProfile.appendChild(editbtn);

    const content = this.ownerDocument.createElement("section")
    content.className = 'content'
    MainContainer.appendChild(content )

    this.shadowRoot?.appendChild(MainContainer );

    }
    }

    customElements.define("app-profile", profile );