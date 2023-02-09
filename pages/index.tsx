import type { NextPage } from 'next'
import Head from 'next/head'
import Features from '../app/components/features';
import Footer from '../app/components/footer';
import Hero from '../app/components/hero';
import Navbar from "../app/components/Navbar";
import Notif from '../app/components/notification';
import Special from '../app/components/special';
import Testimonial from '../app/components/testimonial';
import Trust from '../app/components/trust';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Head>
          <title>HomerFoods</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-[#FFFBF0] overflow-hidden h-[42pc]">
          <Navbar />

          <Hero />
        </div>

        <Trust />


        <Features />

        <Notif />

        <Testimonial />

        <div className="h-[485px] w-full bg-[#FFF8E4] rounded-[12px] mb-[101px]"></div>
      </div>
      <Footer />
    </>
  );
}

export default Home
