import Map from '@/components/Map';
import Markers from '@/components/Markers';

import StoreBox from '@/components/StoreBox';
import { StoreType } from '@/interface';

export default async function Home() {
  const stores: StoreType[] = await getData();
  console.log('stores', stores);
  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.log('errorrrr');
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (e) {
    console.log(e);
  }
}
