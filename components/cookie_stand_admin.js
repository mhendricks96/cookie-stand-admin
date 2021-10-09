import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'

export default function CookieStandAdmin(props){
  return(
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main onCreate={props.onCreate} reports={props.reports} stands={ props.stands } loading={ props.loading } handleSubmit = {props.handleSubmit}/>
      <Footer reports={props.reports} stands={props.stands} loading={ props.loading }/>
    </div>
  )
}