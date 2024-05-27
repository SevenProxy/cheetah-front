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
      <body>
        {children}
      </body>
    </html>
  );
}