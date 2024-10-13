import React, { useEffect, useState } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Bootstrap from '../Bootstrap';
import { CiSearch } from "react-icons/ci";
import { categories } from "./Data";
import { CiCircleList } from "react-icons/ci";
import Link from 'next/link';
// import'bootstrap/js/dist/modal';
function Header() {

  return (
    <div>

      <section className=' container '>

        <div className='top'>
          <ul className='bg-body-secondary d-flex gap-4 mx-auto  py-2 '>
            <CiDeliveryTruck className='w' /><li className='border-end border-dark fs pe-2'>Free Delivery</li>
            <FaEarthAfrica className='w1' /><li className='border-end border-dark fs pe-2'>Returns Policy</li>
            <li className='fs'>Follow Us</li>
            <GrFacebookOption className='mt-1' /> <FaTwitter className='mt-1' /> <FaPinterestP className='mt-1' /> <FaInstagram className='mt-1' />
            <div className="col-lg-5">
              <div className='L'>Login</div>
            </div>
          </ul>
        </div>
      </section>

      <Bootstrap />
      <section className='header container  '>
        <div className="row">
          <div className="col-lg-3">
            
            <ul>
              <li className="nav-item dropdown bg my-3 py-3">
                <a className="nav-link dropdown-toggle fs-4 text-white border-solid" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <CiCircleList /> All category
                </a>

                <ul className="dropdown-menu px-3 ">

                  {categories.map((a) => (
                    <>
                  
                  <Link key={a.name} className='text-dark text-decoration-none fs-6' href={`/cat/${a.slug}`}> <li className='border-bottom-0 '> {a.name} </li></Link> 
                  
                  
                  </>
                  ))} 
                </ul>
              </li>
            </ul>


          </div>
          <div className="col-lg-6  ">

            <div className="input-group my-3 px-3">
              <input type="text" className="form-control py-3 border-2 p-2" placeholder="Find your Products" aria-label="Recipient's username" aria-describedby="button-addon2" /><span>

              </span>
              <button className="btn btn-warning text-white" type="button" id="button-addon2"><CiSearch /></button>
            </div>

          </div>

          <div className="col-lg-3">

            <div className='color my-3  border-rounded  text-uppercase font-bold bg-body-tertiary box'>Black Friday  <br />
              <span className=' tg'>Get 45% off!</span>
            </div>

          </div>
        </div>

      </section>





    </div>
  )
}

export default Header
