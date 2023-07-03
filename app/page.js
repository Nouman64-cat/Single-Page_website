
import { Explore, Hero, Work } from '@components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col ml-10 mr-10 mt-5">
      <Hero />
      <Work />
      <Explore />
    </main>
  )
}
