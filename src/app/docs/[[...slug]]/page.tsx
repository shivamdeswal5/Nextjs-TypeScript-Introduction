import React from 'react'

export default async function page({params}:{
    params: Promise<{slug: string[]}>
}) {

    const {slug} = await params;
    if(slug?.length === 2){
        return(
            <h1>Viewing Docs for feature {slug[0]} and Concept {slug[1]}</h1>
        )
    }
    if(slug?.length===1){
        return(
            <h1>Viewing Docs for Feature {slug[0]}</h1>
        )
    }
}
