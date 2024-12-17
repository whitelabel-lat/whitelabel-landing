"use client";

import { useEffect } from "react";
import useFacebookSDK from "../../hooks/useFacebookSDK";

interface FacebookLoginButtonProps {
  appId: string;
  apiVersion: string;
  configurationId: string;
}

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  appId,
  apiVersion,
  configurationId,
}) => {
  const FB = useFacebookSDK(appId, apiVersion);

  useEffect(() => {
    if (!FB) return;

    const handleMessageEvent = (event: MessageEvent) => {
      if (
        event.origin !== "https://www.facebook.com" &&
        event.origin !== "https://web.facebook.com"
      )
        return;

      try {
        const data = JSON.parse(event.data);
        if (data.type === "WA_EMBEDDED_SIGNUP") {
          console.log("Message Event:", data);
        }
      } catch {
        console.error("Message Event Error:", event.data);
      }
    };

    window.addEventListener("message", handleMessageEvent);
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  }, [FB]);

  const launchWhatsAppSignup = () => {
    if (!FB) return;

    FB.login(
      (response: any) => {
        if (response.authResponse) {
          const code = response.authResponse.code;
          console.log("Auth Response Code:", code);
        } else {
          console.error("Login Response Error:", response);
        }
      },
      {
        config_id: configurationId,
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "",
          sessionInfoVersion: "3",
        },
      }
    );
  };

  return (
    <button
      onClick={launchWhatsAppSignup}
      style={{
        backgroundColor: "#1877f2",
        border: 0,
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        height: "40px",
        padding: "0 24px",
      }}
    >
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
