import React from 'react'

export default async function page({params}:{
    params: Promise<{products:string}>
}) {

    const productId = (await params).products
    const res  = await fetch(`https://dummyjson.com/products/${productId}`);
    const product = await res.json();
  return (
    <div>
      <h1>Details about product: {productId}</h1>

        <h3>{product?.title}</h3>
        <p>{product?.description}</p>
        <p>{product?.price} $</p>     
    </div>
  )
}
