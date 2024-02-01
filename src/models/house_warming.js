import { Bride } from "./bride.js";
import { ContactInformation } from "./contact_information.js";
import { Groom } from "./groom.js";
import { ImportantLink } from "./important_link.js";
import { InvitationDetails } from "./invitation_details.js";
import { MapAndDirections } from "./map_direction.js";
import { Transportation } from "./transportation.js";

export class HouseWarming {
  constructor({ contactInformation, importantLinks, invitationDetails }) {
    this.importantLinks = importantLinks.map((link) => new ImportantLink(link));
    this.invitationDetails = new InvitationDetails(invitationDetails);
  }
}
