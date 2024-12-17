import { useState, useEffect } from "react";
import useFacebookSDK from "./useFacebookSDK";

interface LoginStatus {
  status: string;
  authResponse: {
    accessToken?: string;
    expiresIn?: number;
    signedRequest?: string;
    userID?: string;
  } | null;
}

const useFacebookLoginStatus = (appId: string, apiVersion: string) => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({
    status: "unknown",
    authResponse: null,
  });

  const FB = useFacebookSDK(appId, apiVersion);

  useEffect(() => {
    if (FB) {
      FB.getLoginStatus((response: LoginStatus) => {
        setLoginStatus({
          status: response.status,
          authResponse: response.authResponse,
        });
      });
    }
  }, [FB]);

  return loginStatus;
};

export default useFacebookLoginStatus;
