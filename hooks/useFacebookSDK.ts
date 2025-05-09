import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const useFacebookSDK = (appId: string, apiVersion: string) => {
  const [fbInstance, setFbInstance] = useState<any>(null);

  useEffect(() => {
    // Si ya existe el SDK de Facebook
    if (window.FB) {
      setFbInstance(window.FB);
      return;
    }

    // Cargar el script de Facebook
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/en_US/sdk.js";

    script.onload = () => {
      window.fbAsyncInit = function () {
        try {
          window.FB.init({
            appId: appId,
            autoLogAppEvents: true,
            xfbml: true,
            version: apiVersion,
          });
          console.log('Facebook SDK initialized');
          setFbInstance(window.FB);
        } catch (error) {
          console.error('Error initializing Facebook SDK:', error);
        }
      };

      // Llamar a fbAsyncInit manualmente por si ya estaba cargado
      if (window.fbAsyncInit) {
        window.fbAsyncInit();
      }
    };

    document.body.appendChild(script);
  }, [appId, apiVersion]);

  return fbInstance;
};

export default useFacebookSDK;
