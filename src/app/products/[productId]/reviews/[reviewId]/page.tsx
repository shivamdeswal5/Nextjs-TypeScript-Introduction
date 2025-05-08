import React from 'react'

export default async function page({params}:{
    params: Promise<{reviewId:string,productId:string}>
}) {

    const reviewId = (await params).reviewId
    const productId = (await params).productId
  return (
    <div>
      <h1>Review: {reviewId} for Product: {productId}</h1>
    </div>
  )
}
