import React from 'react'

function Footer() {
    return (
        <div className='container bg-body-secondary'>
            <div className="row my-5 pb-5">
                <div className="col-lg-3">
                    <div className='mb-4 py-3'>
                        <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/logo_3-1.png" alt="" />
                    </div>
                    <div>
                        <p className='text-secondary fs-6'>Got Question? Call us
                             24/7</p>
                        <p>[80] 1017 197</p>
                        <p className='fs-6'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                        <button className='btn btn-warning'>View on Map</button>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className='mt-5'>
                        <p className='text-secondary'>We Using</p>
                        <p className='fw-bold'>Safe Payments</p>
                        <div>
                            <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/palypal-1-1.png" alt="" />
                            <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/skril-1-1.png" alt="" />
                            <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/american_express-1-1.png" alt="" />
                        </div>
                        <p>Secured by:</p>
                        <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/norton_av_logo1-1.png" alt="" />
                        <img src="https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2020/06/mcAfee_logo1-1.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <ul>
                        <h4 className='py-3'>Our Store</h4>
                        <li>New York</li>
                        <li>London SF</li>
                        <li>Cockfosters BP</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Las Vegas</li>
                        <li>Albarto</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul>
                        <h4 className='py-3'>Quick Link</h4>
                        <li>Support Center</li>
                        <li>Term & Conditions</li>
                        <li>Shipping</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>Products Return</li>
                        <li>FAQS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
