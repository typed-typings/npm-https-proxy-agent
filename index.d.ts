import { Agent } from 'http';

declare class HttpsProxyAgent extends Agent {
  constructor (uri: string | { protocol: string; host: string; port?: string });
}

export = HttpsProxyAgent;
