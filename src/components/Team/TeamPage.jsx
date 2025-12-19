'use client'

import React from 'react'
import Link from 'next/link'
import './Team.css'

const TeamPage = () => {
  return (
    <>
      <div className="teampage-container">
        <h1>Our Team</h1>
        <Link href="/team">Meet The Team</Link>
      </div>
    </>
  )
}

export default TeamPage