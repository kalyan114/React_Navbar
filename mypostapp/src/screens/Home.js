import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <section className='hero-section'>
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8SG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8SG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className='featured-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>Featured Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://media.istockphoto.com/id/1437203779/photo/luxury-villa-decorated-with-christmas-tree-gift-boxes-and-ornaments-in-snowy-weather.jpg?b=1&s=170667a&w=0&k=20&c=n4cY6Otvd8CjLNqP00N2oJAYAD-rA_qdxvw-sz6UA3A=" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='latest-posts container'>
        <h3 className='text-center text-uppercase py-4'>Latest Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://media.istockphoto.com/id/1437203779/photo/luxury-villa-decorated-with-christmas-tree-gift-boxes-and-ornaments-in-snowy-weather.jpg?b=1&s=170667a&w=0&k=20&c=n4cY6Otvd8CjLNqP00N2oJAYAD-rA_qdxvw-sz6UA3A=" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
                <div className="card-body">
                  <h5 className='card-title'>Card Title</h5>
                  <p className='card-text'>Some quick example to build...</p>
                  <div className='d-grid'>
                    <a href="#" className='btn btn-warning'>Read more</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='container-fluid bg-primary bg-gradient mt-4' style={{minHeight: "180px"}}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <i className="fs-1 text-warning my-3 fa-solid fa-location-dot"></i>
          <h3 className='text-white text-uppercase'>We have variety of Posts..</h3>
          <button className='fw-bold btn btn-warning my-2 text-uppercase'>View all posts</button>
        </div>
      </section>
      <section className='our-portfolio container'>
        <h3 className='text-center text-uppercase py-4'>Our Portfolio</h3>
        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='card-img-top' alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img src="https://media.istockphoto.com/id/1437203779/photo/luxury-villa-decorated-with-christmas-tree-gift-boxes-and-ornaments-in-snowy-weather.jpg?b=1&s=170667a&w=0&k=20&c=n4cY6Otvd8CjLNqP00N2oJAYAD-rA_qdxvw-sz6UA3A=" className='card-img-top' alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img src="https://media.istockphoto.com/id/1326994520/photo/we-all-deserve-a-fresh-break-from-the-city.jpg?b=1&s=170667a&w=0&k=20&c=S7T1RDGbTjnHTbr20d2KOns1mBBRqFAAZAuJijy02VY=" className='card-img-top' alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home