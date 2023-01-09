import React from 'react'
import "./Service.css"
const Services = () => {
  return (
    <div>
        
      <div className="serviceContainer">
        {/* first section */}
        <div className="serviceSec1">
        <div className="rowBlock1">
        <p className="servHeadline"> Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</p>
        <div className='blueText'> Claim a Free Quote</div>
        </div>
        <div className='rowBlock2'>
        <div className="centered"><img src={process.env.PUBLIC_URL + "/Assets/ILLUSTRATION 03  1.png"} alt="Bank Account" width="250vh"/></div>
        <div className="contentHeadline">Bank Account Setup</div>
        <div className="servSubContent"> There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent's strategies and have changed local requirements overnight in the past. But we are here to help you.</div>
<div className="arrowLink"><div >Learn More</div><div className="padding"><img  src={process.env.PUBLIC_URL + "/Assets/Vector.png"} alt="Arrow" /></div> </div>
        </div>
        <div className='rowBlock2'>
      
        <div className="centered"><img src={process.env.PUBLIC_URL + "/Assets/Group-2.png"} alt="UAE Visas" /></div>
        <div className="contentHeadline">UAE Company Visas</div>
        <div className="servSubContent"> Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</div>
<div className="arrowLink"><div >Learn More</div><div className="padding"><img  src={process.env.PUBLIC_URL + "/Assets/Vector.png"} alt="Arrow" /></div> </div>
       
        </div>
        </div>

        {/* Second section */}
        <div className="serviceSec2">
        <div className="rowBlock3">
        <div><img src={process.env.PUBLIC_URL + "/Assets/Group.png"} alt="Bank Account" /></div>
        <div className="contentHeadline">Advice & Guidance</div>
        <div className="servSubContent"> All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.</div>
<div className="arrowLink"><div >Learn More</div><div className="padding"><img  src={process.env.PUBLIC_URL + "/Assets/Vector.png"} alt="Arrow" /></div> </div>
        </div>
        <div className="rowBlock3">
        <div><img src={process.env.PUBLIC_URL + "/Assets/Group-1.png"} alt="Bank Account" /></div>
        <div className="contentHeadline">Registration Document Perparation</div>
        <div className="servSubContent"> Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</div>
<div className="arrowLink"><div >Learn More</div><div className="padding"><img  src={process.env.PUBLIC_URL + "/Assets/Vector.png"} alt="Arrow" /></div> </div>
        </div>
        <div className="rowBlock4">
        <p className="servHeadline"> We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.</p>
        <div className='blueText'> More about our services</div>
        </div>
        </div>
      </div>

        
      
    </div>
  )
}

export default Services
