import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <h1>
        Home page
      </h1>
      <div style={{display: 'flex', gap: '20px'}}>
        <Link href="/fetchdata">Fetch Data</Link>
        <Link href="/customer-reviews">Customer Reviews</Link>
      </div>
    </div>

  )
}
