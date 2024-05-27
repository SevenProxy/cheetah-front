import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Cheetah English",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta name="og:site_name" content="Cheetah Solucions"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7289da" />
        <meta property="og:image" content="/images/terms-en.png" />
        <meta
          name="description"
          content="Hello and welcome to the Cheetah Solutions Network! We specialize in creating communities for Discord, developing dates for the SA:MP community, editing videos, creating custom websites and unique bots. We are ready to meet your needs and strengthen your online community."
        />
        <link rel="icon" href="/images/logotipo.ico" type="image/x-icon" />
        <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" 
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}