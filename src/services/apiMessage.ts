import { Shapemessage } from "../types/Shapemessage";
import { message } from "../mocks/getMessage";

class Shapemessages {
  async get(): Promise<Shapemessage[]> {
    console.log("starting fetch...");
    const value: Shapemessage[] = await new Promise((resolve) => {
      setTimeout(() => resolve(message), 3000);
    });
    return value;
  }
}

export default new Shapemessages();