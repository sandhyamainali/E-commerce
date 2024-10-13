"use client"
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { products } from './Data';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import CartContext from '../CartContext';
import { useParams } from 'next/navigation';

function Home() {
    // let[state,dispatch]=useContext(CartContext)
    let { id } = useParams()


    let com = products.filter((a) => a.category == 'Computer')
    let light = products.filter((a) => a.category == 'Gamepad')
    let drone = products.filter((a) => a.category == 'Drone')
    let mobile = products.filter((a) => a.category == 'Mobile')
    let headphone = products.filter((a) => a.category == 'Speaker')
    return (
        <div className='container '>
            <div className="row">
                <div className="col-lg-9">


                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className="slide" src="https://img.freepik.com/free-photo/girl-holding-colorful-shopping-bags-back-her-shoulder_144627-54280.jpg?t=st=1724934246~exp=1724937846~hmac=eedce67f8ca66f81d9a069bbe9cd22cfdcef88bfd996da26ca14222ec8934048&w=826" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="slide" src="https://img.freepik.com/free-photo/girl-red-shirt-carrying-colorful-shopping-bags-her-shoulder_144627-56756.jpg?t=st=1724934277~exp=1724937877~hmac=da247b16c7deb0de6b68be8f8b55def983c28a6ca061374b1c35ef89aa3786af&w=826" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="slide" src="https://img.freepik.com/free-photo/happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-yellow-studio-background_74952-4056.jpg?t=st=1724934818~exp=1724938418~hmac=da83e9837064c69cdaae1c176620768c207fc034622d44f6a8bdbfda4f36d143&w=740" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="slide" src="https://img.freepik.com/free-photo/shopping-woman-smiling-holding-small-shopping-bags_231208-1942.jpg?t=st=1724985061~exp=1724988661~hmac=09da6ccd253c51a9fcb519989cbe7462e2fbf0e74078393d46b3e84f918505e9&w=826" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className="col-lg-3">
                    <img className='ads ' src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/banner-campaign-51-1-1.png" alt="" />

                    <img className="my-2 ads " src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/banner-campaign-61-1.jpg" alt="" />
                </div>
            </div>


            <div className="row bg-body-secondary">
                <div className="col-lg-4">
                    <img className='adss' src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_21-1-1-1.jpg" alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='adss' src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_31-1-1-1.png" alt="" />
                </div>
                <div className="col-lg-4">
                    <img className='adss' src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/05/offer_banner_41-1-1-1.jpg" alt="" />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2 className=' text-uppercase py-5 fw-bold fs-5 boder-bottom'>Top Category This Weeks</h2>
                </div>
                <div className='col-lg-6 '>

                    <ul className="nav nav-tabs py-5" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Projector

                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Light</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Laptop</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Headphone</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Google Glass</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                        <div className="row">
                            {com.map((a) => (

                                <div className='col-lg-3'> <div className="shadow">
                                    <img className='imgw box1' src={a.image} alt="" />
                                    {a.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                        <div className="row">
                            {light.map((a) => (
                                <div className='col-lg-3'> <div className="shadow">
                                    <img className='imgw box1' src={a.image} alt="" />
                                    {a.title}
                                </div></div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                    <div className="row">
                            {drone.map((a) => (
                                <div className='col-lg-3'> <div className="shadow">
                                    <img className='imgw box1' src={a.image} alt="" />
                                    {a.title}
                                </div></div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>
                    <div className="row">
                            {headphone.map((a) => (
                                <div className='col-lg-3'> <div className="shadow">
                                    <img className='imgw box1' src={a.image} alt="" />
                                    {a.title}
                                </div></div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>




        </div>


    )
}

export default Home
