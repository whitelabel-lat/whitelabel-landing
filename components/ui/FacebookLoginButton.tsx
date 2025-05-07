"use client";

import { useEffect, useState } from "react";
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
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!FB) return;

    // Función para procesar el código de autorización
    const processAuthCode = async (code: string) => {
      try {
        // Llamada al endpoint para intercambiar el código por los datos del negocio
        const response = await fetch("https://valeian8n.whitelabel.lat/api/auth/exchange-code/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error('Error exchanging code');
        }

        const data = await response.json();

        // Enviar los datos del negocio al webhook
        const webhookResponse = await fetch("https://valeian8n.whitelabel.lat/api/onboarding/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (webhookResponse.ok) {
          console.log("✅ Datos enviados al webhook correctamente");
          window.location.href = "https://valeian8n.whitelabel.lat/onboarding-finish";
        } else {
          console.error("❌ Error al enviar datos al webhook", webhookResponse.status);
        }
      } catch (error) {
        console.error("❌ Error procesando el código de autorización:", error);
      } finally {
        setIsProcessing(false);
      }
    };

    const handleMessageEvent = (event: MessageEvent) => {
      // Verificar origen del mensaje
      if (
        event.origin !== "https://www.facebook.com" &&
        event.origin !== "https://web.facebook.com"
      )
        return;

      try {
        // Si el mensaje contiene un código de autorización directo
        if (event.data && typeof event.data === 'string' && event.data.includes('code=')) {
          const codeMatch = event.data.match(/code=([^&]+)/);
          if (codeMatch && codeMatch[1]) {
            processAuthCode(codeMatch[1]);
          }
        }

        // Si el mensaje es un objeto con datos del onboarding
        else if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (data.type === "WA_EMBEDDED_SIGNUP" && data.data) {
            fetch("https://valeian8n.whitelabel.lat/api/onboarding/callback", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data.data),
            })
              .then((res) => {
                if (res.ok) {
                  console.log("✅ Datos enviados al webhook correctamente");
                  window.location.href = "https://valeian8n.whitelabel.lat/onboarding-finish";
                } else {
                  console.error("❌ Error al enviar datos al webhook", res.status);
                }
              })
              .catch((error) => {
                console.error("❌ Error en el fetch:", error);
              });
          }
        }
      } catch (err) {
        console.error("❌ Error procesando mensaje:", err);
      }
    };

    window.addEventListener("message", handleMessageEvent);
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  }, [FB]);

  const launchWhatsAppSignup = () => {
    if (!FB || isProcessing) return;

    setIsProcessing(true);
    FB.logout(() => {
      FB.login(
        (response: any) => {
          if (response.authResponse && response.authResponse.code) {
            console.log("✅ Código de autorización recibido:", response.authResponse.code);
          } else {
            console.error("❌ Error en la respuesta de login:", response);
            setIsProcessing(false);
          }
        },
        {
          config_id: configurationId,
          response_type: "code",
          override_default_response_type: true,
          scope: [
            "whatsapp_business_management",
            "whatsapp_business_messaging",
            "business_management",
            "pages_show_list"
          ].join(","),
          auth_type: 'rerequest',
          redirect_uri: "https://valeian8n.whitelabel.lat/api/auth/exchange-code/",
          extras: {
            setup: {},
            feature: "whatsapp_embedded_signup",
            version: "v22.0",
          },
        }
      );
    });
  };

  return (
    <button
      onClick={launchWhatsAppSignup}
      disabled={isProcessing}
      style={{
        backgroundColor: isProcessing ? "#cccccc" : "#1877f2",
        border: 0,
        borderRadius: "4px",
        color: "#fff",
        cursor: isProcessing ? "not-allowed" : "pointer",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        height: "40px",
        padding: "0 24px",
        transition: "background-color 0.3s ease",
      }}
    >
      {isProcessing ? "Procesando..." : "Conectar con WhatsApp"}
    </button>
  );
};

export default FacebookLoginButton;