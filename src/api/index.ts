import { HTTPClient } from "@/lib/http";

const api = new HTTPClient(process.env.REACT_APP_API || "");

export { api };
