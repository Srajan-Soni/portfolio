import React from 'react'

const Internship = () => {
  return (
    <div className='jumbotron jumbotron-fluid bg-dark mt-5'>

    <h3 className='text-light ml-5' >Internship Experiences</h3>

    <div class="accordion ml-4 mt-4" id="accordionPanelsStayOpen">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-heading1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true" aria-controls="panelsStayOpen-collapse1">
                        <img src="imgs/company/psl.jpg" width={'40px'} alt="psl" />   
                        Persistent Systems
                        
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse1" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading1">
                    <div class="accordion-body">
                    <div class="card mb-3">
                        <img class="card-img-top ml-2 mt-2" src="imgs/company/persistent.jpg" alt="Card" style={{height:'180px' , width:'750px'}}  />
                        <div class="card-body">
                          <h5 class="card-title text-dark">Software Engineer Intern</h5>
                          <p class="card-text text-dark">I have joined Persistent Systems as Software Enginner Intern from 17 Feb 2022.
                           The internship was Work from home. I have been assigned courses and provided Udemy courses free access.
                          There was some doubts sessions. The courses were very easy and understandable. They conducted tests and hands-on for out practice.
                          The internship gave me a very good experience , mentors was very helpful also my collegues were very helpful.
                          The duration of the internship was 6 months and they provided stipend of 10k every month. They also provided welcome kit and laptop during the internship.

                          </p>
                          
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-heading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
                <img src="imgs/internship/ms.png" width={'40px'} alt="psl" /> 
                    Future Ready Talent 
                </button>
                </h2>
            <div id="panelsStayOpen-collapse2" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading2">
            <div class="accordion-body">
            <div class="card mb-3">
                        <img class="card-img-top ml-2 mt-2" src="imgs/internship/futuretalent.jpg" alt="Card" style={{height:'200px' , width:'450px'}}  />
                        <div class="card-body">
                          <h5 class="card-title text-dark">Azure Cloud Developer</h5>
                          <p class="card-text text-dark">
                              In this Internship , I learned concepts of Azure Cloud Fundamentals , I developed a web based project 
                              and hosted it on Azure cloud using Azure web-app service.That Internship was organized by Future primeskills,Microsoft
                              ,AICTE and Nascomm. 
                               After completeion of Internship , I got Microsoft Azure branded T-shirt as reward.
                          </p>
                          
                        </div>
                      </div>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-head3">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
            <img src="imgs/internship/tsf2.png" width={'40px'} alt="psl" /> 
                The Sparks Foundation
            </button>
            </h2>
            <div id="panelsStayOpen-collapse3" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-head3">
            <div class="accordion-body">
            <div class="card mb-3">
                        <img class="card-img-top ml-2 mt-2" src="imgs/internship/tsf.png" alt="Card" style={{height:'195px' , width:'400px'}}  />
                        <div class="card-body">
                          <h5 class="card-title text-dark">Web Developer Intern</h5>
                          <p class="card-text text-dark">I developed a web application that was based on bank transactions among multiple users. I used Django Framework for developing this web application.

                          </p>
                          
                        </div>
                      </div>
            </div>
            </div>
        </div>
        
        </div>

    {/* End */}
    </div>
  )
}

export default Internship