import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children, title, author, keywords, description }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      
      <Navbar/>
      <main style={{ minHeight: "auto" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
Layout.defaultProps = {
  title: "HOSPITAL_MANAGEMENT_SYSTEM",
  description: "A simple HOSPITAL/DOCTOR management application with Authentication",
  keywords: "react,react js,CRUD,crud,Auth,authentication",
  author: "souvik"
}
export default Layout