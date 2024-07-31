'use client';

import { Button } from '@my-kitty/ui';


export default function Web() {
  return (
    <div className='text-3xl text-red-500'>
      <h1>Web</h1>
      <Button onClick={() => console.log('Pressed!')} text="Boop" />
    </div>
  );
}
