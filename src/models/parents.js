import { Father } from "./father";
import { Mother } from "./mother";

export class Parents {
  constructor({ father, mother }) {
    this.father = new Father(father);
    this.mother = new Mother(mother);
  }
}
