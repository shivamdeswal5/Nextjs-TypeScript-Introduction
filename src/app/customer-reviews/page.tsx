import React from 'react'
import {Customer} from '../customer/page'
import { Reviews } from '../review/page'
import { Suspense } from 'react'
export default function page() {
  return (
    <div>
      <h1>Customer reviews</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Customer/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Reviews/> 
      </Suspense>
           
    </div>
  )
}
