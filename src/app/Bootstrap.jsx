"use client";
import Link from "next/link";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";


import { FaBagShopping } from "react-icons/fa6";
import CartContext from "./CartContext";

function Bootstrap() {
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container">
          <Link href="/"><img className="w-full " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/logo_home-1.png" alt="" /> </Link>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            
            <ul className="navbar-nav mx-auto">
            <div className="dropdown a">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </button>
                <div className="dropdown-menu b">
                  <div className="row">
                    <div className="d-flex gap-3">
                     <div className="border">
                      <img className="homeimg  " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-one.jpg" alt="" />
                      <p className="px-3">Home 01</p>
                      </div>
                      <div className="border">
                      <img className="homeimg " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-two1.jpg" alt="" />
                      <p className="px-3">Home 02</p>
                      </div>

                      <div className="border">
                      <img className="homeimg " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-three1.jpg" alt="" />
                      <p className="px-3">Home 03</p>
                      </div>
                      <div className="border">
                      <img className="homeimg " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-four1.jpg" alt="" />
                     <p className="px-3">Home 04</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 py-3">
                     <div className="border">
                      <img className="homeimg " src="https://demo.xpeedstudio.com/marketov2/home2/wp-content/uploads/sites/2/2020/07/home-six1-e1594808234656.jpg" alt="" />
                      <p className="px-3">Home 05</p>
                     
                      </div>

                      <div className="border">
                      <img className="homeimg" src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-eight1.jpg" alt="" />
                      <p className="px-3">Home 06</p>
                      </div>
                      <div className="border">
                      <img className="homeimg" src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-seven1.png" alt="" />
                      <p className="px-3">Home 07</p>
                      </div>

                      <div className="border">
                      <img className="homeimg " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-nine1.jpg" alt="" />
                      <p className="px-3">Home 08</p>
                      </div>
                    
                    </div>
                    
                    
                  </div>
                </div>
              </div>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">Contact</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Terms and Condition</a></li>
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className='dropdown-item' href="#">Products Category</a></li>
                  </ul>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shop</a></li>
                  <li><a className="dropdown-item" href="#">Products Details</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Single</a></li>
                </ul>
              </li>


              <div className="dropdown a">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </button>
                <div className="dropdown-menu gall bb">
                  <div className="row">
                    <div className="col-lg-4">
                      <ul>
                        <h4>Theme Elements</h4>
                        <li>Pages that every website needs.</li>

                        <li>Accessories</li>
                        <li>Camera</li>
                        <li>Headphone</li>
                        <li>Gamepad</li>
                        <li>Laptop</li>
                        <li>Mobile</li>

                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul>
                        <h4>Theme Elements</h4>
                        <li>Pages that every website needs.</li>

                        <li>Shop</li>
                        <li>Product Details</li>
                        <li>Wishlist</li>
                        <li>Product Categoy</li>
                        <li>Blog</li>
                        <li>Blog Single</li>

                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul>
                        <h4>Theme Elements</h4>
                        <li>Pages that every website needs.</li>

                        <li>Product Category V2</li>
                        <li>Contact</li>
                        <li>Terms and Conditions</li>
                        <li>FAQ</li>
                        <li>About Us</li>
                        <li>woocommerce-placeholder</li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" offset-6 col-lg-3 gap-3 d-flex">

                <button type="button" class=" position-relative  rounded-pill border-0 ">
                  <CiHeart className="hw" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   0
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>

                <Link type="button" href="/cart" className=" position-relative  rounded-pill border-0 text-dark ">
                  <FaBagShopping className="hw" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav >


    </div >
  )
}

export default Bootstrap
