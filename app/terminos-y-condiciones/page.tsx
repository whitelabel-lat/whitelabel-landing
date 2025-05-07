"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Términos y Condiciones | Vale.ia";
  }, []);

  return (
    <>
      <HeroPrimary title="Términos y Condiciones de Vale.ia" />

      <main className="container mx-auto px-4 py-12 lg:py-20">
        <nav className="mb-12 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Contenido</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li><a href="#introduccion" className="text-purple-600 hover:text-purple-800 transition-colors">1. Introducción</a></li>
            <li><a href="#definiciones" className="text-purple-600 hover:text-purple-800 transition-colors">2. Definiciones</a></li>
            <li><a href="#datos" className="text-purple-600 hover:text-purple-800 transition-colors">3. Propiedad y Custodia</a></li>
            <li><a href="#servicios" className="text-purple-600 hover:text-purple-800 transition-colors">4. Servicios</a></li>
            <li><a href="#obligaciones" className="text-purple-600 hover:text-purple-800 transition-colors">5. Obligaciones</a></li>
            <li><a href="#pagos" className="text-purple-600 hover:text-purple-800 transition-colors">6. Pagos</a></li>
          </ul>
        </nav>

        <div className="space-y-12">
          <section id="introduccion" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos y condiciones regulan el uso de la plataforma Vale.ia, propiedad de Whitelabel SAS.
              Al utilizar nuestros servicios, el cliente acepta estas condiciones en su totalidad.
              Si no está de acuerdo, deberá abstenerse de utilizar la plataforma.
            </p>
          </section>

          <section id="definiciones" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">2. Definiciones</h2>
            <div className="text-gray-700 leading-relaxed">
              <ul className="space-y-4">
                <li><strong>Vale.ia:</strong> Plataforma de inteligencia artificial desarrollada por Whitelabel SAS para gestionar mensajes y llamadas inbound y outbound de manera automatizada.</li>
                <li><strong>Cliente:</strong> Usuario titular de una suscripción activa en la plataforma.</li>
                <li><strong>Créditos:</strong> Unidad de uso en Vale.ia que permite enviar mensajes o realizar llamadas.</li>
                <li><strong>Torre de Control:</strong> Plataforma interna donde los clientes gestionan sus créditos, configuración y reportes.</li>
                <li><strong>Datos:</strong> Toda información generada a través de la plataforma, incluyendo mensajes, grabaciones y metadatos.</li>
              </ul>
            </div>
          </section>

          <section id="datos" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">3. Propiedad, Custodia y Privacidad de los Datos</h2>
            <div className="text-gray-700 leading-relaxed">
              <ul className="space-y-4">
                <li><strong>Propiedad:</strong> Los datos generados en Vale.ia son propiedad de Whitelabel SAS, que actúa como responsable del tratamiento de acuerdo con las leyes aplicables. Los clientes tienen acceso y uso limitado de los datos según las políticas de privacidad de Whitelabel SAS.</li>
                <li><strong>Consentimiento:</strong> Los clientes deberán aceptar las políticas de privacidad de Whitelabel SAS como parte del registro y uso de Vale.ia. Esto incluye garantizar que informan y obtienen el consentimiento de sus propios usuarios finales para el tratamiento de sus datos personales.</li>
                <li><strong>Privacidad y seguridad:</strong> Whitelabel SAS custodia los datos bajo estándares de seguridad reconocidos internacionalmente y cumple con las leyes colombianas (Ley 1581 de 2012) y el Reglamento General de Protección de Datos (GDPR).</li>
                <li><strong>Respaldo y eliminación:</strong> Los datos serán respaldados periódicamente y eliminados automáticamente 90 días después de la terminación del contrato, salvo requerimientos legales que indiquen lo contrario.</li>
              </ul>
            </div>
          </section>

          <section id="servicios" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">4. Servicios</h2>
            <p className="text-gray-700 leading-relaxed">
              Vale.ia ofrece una plataforma tecnológica que permite la gestión automatizada de mensajes y llamadas. Los servicios incluyen:
            </p>
            <ul className="space-y-4">
              <li><strong>Automatización:</strong> Envío y recepción de mensajes y llamadas mediante inteligencia artificial.</li>
              <li><strong>Gestión:</strong> Control de créditos, reportes detallados y configuración personalizada a través de la Torre de Control.</li>
              <li><strong>Soporte:</strong> Asistencia técnica para garantizar la continuidad del servicio.</li>
            </ul>
          </section>

          <section id="obligaciones" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">5. Obligaciones del Cliente</h2>
            <ul className="space-y-4">
              <li><strong>Uso adecuado:</strong> El cliente se compromete a utilizar la plataforma de manera responsable, evitando actividades ilícitas o no autorizadas.</li>
              <li><strong>Información precisa:</strong> El cliente deberá proporcionar información veraz y actualizada durante el registro y uso del servicio.</li>
              <li><strong>Confidencialidad:</strong> Mantener la confidencialidad de sus credenciales de acceso y reportar inmediatamente cualquier uso no autorizado.</li>
            </ul>
          </section>

          <section id="pagos" className="p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">6. Pagos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los pagos por los servicios de Vale.ia se realizarán de acuerdo con los planes seleccionados por el cliente. Las condiciones incluyen:
            </p>
            <ul className="space-y-4">
              <li><strong>Métodos de pago:</strong> Transferencias electrónicas, tarjetas de crédito o cualquier método habilitado en la plataforma.</li>
              <li><strong>Facturación:</strong> Los clientes recibirán una factura electrónica mensual con el detalle de los servicios utilizados.</li>
              <li><strong>Suspensión:</strong> El incumplimiento en los pagos podrá resultar en la suspensión temporal o definitiva del servicio.</li>
            </ul>
          </section>
        </div>

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

export default TermsAndConditions;
