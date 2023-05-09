import { Shapeslogan } from "../types/Shapeslogan";
import { slogandata } from "../mocks/homeslogan"; 

class Shapehome{
    async get(): Promise<Shapeslogan[]> {
      console.log("starting fetch...");
      const value: Shapeslogan[] = await new Promise((resolve) => {
        setTimeout(() => resolve(slogandata), 3000);
      });
      return value;
    }
  }
  
  export default new Shapehome();