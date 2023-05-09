import homestyles from './home.css';

import Messagecard, { messageAtt} from "../../components/message/message"
import Myvid,{ videoAtt} from "../../components/vidss/vid"
import {Shapemessage} from "../../types/Shapemessage"
import {Shapevideo} from "../../types/Shapevideo"
import {vdata} from "../../mocks/getVideo"
import Shapevideos from "../../services/apiVideo"




class homeContainer extends HTMLElement {
    messageContainer: Messagecard[] = [];
    videoContainer: Myvid[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }



      render(vdata:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';


      vdata.forEach((e: Shapevideo) => {
        const vidCard = this.ownerDocument.createElement("my-vid") as Myvid;
        vidCard.setAttribute(videoAtt.heart, e.heart);
        vidCard.setAttribute(videoAtt.like, e.likes);
        vidCard.setAttribute(videoAtt.comment, e.comment);
        vidCard.setAttribute(videoAtt.share, e.share);
        vidCard.setAttribute(videoAtt.profpic, e.profpic);
        vidCard.setAttribute(videoAtt.profname, e.profname);
        vidCard.setAttribute(videoAtt.videsc, e.videsc);
        this.videoContainer.push(vidCard);
    });

    const vidCards = this.ownerDocument.createElement("section");
    vidCards.className ='vforcontainer'
    this.videoContainer.forEach((vidCard) => {
        vidCards.appendChild(vidCard);
    })
    
    this.shadowRoot?.appendChild(vidCards);


}}

customElements.define("my-home", homeContainer);