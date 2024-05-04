import React, { useState } from 'react'
import azure from '../src/imgs/certificates/AZ-900.jpg'
import pcep from '../src/imgs/certificates/python_PCAP.jpg'
import reactjs from '../src/imgs/certificates/reactjs.jpg'
import java from '../src/imgs/certificates/oracle_java.png'



const Certificates = () => {

    const [showAllCerts,setCertificates]  = useState(false);

    const showCertificates = ()=>{
        setCertificates(true);
    }
    const hideCertificates  = ()=>{ setCertificates(false); }


  return (
    <div id='certificates'>

    <div className="w3-padding-64 w3-content" id="photos">
    <h2 className="w3-text-light-grey">My Certificates</h2>
    <hr style={{width:"200px"}} className="w3-opacity" />

    <div className="w3-row-padding" style={{margin:"0 -16px"}}>
      <div className="w3-half">
        {/* <img src={azure} style={{width:"100%"}} alt="" /> */}
        <span className="w3-margin-left-5">Microsoft Azure AZ-900</span>
        <img src={azure} style={{width:"100%"}} alt="" />
        {/* <span className="w3-margin-left-5">CLA - Programming Essentials in C</span> */}
      </div>

      <div className="w3-half">
        
        <img src="imgs/certificates/python_PCAP.jpg" style={{width:"100%"}} alt="" />
        <span className="w3-margin-left-5">PCAP - Programming Essentials in Python</span>
        <img src={pcep} style={{width:"100%"}} alt="" />
        {/* <span className="w3-margin-left-5">Oracle Java Foundation</span> */}
      </div>
      { showAllCerts ? 
      <>  
      <div className="w3-half">
        
         {/* <img src="imgs/certificates/dp-900.jpg" style={{width:"100%"}} alt="" /> */}
         <span className="w3-margin-left-5">Oracle Java</span>
         <img src={java} style={{width:"100%"}} alt="" />
         {/* <span className="w3-margin-left-5">AWS Cloud Practitionar</span> */}
        </div>
        <div className="w3-half">
        
         {/* <img src="imgs/certificates/python_basic.png" style={{width:"100%"}} alt="" /> */}
         <span className="w3-margin-left-5">React JS</span>
         <img src={reactjs} style={{width:"100%"}} alt="" />
         {/* <span className="w3-margin-left-5">React JS Skillup</span> */}
        </div>

        </>

       
       
    : null }
    </div>
   
    
   
    { showAllCerts ?
        <button href="certificates.html" onClick={hideCertificates} className="w3-margin-top-20 btn btn-secondary mt-3">Hide </button>
    :
      <button href="certificates.html" onClick={showCertificates} className="w3-margin-top-20 btn btn-secondary mt-3">Show All </button>  
    }    
  </div>
    </div>
  )
}

export default Certificates