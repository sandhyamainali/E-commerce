"use client";
import { products } from '@/app/Component/Data';
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
    let{id}=useParams()
    var category= products.filter((a)=>a.category == id)
  return (
    <div>
      {category.map((a)=>(
        <>
        <img src={a.images} alt="" />
        <li>{a.title}</li>
        </>
      ))}
    </div>
  )
}

export default Page
