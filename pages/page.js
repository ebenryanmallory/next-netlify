import Head from 'next/head'

function Page({ userId, id, title, completed }) {
    return (
        <div className="container">
          <Head>
            <title>Next.js Starter!</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <p className="description">
                {completed}
                <br />
                {userId}                
                <br />
                {id}                
                <br />
                {title}
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
    const { userId, id, title, completed } = data;
    // Pass data to the page via props
    return { props: { userId, id, title, completed } }
  }
  
  export default Page