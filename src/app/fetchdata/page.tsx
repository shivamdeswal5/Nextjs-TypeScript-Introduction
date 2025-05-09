import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link';
import PaginationControls from '@/components/counter/PaginationControls';

export default async function page({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {



    const page = Number(searchParams['page']) || 1;
    const per_page = Number(searchParams['per_page']) || 5;
    const start = (Number(page) - 1) * Number(per_page);
    const skip = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    const res  = await fetch(`https://dummyjson.com/products?limit=${per_page}&skip=${skip}`);
    const data = await res.json();
    console.log(data);

    const entries = data?.products;


  return (
    <div className={style.main}>
        <h2>Fetched Data</h2>
        <div className={style.container}>
            {
                entries.map((product: { price:string ,id: number; title: string; thumbnail:string,description:string}) => (
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
        <div className={style.pagination}>
            <PaginationControls
            total={data.total} 
            currentPage={Number(page)} 
            perPage={Number(per_page)} 
            />
        </div>
    </div>
  )
}
