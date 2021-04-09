import SoftphoneService from '@ringcentral/engage-voice-agent-softphone';
(global as any).SoftphoneService = SoftphoneService;

import AgentSDK from '@ringcentral/engage-voice-agent';

const agentSDK = new AgentSDK({
  authHost: 'https://engage.ringcentral.com',
  isSecureSocket: true,
});

(global as any).agentSDK = agentSDK;

agentSDK.authenticateAgentWithUsernamePassword(
  process.env.EV_USERNAME,
  process.env.EV_PASSWORD,
  process.env.EV_PLATFORM_ID,
  (...args: any[]) => {
    console.log('authenticateAgentWithUsernamePassword:', ...args);
  }
);
