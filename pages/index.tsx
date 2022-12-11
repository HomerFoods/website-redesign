import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../app/components/hero';
import Navbar from "../app/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen px-4 flex-col">
      <Head>
        <title>HomerFoods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <Hero />
    </div>
  )
}

export default Home
