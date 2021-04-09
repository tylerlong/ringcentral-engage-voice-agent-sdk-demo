import SoftphoneService from '@ringcentral/engage-voice-agent-softphone';
(global as any).SoftphoneService = SoftphoneService;

import AgentSDK from '@ringcentral/engage-voice-agent';

const agentSDK = new AgentSDK({
  authHost: 'https://engage.ringcentral.com',
  isSecureSocket: true,
});

(global as any).agentSDK = agentSDK;
