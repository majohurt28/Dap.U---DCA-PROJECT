
import musicsheetStyle from './musicsheet.css';

import Sheetcard, { Attributesheet } from "../../components/Musicsheet/musicsheet"
import Upperbar from '../../components/Upperbar/upperbar';
import { musicsheet } from "../../mocks/getMusicsheets"
import ShapemusicSheets from "../../services/apimusicsheets"
import { Shapemusicsheet } from "../../types/Shapemusicsheet"
import { addObserver, appState, dispatch } from "../../store/index";


class Musicontainer extends HTMLElement {
    sheetContainer: Sheetcard[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        if (appState.sheets.length === 0) {
          const actionMs = await getsheet();
          dispatch(actionMs);
        } 
      }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';

        appState.sheets.forEach((e: Shapemusicsheet) => {
            const sheetCard = this.ownerDocument.createElement("sheet-contentcard") as Sheetcard;
            sheetCard.setAttribute(Attributesheet.sheet, e.sheet);
            this.sheetContainer.push(sheetCard);
        });

        const sheetCards = this.ownerDocument.createElement("section");
        sheetCards.className = 'sheetContainer'
        this.sheetContainer.forEach((sheetCard) => {
            sheetCards.appendChild(sheetCard);
        })
        console.log(sheetCards);
        this.shadowRoot?.appendChild(sheetCards);

    }
}

customElements.define('app-musicsheet', Musicontainer);



