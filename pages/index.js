import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
        <a href="/server">Server</a>
        <a href="/page">Page</a>
        </p>
      </main>

    </div>
  )
}