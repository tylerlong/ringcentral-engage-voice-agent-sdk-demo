import SoftphoneService from '@ringcentral/engage-voice-agent-softphone';
(global as any).SoftphoneService = SoftphoneService;

import AgentSDK from '@ringcentral/engage-voice-agent';

import RingCentral from '@rc-ex/core';

const agentSDK = new AgentSDK({
  authHost: 'https://engage.ringcentral.com',
  isSecureSocket: true,
});

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

(async () => {
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });

  agentSDK.authenticateAgentWithRcAccessToken(
    rc.token!.access_token!,
    'Bearer',
    authenticateRequest => {
      console.log(authenticateRequest);
    }
  );
})();
