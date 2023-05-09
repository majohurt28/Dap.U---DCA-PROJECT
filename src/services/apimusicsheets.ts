import { Shapemusicsheet } from "../types/Shapemusicsheet";
import { musicsheet } from "../mocks/getMusicsheets"; 

class ShapemusicSheets{
    async get(): Promise<Shapemusicsheet[]> {
      console.log("starting fetch...");
      const value: Shapemusicsheet[] = await new Promise((resolve) => {
        setTimeout(() => resolve(musicsheet), 3000);
      });
      return value;
    }
  }
  
  export default new ShapemusicSheets();