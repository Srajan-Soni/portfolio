import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='text-center'>Contact</h1>
        <div className='jumbotron' id='contact'>
        <div className='row text-center'>
        <div class="card" style={{width: "12rem",margin:'0px auto'}}>
        <a href='https://www.linkedin.com/in/srajan-soni-4b49601a4/' style={{textDecoration:'none'}} className="text-decoration-none">
        <img src="https://th.bing.com/th/id/OIP.0rJZ6VFPpfFXkMh8sjoEEQHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." width={'80px'} />
        <div class="card-body">
            <p class="card-text text-decoration-none"><h2>LinkedIn</h2></p>
        </div>
        </a>
        </div>
        <div class="card" style={{width: "13rem",margin:'0px auto'}}>
        <a href='https://www.instagram.com/___srajan___00/' style={{textDecoration:'none'}} className='text-decoration-none' >
        <img src="https://th.bing.com/th/id/OIP.izOOxDyHFwihHcQcKIExmQAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text"><h2>Instagram</h2></p>
        </div>
        </a>
        </div>
        <div class="card" style={{width: "12rem",margin:'0px auto'}}>
        <a href='' style={{textDecoration:'none'}} className='text-decoration-none' >
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" class="card-img-top" alt="..." />
        <div class="card-body">
            <p class="card-text mt-5"><h2>Gmail</h2></p>
        </div>
        </a>
        </div>
        </div>
        <h6 className='text-center text-light bg-dark w-50 mt-4 ' style={{margin:'0px auto'}}>Feel free to contact or connect with me</h6>
        </div>
    </div>
  )
}

export default Contact