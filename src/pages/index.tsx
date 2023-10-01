/**
 * トップページ
 */

import Link from 'next/link';

import Meta from '@/components/templates/_Base/Meta/Meta';

export default function Home() {
  return (
    <>
      <Meta pageTitle='トップページ' />
      <main className='p-8'>
        <h1 className='bg-white'>APP</h1>
        <p className='ex1 mt-4 flex-0'>ex1</p>
        <Link
          href=''
          className='ex2 mt-4'
        >
          ex2
        </Link>
      </main>
    </>
  );
}
