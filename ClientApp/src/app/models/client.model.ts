// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

export class Client {
  // Note: Using only optional constructor properties without backing store disables typescript's type checking for the type
  constructor(absoluteRefreshTokenLifetime?: number, accessTokenLifetime?: number, consentLifetime?: number, accessTokenType?: number, allowAccessTokensViaBrowser?: boolean, allowOfflineAccess?: boolean, allowPlainTextPkce?: boolean, allowRememberConsent?: boolean, alwaysIncludeUserClaimsInIdToken?: boolean, alwaysSendClientClaims?: boolean, authorizationCodeLifetime?: number, frontChannelLogoutUri?: string, frontChannelLogoutSessionRequired?: boolean, backChannelLogoutUri?: string, backChannelLogoutSessionRequired?: boolean, clientId?: string, clientName?: string, clientUri?: string, description?: string, enabled?: boolean, enableLocalLogin?: boolean, id?: number, identityTokenLifetime?: number, includeJwtId?: boolean, logoUri?: string, clientClaimsPrefix?: string, pairWiseSubjectSalt?: string, protocolType?: string, refreshTokenExpiration?: number, refreshTokenUsage?: number, slidingRefreshTokenLifetime?: number, requireClientSecret?: boolean, requireConsent?: boolean, requirePkce?: boolean, updateAccessTokenClaimsOnRefresh?: boolean, postLogoutRedirectUris?: string[], identityProviderRestrictions?: string[], redirectUris?: string[], allowedCorsOrigins?: string[], allowedGrantTypes?: string[], allowedScopes?: string[], claims?: string[], clientSecrets?: string[], properties?: string[], updated?: string, lastAccessed?: string, userSsoLifetime?: number, userCodeType?: string, deviceCodeLifetime?: number) {

    this.absoluteRefreshTokenLifetime = absoluteRefreshTokenLifetime;
    this.accessTokenLifetime = accessTokenLifetime;
    this.consentLifetime = consentLifetime;
    this.accessTokenType = accessTokenType;
    this.allowAccessTokensViaBrowser = allowAccessTokensViaBrowser;
    this.allowOfflineAccess = allowOfflineAccess;
    this.allowPlainTextPkce = allowPlainTextPkce;
    this.allowRememberConsent = allowRememberConsent;
    this.alwaysIncludeUserClaimsInIdToken = alwaysIncludeUserClaimsInIdToken;
    this.alwaysSendClientClaims = alwaysSendClientClaims;
    this.authorizationCodeLifetime = authorizationCodeLifetime;
    this.frontChannelLogoutUri = frontChannelLogoutUri;
    this.frontChannelLogoutSessionRequired = frontChannelLogoutSessionRequired;
    this.backChannelLogoutUri = backChannelLogoutUri;
    this.backChannelLogoutSessionRequired = backChannelLogoutSessionRequired;
    this.clientId = clientId;
    this.clientName = clientName;
    this.clientUri = clientUri;
    this.description = description;
    this.enabled = enabled;
    this.enableLocalLogin = enableLocalLogin;
    this.id = id;
    this.identityTokenLifetime = identityTokenLifetime;
    this.includeJwtId = includeJwtId;
    this.logoUri = logoUri;
    this.clientClaimsPrefix = clientClaimsPrefix;
    this.pairWiseSubjectSalt = pairWiseSubjectSalt;
    this.protocolType = protocolType;
    this.refreshTokenExpiration = refreshTokenExpiration;
    this.refreshTokenUsage = refreshTokenUsage;
    this.slidingRefreshTokenLifetime = slidingRefreshTokenLifetime;
    this.requireClientSecret = requireClientSecret;
    this.requireConsent = requireConsent;
    this.requirePkce = requirePkce;
    this.updateAccessTokenClaimsOnRefresh = updateAccessTokenClaimsOnRefresh;
    this.postLogoutRedirectUris = postLogoutRedirectUris;
    this.identityProviderRestrictions = identityProviderRestrictions;
    this.redirectUris = redirectUris;
    this.allowedCorsOrigins = allowedCorsOrigins;
    this.allowedGrantTypes = allowedGrantTypes;
    this.allowedScopes = allowedScopes;
    this.claims = claims;
    this.clientSecrets = clientSecrets;
    this.properties = properties;
    this.updated = updated;
    this.lastAccessed = lastAccessed;
    this.userSsoLifetime = userSsoLifetime;
    this.userCodeType = userCodeType;
    this.deviceCodeLifetime = deviceCodeLifetime;
  }

  public absoluteRefreshTokenLifetime: number;
  public accessTokenLifetime: number;
  public consentLifetime: number;
  public accessTokenType: number;
  public allowAccessTokensViaBrowser: boolean;
  public allowOfflineAccess: boolean;
  public allowPlainTextPkce: boolean;
  public allowRememberConsent: boolean;
  public alwaysIncludeUserClaimsInIdToken: boolean;
  public alwaysSendClientClaims: boolean;
  public authorizationCodeLifetime: number;
  public frontChannelLogoutUri: string;
  public frontChannelLogoutSessionRequired: boolean;
  public backChannelLogoutUri: string;
  public backChannelLogoutSessionRequired: boolean;
  public clientId: string;
  public clientName: string;
  public clientUri: string;
  public description: string;
  public enabled: boolean;
  public enableLocalLogin: boolean;
  public id: number;
  public identityTokenLifetime: number;
  public includeJwtId: boolean;
  public logoUri: string;
  public clientClaimsPrefix: string;
  public pairWiseSubjectSalt: string;
  public protocolType: string;
  public refreshTokenExpiration: number;
  public refreshTokenUsage: number;
  public slidingRefreshTokenLifetime: number;
  public requireClientSecret: boolean;
  public requireConsent: boolean;
  public requirePkce: boolean;
  public updateAccessTokenClaimsOnRefresh: boolean;
  public postLogoutRedirectUris: string[];
  public identityProviderRestrictions: string[];
  public redirectUris: string[];
  public allowedCorsOrigins: string[];
  public allowedGrantTypes: string[];
  public allowedScopes: string[];
  public claims: string[];
  public clientSecrets: string[];
  public properties: string[];
  public updated: string;
  public lastAccessed: string;
  public userSsoLifetime: number;
  public userCodeType: string;
  public deviceCodeLifetime: number;
}
