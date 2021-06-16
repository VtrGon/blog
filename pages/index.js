import React from 'react'
import Styled from 'styled-components'

import Head from '../src/infra/components/head'
import Header from '../src/patterns/header'
import Typography from '../src/components/foundation/typography'
import Footer from '../src/patterns/footer'

import { getAllPosts } from '../scripts/posts.js'
import Link from 'next/link'

export default function Home({ allPosts }) {
  return (
    <div>
      <Head title="Home - V Blog" />

      <Header />

      <section className="postsContainer">
        <h1>Posts</h1>
        {allPosts.map((post) => (
          <article key={post.title} className="postsContainer__post">
            <h2>
              <Link href={`/posts/${post.slug}`}>
                <a>
                  {post.title}
                </a>
              </Link>
            </h2>
            <p>
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>

      <main>
        <Typography>
          Conteudo unico de cada pag
        </Typography>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'excerpt',
    'slug'
  ])

  return {
    props: {
      allPosts
    }
  }
}
