import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{ minHeight: '12rem'}}>
        <div className='row pt-4 text-center'>
            {/* create 3 sections of 4 cols for large and medium and for small for mobiles create 1 sec of 12... */}
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h5>Quick Links</h5>
                <div className='d-flex flex-column align-items-evenly mb-2'>
                  <a href="#" className='text-white p-1'>About Us</a>
                  <a href="#" className='text-white p-1'>Our Posts</a>
                  <a href="#" className='text-white p-1'>Our Teams</a>
                  <a href="#" className='text-white p-1'>Contact Us</a>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                <h5>News Letter</h5>
                <div style={{minHeight:"8rem"}} className='d-flex flex-column justify-content-around'>
                  <input type="text" className='form-control' placeholder='Subscribe to the newsletter'></input>
                  <button className='btn btn-warning'>Subscribe</button>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
                <h5>Contact Lettter</h5>
                <div className='d-flex flex-column'>
                  <p><i className="px-1 fa-solid fa-location-arrow"></i>26 Huston Street</p>
                  <p>Newton City</p>
                  <p>Random-State -79819</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer