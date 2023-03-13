import Head from 'next/head'
import Image from 'next/image'
import GetLocation from '@/components/get-location'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const {session, loading} = useSession()
  return (
    <>
      <Head>
        <title>Food Dood</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GetLocation></GetLocation>
      </main>
    </>
  )
}