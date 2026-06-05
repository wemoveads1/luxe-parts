import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId: "699ad9e693a0b0f8536888e9",
  headers: {
    "api_key": "c26398859181461698cf066e1f64215b"
  }
});
