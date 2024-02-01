import { EventTimings } from "./event_timing";
import { Venue } from "./venue";
import { WarmingEventTimings } from "./wraming_event_timing";

export class InvitationDetails {
  constructor({ date, eventTimings, time, venue }) {
    this.date = date;
    this.eventTimings = new EventTimings(eventTimings);
    this.time = time;
    this.venue = new Venue(venue);
  }
}

export class WarmingInvitationDetails {
  constructor({ date, eventTimings, time, venue }) {
    this.date = date;
    this.eventTimings = new WarmingEventTimings(eventTimings);
    this.time = time;
    this.venue = new Venue(venue);
  }
}
