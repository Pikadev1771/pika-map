'use client';

import { useRouter } from 'next/navigation';

export default function StoreEditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = params?.id;
  return (
    <div>
      <h1>Store Edit: {id}</h1>
    </div>
  );
}
