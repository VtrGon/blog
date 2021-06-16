import React from 'react'
import Styled from 'styled-components'

import Head from '../src/infra/components/head'
import Header from '../src/patterns/header'
import Typography from '../src/components/foundation/typography'
import Footer from '../src/patterns/footer'

export default function Home() {
  return (
  <div>
    <Head title="Sobre - V Blog" />

    <Header />
    
    <main>
      <Typography>
        Conteudo unico de cada pag
      </Typography>
    </main>
    
    <Footer />
  </div>
  )
}