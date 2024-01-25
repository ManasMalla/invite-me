import { Contact } from "./contact";
import { Parents } from "./parents";

export class Bride {
  constructor({ contact, image, name, occupation, parents, short_name }) {
    this.contact = new Contact(contact);
    this.image = image;
    this.name = name;
    this.occupation = occupation;
    this.parents = new Parents(parents);
    this.short_name = short_name;
  }
}
