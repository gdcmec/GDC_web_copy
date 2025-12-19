'use client'

import { useState, useEffect } from 'react'
import About from '@/components/About/About'
import Landing from '@/components/Landing/Landing'
import Navbar from '@/components/Navbar/Navbar'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/footer/footer'
import CardContainer from '@/components/CardContainer/CardContainer'
import BlogPage from '@/components/Blog/BlogPage'

export default function Home() {
    return (
        <>
            <Navbar />
            <section id="home">
                <Landing />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="events">
                <CardContainer />
            </section>
            {/* <section id="team">
        <TeamPage />
      </section> */}
            <section id="blog">
                <BlogPage />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    )
}
