import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container bg-indigo-950" id="about">
    {/* <div className="green-wave-background inverted"> */}
        <div className=" funded-by-text">About Us</div>
      {/* </div> */}
      <div className="about-us-content-signal">
        <div className="about-us-logo-signal">
          {/* Replace the path with your logo file */}
          <img src="Signal.png" alt="Logo" />
        </div>
        <div className="about-us-text-signal">
          <h1>SIGNAL 3.0</h1>
          <p>
          SIGNAL 3.0 , the flagship event of the IEEE SPS Kerala Chapter, is back with greater energy and excitement! Scheduled to take place on January 24, 25, and 26, 2024, this third edition promises to be a remarkable blend of technology, inspiration, and collaboration. Organized in association with College of Engineering, Poonjar, SIGNAL 3.0 will continue its legacy as a premier platform for fostering technological innovation and building connections across the engineering community.

This exciting three-day extravaganza features a lineup of captivating speakers, valuable networking sessions, and entertaining cultural evenings. It is a gathering where students from various Student Branches can come together to promote technological innovation and explore fresh ideas. The event serves as a central hub for networking, relationship-building and educational opportunities. It comprises inspiring keynote speeches and sessions focused on practical use cases to help you address current technological challenges while preparing for future prospects. It also offers a chance to connect with renowned figures in the field of Engineering and Technology.
          </p>
        </div>
      </div>

      <div className="about-us-content-spskerala">
        <div className="about-us-logo-spskerala">
          {/* Replace the path with your logo file */}
          <img src="sps kc png.png" alt="Logo" />
        </div>
        <div className="about-us-text-spskerala">
          <h1>SPS KERALA CHAPTER</h1>
          <p>
          About SPS Kerala Chapter
          The IEEE Signal Processing Society (SPS) Kerala Chapter is a lively, close-knit community, honored globally as the Best Chapter of the Year among all IEEE SPS branches worldwide. Our team includes 23 dedicated student leaders and 17 seasoned professionals—three of them VOLT graduates—all working under the guidance of an advisory body that brings clarity and direction to our vision. Together, we shape every event with purpose and creativity, striving to leave a genuine impact on this beautiful world, driven by something so uniquely human. Our chapter’s dedication is evident in the flourishing SPS student branches across Kerala, where we build lasting connections and share knowledge through regular collaborations. We’ve celebrated wins in prestigious ICIP and ICASSP video-making competitions, and some of our members are now part of the organizing team for ICASSP 2025, reflecting a commitment that reaches far beyond our region. Working hand in hand with other IEEE section chapters, we are building a network that reaches from the grassroots of Kerala to the world. Our chapter is more than a community—it’s a place where ideas flourish, people engage, and every endeavor holds a lasting purpose. Yes, that’s what we are: a family.
          </p>
        </div>
      </div>

      <div className="about-us-content-cepoonjar">
        <div className="about-us-logo-cepoonjar">
          {/* Replace the path with your logo file */}
          <img src="Poonjar.png" alt="Logo" />
        </div>
        <div className="about-us-text-cepoonjar">
          <h1>COLLEGE OF ENGINEERING POONJAR</h1>
          <p>
          The College of Engineering Poonjar (CEP) is an esteemed educational institution located in the serene environment of Poonjar, Kerala. Established in 2000, the college operates under the Co-operative Academy of Professional Education (CAPE), which is affiliated with APJ Abdul Kalam Technological University (KTU) and approved by the All India Council for Technical Education (AICTE).
          </p>
        </div>
      </div>

      {/* Green Wave Background with Image */}
      {/* <div className="green-wave-background inverted">
        <div className="funded-by-text">Co-Sponsored By</div>
      </div>

      <div className="logo-container">
        <img src="src\assets\cas.png" alt="Logo 1" />
        <img src="src\assets\ias.jpg" alt="Logo 2" />
        <img src="src\assets\IEEE_Students_logo.png" alt="Logo 3" />
      </div>

      <div className="green-wave-background2">
        <div className="funded-by-text">Funded By</div>
      </div>

      <div className="logo-container">
        <img src="src\assets\mlep.jpg" alt="Logo 1" />
        <img src="src\assets\ncs.jpg" alt="Logo 2" />
        <img src="src\assets\nielt.jpeg" alt="Logo 3" />
      </div>

      <div className="green-wave-background2">
      </div> */}
    </div>
  );
};

export default AboutUs;

