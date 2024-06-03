import { Metadata } from 'next';
import React from 'react';
import './default.css';

export const metadata: Metadata = {
  title: "Terms - Cheetah English",
  description: "@2024 Chyper Clond. All Rights Reserved.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}