import { Bride } from "./bride.js";
import { ContactInformation } from "./contact_information.js";
import { Groom } from "./groom.js";
import { ImportantLink } from "./important_link.js";
import { InvitationDetails } from "./invitation_details.js";
import { MapAndDirections } from "./map_direction.js";
import { Transportation } from "./transportation.js";

export class Wedding {
  constructor({
    bride,
    contactInformation,
    groom,
    importantLinks,
    invitationDetails,
    mapAndDirections,
    transportation,
  }) {
    this.bride = new Bride(bride);
    this.contactInformation = new ContactInformation(contactInformation);
    this.groom = new Groom(groom);
    this.importantLinks = importantLinks.map((link) => new ImportantLink(link));
    this.invitationDetails = new InvitationDetails(invitationDetails);
    this.mapAndDirections = new MapAndDirections(mapAndDirections);
    this.transportation = new Transportation(transportation);
  }
}

