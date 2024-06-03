import { Metadata } from 'next';
import React from 'react';
import './default.css';

export const metadata: Metadata = {
  title: "Terms - Cheetah Português",
  description: "@2024 Chyper Clond. Tudo reservado.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}