import React from 'react'
import Head from 'next/head'
import { Button } from 'ui'

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>AuresX - Solving the Unsolved</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {/* eslint-disable-next-line no-alert */}
      <Button onClick={() => alert('something happened')}>Hello</Button>
    </main>
  </div>
)

export default Home
