import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soluciones de IA Whitelabel | Tu Empresa',
  description: 'Automatiza procesos empresariales con IA personalizada. Soluciones whitelabel que transforman la eficiencia de tu empresa.',
  keywords: 'IA, inteligencia artificial, automatización, whitelabel, procesos empresariales, eficiencia empresarial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}