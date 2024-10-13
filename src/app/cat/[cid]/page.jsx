"use client";
import { products } from '@/app/Component/Data';
import { useParams } from 'next/navigation'
import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';

function Page() {
    let  {cid}=useParams()
    var category= products.filter((a)=>a.category == cid)
  return (
    <>
    <h2 className=' container'>{cid}</h2>
    <div className="row ">
      
        {category.map((a)=>(
          <div className="col-lg-3 my-3">
          
          <div className='border mx-3 shadow'>
            <img className="wid small " src={a.image} alt="" />
            <Link className='text-decoration-none text-dark' href="/cart">
            <div className='display:none px-3 icon'> <IoCartOutline /> <CiHeart /> <IoEyeOutline /> </div> </Link>
            <Link className='text-decoration-none link-dark' href={`/details/${a.id}`}><div className='px-3'>{a.title}</div></Link>
            <p className='px-3 fw-bold'>${a.price}</p>
          </div>
        
        </div>
        ))}
      
    </div>
    {/* <div className='container d-flex flex-wrap'>

      {category.slice(0,4).map((a) => (
        <>
          <div className='border mx-3 shadow'>
            <img className="wid small " src={a.image} alt="" />
            <Link className='text-decoration-none text-dark' href="/cart">
            <div className='display:none px-3 icon'> <IoCartOutline /> <CiHeart /> <IoEyeOutline /> </div> </Link>
            <div className='px-3'>{a.title}</div>
            <p className='px-3 fw-bold'>${a.price}</p>
          </div>
        </>

      ))}
      {category.slice(4,8).map((a) => (
        <>
          <div className='border my-3 mx-3 shadow'>
            <img className="wid small " src={a.image} alt="" />
            <Link className='text-decoration-none text-dark' href="/cart">
            <div className='display:none px-3 icon'> <IoCartOutline /> <CiHeart /> <IoEyeOutline /> </div> </Link>
            <div className='px-3'>{a.title}</div>
            <p className='px-3 fw-bold '>${a.price}</p>
          </div>
        </>

      ))}
      {category.slice(8,11).map((a) => (
        <>
          <div className='border my-3 mx-3 shadow'>
            <img className="wid small " src={a.image} alt="" />
            <Link className='text-decoration-none text-dark' href="/cart">
            <div className='display:none px-3 icon'> <IoCartOutline /> <CiHeart /> <IoEyeOutline /> </div> </Link>
            <div className='px-3'>{a.title}</div>
            <p className='px-3'>${a.price}</p>
            
          </div>
        </>

      ))}
    </div> */}
    </>
  )
}

export default Page
