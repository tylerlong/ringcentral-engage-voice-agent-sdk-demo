declare module '@ringcentral/engage-voice-agent' {
  type AgentSDKOptions = {
    authHost?: string;
    isSecureSocket?: boolean;
    allowMultiSocket?: boolean;
    callbacks?: {[key: string]: Function};
  };

  const AgentSDK: {
    new (options: AgentSDKOptions): typeof AgentSDK;
    authenticateAgentWithUsernamePassword: Function;
    authenticateAgentWithRcAccessToken: Function;
    authenticateAgentWithEngageAccessToken: Function;
  };

  export default AgentSDK;
}
