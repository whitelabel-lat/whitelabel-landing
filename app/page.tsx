"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Settings, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import FacebookLoginButton from "../components/ui/FacebookLoginButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              La IA que acelera tu empresa, sin esfuerzo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Productos whitelabel con IA que automatizan procesos y multiplican tu eficiencia
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
              Descubre cómo lo logramos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ¿Tu negocio se frena por tareas manuales?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nuestra IA personalizada automatiza lo repetitivo para que tu equipo enfoque su tiempo en lo que realmente importa.
              </p>
              <Button variant="outline" className="group">
                Ver demostración
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="AI Solutions"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Automatización Total</h3>
              <p className="text-gray-600">
                Optimiza cada proceso con soluciones inteligentes que se adaptan a tu flujo de trabajo.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Velocidad sin Límites</h3>
              <p className="text-gray-600">
                Entrega más resultados en menos tiempo con procesos optimizados por IA.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Tecnología a tu Medida</h3>
              <p className="text-gray-600">
                IA personalizada y adaptada perfectamente a tu marca y necesidades.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <p className="text-xl mb-6 text-gray-700">
                "Eliminamos 20 horas semanales de trabajo manual gracias a las soluciones de IA."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Ana López"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Ana López</p>
                  <p className="text-gray-600">CEO de FastCorp</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <p className="text-xl mb-6 text-gray-700">
                "La implementación fue rápida y los resultados superaron nuestras expectativas."
              </p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Carlos Ruiz"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Carlos Ruiz</p>
                  <p className="text-gray-600">Director de Innovación, TechPro</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Agenda una demostración personalizada y descubre el poder de la IA
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
            Agenda una demostración
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contacto</h3>
        <p>contacto@tuempresa.com</p>
        <p>+34 900 123 456</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </div>
      {/* Botón de Facebook */}
      <div>
        <h3 className="text-xl font-bold mb-4">Login</h3>
        <FacebookLoginButton appId="516359088080867" apiVersion="v21.0" configurationId="2266726483726993" />
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
      <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
    </main>
  );
}