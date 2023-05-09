import { Shapevideo } from "../types/Shapevideo";
import {vdata} from "../mocks/getVideo";

class Shapevideos {
  async get(): Promise<Shapevideo[]> {
    console.log("starting fetch...");
    const value: Shapevideo[] = await new Promise((resolve) => {
      setTimeout(() => resolve(vdata), 3000);
    });
    return value;
  }
}

export default new Shapevideos();