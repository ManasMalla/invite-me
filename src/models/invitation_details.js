import { EventTimings } from "./event_timing";
import { Venue } from "./venue";

export class InvitationDetails {
  constructor({ date, eventTimings, time, venue }) {
    this.date = date;
    this.eventTimings = new EventTimings(eventTimings);
    this.time = time;
    this.venue = new Venue(venue);
  }
}
