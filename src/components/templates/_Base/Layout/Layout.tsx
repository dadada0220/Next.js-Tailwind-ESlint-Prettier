/**
 * レイアウト
 */

import React, { ReactNode } from 'react';

import Footer from '@/components/templates/Footer/Footer';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
