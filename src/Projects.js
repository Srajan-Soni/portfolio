import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
        
        <h2 className='text-light ml-5  mt-5 text-center'>Projects</h2>
        <div className='row  center-block mt-5' >

            <div className='col-sm-6'>
            <div class="card border-dark mb-3 text-center col-sm-6" style={{width : "50%",margin:'0px auto'}}>
                <div class="card-header text-dark font-weight-bold">IBM Maas360</div>
                <div class="card-body text-dark">
                    <h5 class="card-title">IOS HomeScreen</h5>
                    <h6 className='text-primary'>Technology : React , Javascript</h6>
                    <h6 className='text-success'>Team Size : 2 Members</h6>
                    <p class="card-text">
                    <ul>
                        <li>
                        Contributed to the UI development of the iOS home screen
Designed IOS home screen functionalities, took apps data from API, managed that data,
created folders, added apps inside folders, addition and deletion of screen pages as well
as folders.


                        </li>
                        <li>Developed and implemented user interface components using React.js.</li>
                        <li>Utilized the Carbon framework to enhance the UI design and functionality
</li>
                    </ul>

                    </p>
                </div>
            </div>
            </div>
            <div className='col-sm-6'>
            <div class="card border-dark mb-3 text-center col-sm-6" style={{width : "50%",margin:'0px auto'}}>
                <div class="card-header  text-dark font-weight-bold">Personal </div>
                <div class="card-body text-dark">
                    <h5 class="card-title">Instagram Clone</h5>
                    <h6 className='text-primary'>Technology : MERN</h6>
                    {/* <h6 className='text-success'></h6> */}
                    <p class="card-text">
                        <ul>
                            <li>
                            Implemented features such as user authentication, photo upload, like/comment
functionality, and feed display, showcasing comprehensive understanding of web
development principles
                            </li>
                            <li>Employed problem-solving skills to overcome challenges in compatibility, authentication,
and performance optimization</li>
                            <li>Deployed the application to Heroku, demonstrating expertise in deployment and DevOps
practices.</li>
                        </ul>
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects