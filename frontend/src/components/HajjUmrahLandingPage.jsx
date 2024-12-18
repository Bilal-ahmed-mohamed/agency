import React, { useState } from 'react';
import '../App';

const HajjUmrahLandingPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { email, phone, name, message });
  };

  return (
    <div className="container">
    
    <nav className="navbar">
      <div className="navbar-brand">Travel Bird</div>

      {/* Hamburger Button */}
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isMenuVisible ? "visible" : "hidden"}`}>
        <a href="#home">Home</a>
        <a href="#all-packages">About us</a>
        <a href="#my-account">services</a>
        <a href="#contact-us">Contact Us</a>
      </div>
    </nav>

      <header className="hero">
        <h1>A TASTE OF SPIRITUALITY</h1>
        <h2>HAJJ AND UMRAH</h2>
        <p>With our agency you are assured of your spiritual journey</p>
        <button className="btn">Book Now</button>
      </header>

    
      <section className="services">
        <h2>SERVICES WE OFFER</h2>
        <div className="service-list">
            <div class="card-container">
            <a href="#">
                <img class="card-image" src="/images/img8.webp" alt="" />
            </a>
            <div class="card-content">
                <a href="#">
                    <h5 class="card-title">Airline Ticket</h5>
                </a>
                <p class="card-description">Book affordable airline tickets to Makkah and embark on a spiritual journey with convenient flight options from major cities worldwide.</p>
                <a href="#" class="card-button">
                    Details
                </a>
            </div>
        </div>
        <div class="card-container">
            <a href="#">
                <img class="card-image" src="/images/img4.jpg" alt="" />
            </a>
            <div class="card-content">
                <a href="#">
                    <h5 class="card-title">Accommodation</h5>
                </a>
                <p class="card-description">Experience unparalleled comfort and convenience with world-class accommodation options in Makkah, just steps away from the holy sites."</p>
                <a href="#" class="card-button">
                    Details
                </a>
            </div>
        </div>
        <div class="card-container">
            <a href="#">
                <img class="card-image" src="/images/img5.jpg" alt="" />
            </a>
            <div class="card-content">
                <a href="#">
                    <h5 class="card-title">Hajj & Umrah</h5>
                </a>
                <p class="card-description">Our agency ensures a smooth journey to Makkah with personalized packages, expert guidance, and full support for your Umrah or Hajj pilgrimage.</p>
                <a href="#" class="card-button">
                    Details
                </a>
            </div>
        </div>
        </div>
      </section>


      <section className="contact">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>SEE YOU SOON</h2>
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>hello@reallygreatsite.com</span>
          </div>
           <br />
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>(123) 456-7890</span>
          </div>
          <br />
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>EASTLEIGH, KINGS PLAZA, Nairobi</span>
          </div>
          <br />
        </div>


        <div className="contact-form">
          <h2>CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea 
              placeholder="Your Message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 habibullah travel agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HajjUmrahLandingPage;
