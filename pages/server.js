function Page({ data }) {
    return (
        <div className="container">
          <Head>
            <title>Next.js Starter!</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <p className="description">
                {data}
                <br />
                {data.userId}                <br />
                {data.id}                <br />
                {data.title}
            </p>
          </main>
    
        </div>
      )
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page