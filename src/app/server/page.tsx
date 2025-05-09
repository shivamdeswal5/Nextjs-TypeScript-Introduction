import type { InferGetServerSidePropsType, GetServerSideProps,InferGetStaticPropsType,GetStaticProps } from 'next'
 
type Products = {
    price:string 
    id: number
    title: string
    thumbnail:string
    description:string
}

const UserPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) =>{
  return (
    <main>
        <p>Server Side Data Fetching</p>
    </main>
  )
}
 
// export const getServerSideProps = async () => {

//   const res = await fetch('https://dummyjson.com/products/search?q=iphone&limit=20')
//   const data: Products = await res.json();
//   console.log(data);
 
//   return { props: { data } }
// }

// export async function getStaticProps() {
//   const response = await fetch('https://dummyjson.com/products/search?q=iphone&limit=20');
//   const data = await response.json();
//   return {
//     props: {
//       data: data
//     },
//   }
// }

export default UserPage;
 
