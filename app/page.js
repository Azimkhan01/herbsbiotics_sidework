import { Lobster_Two } from 'next/font/google'
import React from 'react'

const lobster = Lobster_Two({
  weight:["400","700"],
  subsets:["latin"],
})

function page() {
  return (
    <section
      className={`${lobster.className} flex justify-center items-center h-screen w-full text-6xl md:text-9xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent hover:animate-pulse `}
    >
      Ohosehat
    </section>
  )
}

export default page