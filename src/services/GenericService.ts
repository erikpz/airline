export class GenericService {
  private static baseUrl = process.env.REACT_APP_BASE_URL;
  static async get({ endpoint }: GenericServiceParams): Promise<APIResponse> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
    });
    let dataResponse;
    try {
      dataResponse = await response.json();
    } catch (error) {
      console.log(response);
      dataResponse = {};
    }
    return {
      data: dataResponse,
      ok: response.ok,
      status: response.status,
    };
  }
}
