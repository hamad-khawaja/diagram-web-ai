import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || 'dummy-pool-id',
  ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || 'dummy-client-id',
};

if (!process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || !process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID) {
  console.warn('[Cognito] WARNING: Using dummy Cognito UserPoolId/ClientId. Set NEXT_PUBLIC_COGNITO_USER_POOL_ID and NEXT_PUBLIC_COGNITO_CLIENT_ID in your .env.local for real authentication.');
}

const userPool = new CognitoUserPool(poolData);

let cachedSession: CognitoUserSession | null = null;

export async function getCognitoJwt(username: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: username, Password: password });
    user.authenticateUser(authDetails, {
      onSuccess: (session) => {
        cachedSession = session;
        resolve(session.getIdToken().getJwtToken());
      },
      onFailure: (err) => reject(err),
      newPasswordRequired: () => reject(new Error('New password required.')),
    });
  });
}

export function getCachedJwt(): string | null {
  if (cachedSession && cachedSession.isValid()) {
    return cachedSession.getIdToken().getJwtToken();
  }
  return null;
}

export async function refreshCognitoJwt(): Promise<string | null> {
  // This is a placeholder for refresh logic if you want to use refresh tokens.
  // amazon-cognito-identity-js can handle refresh tokens if you store them.
  return null;
}
