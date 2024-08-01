'use client';

import { Button } from '@my-kitty/ui';

import '../styles/global.css';

export default function Web() {
  return (
    <div className="text-center  text-3xl text-red-500">
      <h1>Web</h1>
      <Button onClick={() => console.log('Pressed!')} text="Boop" />
    </div>
  );
}
