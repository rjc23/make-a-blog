import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
        <p className='logo'><strong>CoderBlog</strong></p>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
    </div>
  )
}
