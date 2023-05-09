import { Shapediscovery } from "../types/Shapediscovery"; 
import { discoveries } from "../mocks/getdiscovery"; 

class Shapediscoveries {
    async get(): Promise<Shapediscovery[]> {
      console.log("starting fetch...");
      const value: Shapediscovery[] = await new Promise((resolve) => {
        setTimeout(() => resolve(discoveries), 3000);
      });
      return value;
    }
  }
  
  export default new Shapediscoveries();