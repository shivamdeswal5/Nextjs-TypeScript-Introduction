import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link';
export default async function page() {
    const res  = await fetch('https://dummyjson.com/products/search?q=iphone&limit=20');
    const data = await res.json();
  return (
    <div className={style.main}>
        <h2>Fetched Data</h2>
        <div className={style.container}>
            {
                data?.products.map((product: { price:string ,id: number; title: string; thumbnail:string,description:string}) => (
                    <Link href={`/fetchdata/${product.id}`} key={product.id} style={{textDecoration: 'none', color: 'black'}}>
                    <div className={style.product} key={product.id}>
                        <div className={style.Image}>
                        <Image  src={product.thumbnail} alt={product.title} width={100} height={100}/>
                        </div>
                        <h3>{product.title}</h3>
                        <p className={style.description}>{product?.description}</p>
                        <p className={style.price}>{product?.price} $</p>
                    </div>
                    </Link>                   
                ))
            }
        </div>
    </div>
  )
}
