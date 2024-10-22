import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './default.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chypher Cloud",
  description: "@2024 Chyper Clond. Tudo reservado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta name="og:site_name" content="Cheetah Solucions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7289da" />
        <meta property="og:image" content="/images/terms-en.png" />
        <meta name="keywords" content="website" />
        <meta
          name="description"
          content="Olá e bem-vindo à Cheetah Solutions Network! Somos especializados em criar comunidades para Discord, desenvolver datas para a comunidade de SA:MP, editar vídeos, criar sites personalizados e bots exclusivos. Estamos prontos para atender às suas necessidades e fortalecer sua comunidade online."
        />
        <link rel="icon" href="/images/logotipo.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
