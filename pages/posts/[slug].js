import React from 'react'

import Head from '../../src/infra/components/head'
import Header from '../../src/patterns/header'
import Typography from '../../src/components/foundation/typography'
import Footer from '../../src/patterns/footer'

import { getAllPosts, getPostBySlug } from '../../scripts/posts.js'
import markdownToHTML from '../../scripts/markdownToHTML.js'

export default function Posts({ post }) {
    return (
        <div>
            <Head title="Home - V Blog" />

            <Header />

            <section className="postsContainer">
                {
                    <article className="postsContainer__post">
                        <h2>
                            {post.title}
                        </h2>
                        <p>
                            {post.excerpt}
                        </p>
                    </article>
                }
            </section>
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <main>
                <Typography>
                    Conteudo unico de cada pag
                </Typography>
            </main>

            <Footer />
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'excerpt',
        'content'
    ])

    const content = await markdownToHTML(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}

