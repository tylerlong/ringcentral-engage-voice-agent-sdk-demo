declare module '@ringcentral/engage-voice-agent' {
  type AgentSDKOptions = {
    authHost?: string;
    isSecureSocket?: boolean;
    allowMultiSocket?: boolean;
    callbacks?: {[key: string]: Function};
  };

  type Agent = {
    accountId: string;
    accountName: string;
    agentId: number;
    agentType: string;
    email: string;
    firstName: string;
    lastName: string;
    rcUserId: string;
    username: string;
  };

  type AuthenticateRequest = {
    accessToken: string;
    agents: Agent[];
    authType: string;
    mainAccountId: string;
    platformId: string;
    rcAccessToken: string;
    socketPort: number;
    socketUrl: string;
    tokenType: string;
  };

  const AgentSDK: {
    new (options: AgentSDKOptions): typeof AgentSDK;
    authenticateAgentWithUsernamePassword: Function;
    authenticateAgentWithRcAccessToken: (
      rcAccessToken: string,
      tokenType: string,
      callback: (authenticateRequest: AuthenticateRequest) => void
    ) => void;
    authenticateAgentWithEngageAccessToken: Function;
  };

  export default AgentSDK;
}
