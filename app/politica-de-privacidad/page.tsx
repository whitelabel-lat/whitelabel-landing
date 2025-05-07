"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Política de Privacidad | Vale.ia";
  }, []);

  return (
    <>
      <HeroPrimary title="Política de Privacidad y Manejo de Datos" />

      <main className="container mx-auto px-4 py-12 lg:py-20">
        {/* Índice de navegación */}
        <nav className="mb-12 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Contenido</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(10)].map((_, i) => (
              <li key={i}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  {i + 1}. {getSectionTitle(i + 1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido principal */}
        <div className="prose max-w-none">
          {[...Array(10)].map((_, i) => (
            <section
              key={i}
              id={`section-${i + 1}`}
              className="mb-12 p-8 bg-white rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6">
                {i + 1}. {getSectionTitle(i + 1)}
              </h2>
              {renderSectionContent(i + 1)}
            </section>
          ))}
        </div>

        {/* Botón de regreso */}
        <footer className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <p className="text-sm text-gray-600 text-center">
            Última actualización: 04 de enero de 2025
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-colors"
            >
              <span className="mr-2">←</span> Volver al inicio
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

// Función auxiliar para obtener títulos de sección
function getSectionTitle(section: number): string {
  const titles: { [key: number]: string } = {
    1: "Introducción",
    2: "Responsable del tratamiento de datos",
    3: "Datos que recopilamos",
    4: "Finalidades del tratamiento de datos",
    5: "Relación con los usuarios finales",
    6: "Derechos de los titulares de datos",
    7: "Transferencia y conservación de datos",
    8: "Política de cookies",
    9: "Modificaciones a la política",
    10: "Legislación aplicable y jurisdicción"
  };
  return titles[section];
}

function renderSectionContent(section: number): JSX.Element {
  const content: { [key: number]: string } = {
    1: `Whitelabel SAS, una empresa especializada en soluciones de agentes inteligentes impulsados por inteligencia artificial, se compromete firmemente a proteger la privacidad y seguridad de los datos personales recopilados a través de nuestra plataforma Vale.ia. Este compromiso está respaldado por el cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013, y otras normativas internacionales aplicables. Al utilizar los servicios de Vale.ia, tanto nuestros clientes como los usuarios finales de sus servicios reconocen y aceptan los términos descritos en esta política de privacidad.`,
    2: `Whitelabel SAS actúa como el responsable del tratamiento de los datos personales recolectados a través de la plataforma Vale.ia, garantizando su manejo ético y conforme a la ley. Nuestra información de contacto es la siguiente:

    <ul>
      <li><strong>Razón social:</strong> Whitelabel SAS</li>
      <li><strong>NIT:</strong> 901086196-2</li>
      <li><strong>Dirección:</strong> Cra 20 N° 6-65, Girardot, Cundinamarca, Colombia</li>
      <li><strong>Correo electrónico:</strong> hola@whitelabel.lat</li>
      <li><strong>Teléfono:</strong> +57 311 253 0069</li>
    </ul>
    Para consultas relacionadas con el tratamiento de datos personales, estamos disponibles en los canales mencionados anteriormente.`,
    3: `Recopilamos los siguientes datos personales con el propósito de prestar y optimizar nuestros servicios:

    <ul>
      <li><strong>Datos del cliente:</strong> Nombre completo, NIT, dirección de correo electrónico, número de teléfono, dirección física y detalles de facturación.</li>
      <li><strong>Datos de los usuarios finales:</strong> Información proporcionada durante interacciones como nombres, apellidos, números de teléfono, direcciones de correo electrónico, contenido de mensajes y grabaciones de llamadas.</li>
      <li><strong>Datos técnicos:</strong> Información del dispositivo, tipo de navegador y datos generales de geolocalización obtenidos a través de herramientas analíticas como Google Analytics.</li>
    </ul>
    La recopilación de estos datos se realiza de manera transparente y con el conocimiento de los titulares involucrados.`,
    4: `Utilizamos los datos recopilados para los siguientes fines específicos:

    <ul>
      <li><strong>Prestación del servicio:</strong> Garantizar el funcionamiento correcto y eficiente de la plataforma Vale.ia, facilitando la comunicación y el intercambio de información entre clientes y usuarios finales.</li>
      <li><strong>Cumplimiento normativo:</strong> Asegurar que nuestras operaciones cumplan con las leyes y regulaciones aplicables, incluyendo la protección de datos personales.</li>
      <li><strong>Mejora continua:</strong> Analizar las interacciones para identificar áreas de mejora y optimizar nuestros servicios.</li>
      <li><strong>Comunicación comercial:</strong> Informar a nuestros clientes sobre actualizaciones, nuevos productos y servicios relevantes para su actividad.</li>
    </ul>
    Los datos serán tratados exclusivamente para los fines descritos y bajo estrictas medidas de seguridad.`,
    5: `En nuestra relación con los usuarios finales, Whitelabel SAS actúa como el responsable del tratamiento de datos personales recolectados mediante Vale.ia. Sin embargo, es obligación del cliente garantizar que sus usuarios finales estén informados y hayan otorgado su consentimiento para el uso de sus datos según lo estipulado por la ley.

    Whitelabel SAS proporciona a sus clientes un modelo de aviso de privacidad que puede ser adaptado y compartido con los usuarios finales, asegurando así el cumplimiento de las normativas aplicables.`,
    6: `De acuerdo con la Ley 1581 de 2012, los titulares de datos personales tienen los siguientes derechos:

    <ul>
      <li><strong>Acceso:</strong> Conocer los datos personales que se encuentran en nuestras bases de datos.</li>
      <li><strong>Rectificación:</strong> Solicitar correcciones en caso de que los datos sean inexactos o incompletos.</li>
      <li><strong>Cancelación:</strong> Pedir la eliminación de datos cuando sea procedente.</li>
      <li><strong>Oposición:</strong> Restringir o limitar el uso de sus datos personales en ciertas circunstancias.</li>
    </ul>
    Para ejercer estos derechos, los titulares pueden contactarnos a través de:

    <ul>
      <li><strong>Correo electrónico:</strong> hola@whitelabel.lat</li>
      <li><strong>Teléfono:</strong> +57 311 253 0069</li>
    </ul>
    Respondemos a todas las solicitudes relacionadas con estos derechos dentro de los plazos establecidos por la ley.`,
    7: `Conservamos los datos personales durante el tiempo necesario para cumplir con las finalidades del tratamiento. En el caso de una terminación de la relación contractual, los datos se mantendrán durante un período de 90 días, tras el cual serán eliminados de manera segura y definitiva, salvo disposición legal en contrario.`,
    8: `Nuestra plataforma utiliza cookies con el objetivo de:

    <ul>
      <li>Brindar una experiencia personalizada a los usuarios.</li>
      <li>Recopilar datos estadísticos sobre el uso de la plataforma.</li>
      <li>Recordar configuraciones y preferencias del usuario.</li>
    </ul>
    Los usuarios tienen la opción de gestionar y bloquear las cookies a través de la configuración de sus navegadores. La desactivación de cookies puede afectar algunas funcionalidades del servicio.`,
    9: `Whitelabel SAS se reserva el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán comunicados a los clientes mediante correo electrónico y reflejados en la sección correspondiente dentro de la plataforma. El uso continuado de los servicios después de la notificación de los cambios implica la aceptación de los mismos.`,
    10: `Esta política de privacidad se rige por la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia. Cualquier controversia derivada de su interpretación o aplicación será resuelta ante los tribunales competentes de Bogotá, Colombia.`
  };

  return (
    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content[section] }} />
  );
}

export default PrivacyPolicy;
