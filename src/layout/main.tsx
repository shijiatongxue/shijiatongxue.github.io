import React from 'react';

import Router from '../router';
import '../styles/main.scss';

export default function Main() {
  return (
    <main className="main p-4 md:p-8 xl:m-auto box-border">
      <Router />
    </main>
  );
}
