import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>devdeadly</title>
        <meta name="description" content="delivering byte-sized software engineering content" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex items-center justify-center w-screen h-screen bg-gray-200">
        <div className="flex flex-col items-end">
          <h1 className="text-5xl font-black tracking-tight text-slate-600">
            dev<span className="text-slate-800">deadly</span>
          </h1>
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-slate-600 text-2xs">by Colby Thomas </h2>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
