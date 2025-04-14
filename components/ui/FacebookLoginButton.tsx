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
        const message = JSON.parse(event.data);

        if (message.type === "WA_EMBEDDED_SIGNUP" && message.data) {
          const {
            access_token,
            phone_number_id,
            whatsapp_business_account_id,
            business_id,
            display_phone_number,
            name,
          } = message.data;

          console.log("✅ Datos recibidos del onboarding:", message.data);

          // Enviar los datos al backend
          fetch("https://valeian8n.vercel.app/api/onboarding/callback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              access_token,
              phone_number_id,
              whatsapp_business_account_id,
              business_id,
              display_phone_number,
              name,
            }),
          })
            .then((res) => {
              if (res.ok) {
                console.log("✅ Datos enviados al backend correctamente");
                // Redirigir al usuario al finalizar
                window.location.href =
                  "https://valeian8n.vercel.app/onboarding-finish";
              } else {
                console.error("❌ Error al enviar datos al backend", res.status);
              }
            })
            .catch((error) => {
              console.error("❌ Error en el fetch:", error);
            });
        }
      } catch (err) {
        console.error("❌ Error parseando el mensaje:", event.data);
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
      Conectar con WhatsApp
    </button>
  );
};

export default FacebookLoginButton;
