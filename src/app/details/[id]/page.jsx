 "use client"
import { products } from '@/app/Component/Data'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    let{id}=useParams()
    let detail=products.find((a)=>a.id==id)
  return (
    <div className='container '>
        <div className="row">
            <div className="col-lg-5">
            <img className='w-100' src={detail.image} alt="" />
            </div>

    <div className="col-lg-4 text-center py-5">
    <p className='fw-bold fs-5'>{detail.title}</p>  
     <p>${detail.price}</p> 
     <p> {detail.description}</p>
     </div>
     </div>
    </div>
  )
}

export default page
