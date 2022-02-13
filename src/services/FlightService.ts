import { GenericService } from "./GenericService";

export class FlightService {
  private static instance: FlightService;
  private constructor() {}

  public static getInstance(): FlightService {
    if (!FlightService.instance) {
      FlightService.instance = new FlightService();
    }
    return FlightService.instance;
  }

  async getDestinations(): Promise<APIResponse> {
    return GenericService.get({
      endpoint: "/destination",
    });
  }
}
