import { Organizer } from "./organizer";

export class ContactInformation {
  constructor({ organizer }) {
    this.organizer = new Organizer(organizer);
  }
}
