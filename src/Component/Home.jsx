import React from 'react'
import "./Home.css";
const Home = () => {
  return (
    <>
<div className="homeContainer">
    <div className="frstBlock">
      <div className="frstCol">
        <div className="blueText">
        Claim a Free Quote
        </div>
        <div className='headline'>
        <span className='textUnd'>Get started</span> on fulfilling your Dubai or UAE dream.
        </div>
        <div className="blueText">
        UAE & Offshore Company
        </div>
        <div className="subHeadline">
        We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.
        </div>
        <div className='btnContainer'>
        <div className="btnHomeActive">Start a Company</div>
        <div className="btnHome">Renew a Company</div>
        </div>
      </div>
      <div className="scndCol">
      <img className="img"
          src={process.env.PUBLIC_URL + "/Assets/ILLUSTRATION.png"}
          alt="Laptop"
        />
      </div>
    </div>
    
    </div>
    <div className="content">
    <div className='homeContent'>
      <div >
    <p className="blueText">Watch the video about UAE or Offshore Company Registration </p>
    <img className="roundBorder"
          src={process.env.PUBLIC_URL + "/Assets/Group 117.png"}
          alt="UAE Video" 
        />
        </div>

    <h1><span className='textUnd'> Dedicated</span></h1>
    <h1>to our mission we are</h1>
    <p className="subHeadline">
    Our services include Company Formation & Renewals,
Trust & Fiduciary, Tax Residency Setup With Family, Bank
Accounts, Remote Management, Stock Trading
Platforms, Ownership Solutions.
    </p>
    </div>
    
        </div>
       
       <div className="companyInfo">
        <div className='companyInfo1'>
        <div className="companyImg"><img src={process.env.PUBLIC_URL + "/Assets/dungeon.png"} alt="UAE Video" /></div>
        <div className="contentHeadline"> UAE Free Zone Company</div>
        <div className="companyContent">Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.</div>
        <div className="companyLink">Get Started</div>
          </div>
          
          <div className='companyInfo1'>
        <div className="companyImg"><img src={process.env.PUBLIC_URL + "/Assets/Vector-2.png"} alt="UAE Video" /></div>
        <div className="contentHeadline"> Dubai Local Companies</div>
        <div className="companyContent">The Dubai LLC formation documents are actually articles of organization or a cer tificate of organization. You can get
yours today.</div>
        <div className="companyLink">Get Started</div>
          </div>
        
          <div className='companyInfo1'>
        <div className="companyImg"><img src={process.env.PUBLIC_URL + "/Assets/Vector-1.png"} alt="UAE Video" /></div>
        <div className="contentHeadline"> Offshore Compamies</div>
        <div className="companyContent">You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the
process</div>
        <div className="companyLink">Get Started</div>
          </div>
        
       </div>
    
    </>
  )
}

export default Home
