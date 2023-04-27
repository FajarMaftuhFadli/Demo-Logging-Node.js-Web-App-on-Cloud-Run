import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import Blog from '@/components/Blog';
import Testimonial from '@/components/Testimonial';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import CallToAction from '@/components/CallToAction';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Blog />
      <Testimonial />
      <Stats />
      <CallToAction />
    </main>
  );
}
