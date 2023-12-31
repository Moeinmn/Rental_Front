import React from 'react';

interface DataProps{
    data:{
        [key:string]:any
    }
}

// THIS IS FOR SEO

const StructuredData:React.FC<DataProps>= ({data}) =>{
    return (
        <script
        key="structured-data"
        type='application/ld+json'
        dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}
        />
    )
}

export default StructuredData;