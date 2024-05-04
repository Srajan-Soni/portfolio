import React from "react";
import Internship from "./Internship";
import com from '../src/imgs/company/psl.jpg'

const Experiences = () => {
  return (
    <div>
      <h2 className="text-light ml-5  text-center" id="experience">
        Experiences
      </h2>

      <div className="jumbotron jumbotron-fluid bg-dark">
        <h3 className="text-light ml-5"> Experiences</h3>
        {/* <p className='font-weight-bold text-bg-info ml-5 mt-2'>I have Cracked 4 Interviews of different companies.I hope these Experiences will help you.</p> */}
        <div class="accordion ml-4 mt-4" id="accordionPanelsStayOpenExample">
         

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <img src={com} width={"40px"} alt="" />
                Persistent Systems - Software Engineer
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <strong>
                  On Jan 2022 , I cracked Interview of Persistent Systems Off
                  Campus and I have joined as FTE in Persistent on July 2022.
                </strong>
                <p>
                After completing my internship, I
                seamlessly transitioned into a full-time
                role as a Software Engineer at
                Persistent Systems, where I continued to
                contribute my expertise to impactful
                projects.
                </p>
                <p>
                Collaborated on IBM’s Maas360 projects
                as a UI developer and backend Python
                SQL developer, contributing to intuitive
                userinterfaces and robust backend
                functionalities.
                {" "}
                </p>
              </div>
            </div>
          </div>

          

          
        </div>
        <hr />
        {/* <Internship></Internship> */}
      </div>
    </div>
  );
};

export default Experiences;
