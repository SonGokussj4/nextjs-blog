import Head from 'next/head'
import Link from "next/link";
import Script from 'next/script'
import Layout from '../../components/layout';

import { useRouter } from 'next/router'

import { data } from "../api/hello";

export async function getServerSideProps() {

  const req = await fetch(`https://catfact.ninja/fact`);
  const facts = await req.json();

  const req2 = await fetch(`http://localhost:3001/api/hello`);
  const hello = await req2.json();
  console.log(hello);

  const req3 = await fetch(`http://localhost:5000/users`);
  const users = await req3.json();

  return {
    props: { facts, hello, users },
  }
}

export default function SomePost({ facts, hello, users }) {

  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>First Post: [{id}]</h1>
      <h3>Fact ... [{facts.fact}] </h3>
      <h3>Hello ... [{hello.hello}] </h3>
      <ul>
        {users.zamestnanci.map(user => {
          return (
            <li key={user.id}>
              <Link href="/users/[id]" as={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </Layout>
  )
}
