import React from 'react'

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutSec1">
        <div className="aboutHeading">
        Read about our blogs for more information on our processes 
        </div>
        <div className="formation">
            <div>
            <img  className="icon"
          src={process.env.PUBLIC_URL + "/Assets/Vector-4.png"}
          alt="Formation"
        />
            </div>
            <div className="iconContent">
            How to start a company formation in Dubai
            <h2 className='blueText'>5 Minutes</h2>
            </div>
        </div>
        <div className="formation">
            <div>
            <img  className="icon" src={process.env.PUBLIC_URL + "/Assets/Vector-4.png"} alt="Formation"/>
            </div>
            <div className="iconContent">
            How to start an Offshore company formation in Dubai
            <h2 className='blueText'>5 Minutes</h2>
            </div>
        </div>
        <div className="formation blueCont">
            <div>
            <img  className="icon filter" src={process.env.PUBLIC_URL + "/Assets/Vector-4.png"} alt="Formation"/>
            </div>
            <div className="iconContent ">
            SEO Dubai: Who benefits the most?
            <p className='padText'>5 Minutes</p>
            </div>
        </div>
        <div className="aboutHeading">
        Satisfied We are When Our Customers Are Happy
        </div>
        <div className="formation">
            <div className="testimonial">
            <img  className="testimonialIcon" src={process.env.PUBLIC_URL + "/Assets/Vector-3.png"} alt="Formation"/>
            </div>
            <div className="iconContent small">
            "I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone,"
            
            <h4 className="top-padding">Muhib Abrar</h4>
            </div>
        </div>
        <div className="formation">
            <div className="testimonial">
            <img  className="testimonialIcon" src={process.env.PUBLIC_URL + "/Assets/Vector-3.png"} alt="Formation"/>
            </div>
            <div className="iconContent small">
           "Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity,"
            <h4 className="top-padding">Colin Saldahna</h4>
            </div>
        </div>
        <div className="formation">
            <div className="testimonial">
            <img  className="testimonialIcon" src={process.env.PUBLIC_URL + "/Assets/Vector-3.png"} alt="Formation"/>
            </div>
            <div className="iconContent small">
            "Your advise was so complete that I actually realized how beneficial this would be to my clients and my business."
            <h4 className="top-padding">Mark Swann</h4>
            </div>
        </div>
      </div>
      <div className="aboutSec2">
      <div className="aboutHeading">
      Get to know the whole us and more of our services
        </div>
        <div className='padding-left '>
        <h2 className="contentHeadline">Services</h2>
        <ul className='subGreyText'>
          <li>Products</li>
          <li>Solutions</li>
          <li>Assurance</li>
          <li>FAQ</li>
          <li>Working at Varal-Singhania</li>
        </ul>
        </div>

        <div className='padding-left '>
        <h2 className="contentHeadline">Policies</h2>
        <ul className='subGreyText'>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        </div>

        <div className='padding-left '>
        <h2 className="contentHeadline">About</h2>
        <ul className='subGreyText'>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        </div>

        <div className='padding-left '>
        <h2 className="contentHeadline">Address</h2>
        <ul className='subGreyText'>
          <li>608 One Lake Plaza, Cluster T,</li>
          <li>Al Sarayat Street, Jumeirah Lake Towers</li>
          <li>Dubai</li>
          <li>United Arab Emirates</li>
        </ul>
                </div>

                <div className='padding-left '>
        <ul className='subGreyText'>
          <li>Office Hours: Sunday to </li>
          <li>Thursday 8:30 AM to 6:30 PM</li>
          <li>[GMT+4]</li>
          <li>M: +971 55 794 2016</li>
          <li>O: +971 4 447 2061</li>
        </ul>
        </div>

        <div className='padding-left '>
        <h2 className="contentHeadline">Subscribe Now</h2>
        <p className='subGreyText'>Sunbscribe now to receive our Newsletters about amazing opportunities in Dubai</p>
        <div className="subBtn">
          <input type="text" placeholder="Enter email address" className="email"/>
          <button className="subscribe">    </button>
        </div>
                </div>

        <div className="socialMedia padding-left">
        <img src={process.env.PUBLIC_URL + "/Assets/Vector-5.png"} alt="Facebook" width="15%"  height="85%" />
        <img src={process.env.PUBLIC_URL + "/Assets/Vector-6.png"} alt="Instagram" width="15%"  height="85%" />
        <img src={process.env.PUBLIC_URL + "/Assets/Vector-7.png"} alt="LinkedIn" width="15%"  height="85%" />
        <img src={process.env.PUBLIC_URL + "/Assets/Vector-8.png"} alt="You Tube" width="15%"  height="85%" />
        </div>
      </div>
    </div>
  )
}

export default About
