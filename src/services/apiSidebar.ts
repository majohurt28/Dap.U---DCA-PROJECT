import { Shapesidebar } from "../types/Shapesidebar";
import { apisidebar } from "../mocks/getSidebar";

class Shapesidebars {
    async get(): Promise<Shapesidebar[]> {
      console.log("starting fetch...");
      const value: Shapesidebar[] = await new Promise((resolve) => {
        setTimeout(() => resolve(apisidebar), 3000);
      });
      return value;
    }
  }
  
  export default new Shapesidebars();