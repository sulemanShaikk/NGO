// About.jsx
import React from 'react';
import '../styles/about.css';
import image5 from "C:/Users/Dell/Desktop/NgoWebsite/src/assets/NGO5.jpg"; // Import your NGO image

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Our NGO</h2>
          <p>
            <li>"At [NGO Name], we create positive change in the lives of Poor communities.Founded on the principles of empowerment & sustainability"</li>
            <li>Our mission is to address social and environmental challenges.</li>
            <li>Through collaborative efforts and impactful initiatives,we strive to uplift communities, provide educational opportunities,and promote sustainable practices.</li>
            <li> Our team is passionate about making a meaningful difference,and we invite you to join us on this journey toward a brighter and more equitable future.</li>
          </p>
        </div>

        <div className="ngo-image-container">
          <img src={image5} alt="NGO" />
        </div>
      </div>
    </section>
  );
};

export default About;
