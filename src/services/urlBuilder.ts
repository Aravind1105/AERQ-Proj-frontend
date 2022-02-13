import { Config } from "../config";

export class urlBuilder {
  private url: string;
  private resource: string;
  private params: Record<string, string>;

  constructor() {
    this.url = `${Config.BASE_URL}`;
    this.resource = "";
    this.params = {};
  }

  path = (path: string): urlBuilder => {
    this.resource = `${path}`;
    return this;
  };

  param = (key: string, value: string): urlBuilder => {
    this.params[key] = value;
    return this;
  };

  build = (): string => {
    let url = this.url + this.resource;
    let query = "?";
    let esc = encodeURIComponent;
    query += Object.keys(this.params)
      .map((k) => esc(k) + "=" + esc(this.params[k]))
      .join("&");
    return url + query;
  };
}
