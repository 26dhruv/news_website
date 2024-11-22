import { MapPin, Mail, Phone } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import "../../scss/contact.scss";

const ContactInfo = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`contact-page ${isDarkMode ? "dark" : ""}`}>
      <div className="contact-page__container">
        {/* Map Section */}
        <div className="contact-page__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Contact Information */}
        <div className="contact-page__info">
          <div className="contact-page__contact-details">
            <div className="contact-page__contact-details-item">
              <MapPin className="contact-page__contact-details-item-icon" />
              <div className="contact-page__contact-details-item-text">
                <h3>Address</h3>
                <p>123 News Street, Media City, Press Square</p>
              </div>
            </div>

            <div className="contact-page__contact-details-item">
              <Mail className="contact-page__contact-details-item-icon" />
              <div className="contact-page__contact-details-item-text">
                <h3>Email</h3>
                <p>contact@newssite.com</p>
              </div>
            </div>

            <div className="contact-page__contact-details-item">
              <Phone className="contact-page__contact-details-item-icon" />
              <div className="contact-page__contact-details-item-text">
                <h3>Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-page__form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="contact-page__form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
