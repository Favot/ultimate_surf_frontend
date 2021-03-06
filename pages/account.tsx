import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/Link'
import AuthContext from '../context/AuthContext'

export default function Account() {

  const { user, logoutUser } = useContext(AuthContext)

  if(!user){
    return (
      <div>
        <p>Please login or register</p>
        <Link href="/"><a>Go back</a></Link>
      </div>
      )
  }

   return (
      <div>
        <Head>
          <tittle>Account Page</tittle>
          <meta name="description" content="your account page" />
        </Head>

        <h2>Account page</h2>
        <a href="#" onClick={logoutUser}>Logout</a>
      </div>
    )
}
