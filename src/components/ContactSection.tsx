import React, { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from SEO Sprint Contact Form
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:nithilan108@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Ready to boost your SEO performance? Let's discuss your project and how we can 
              help you achieve measurable results with our 24-hour SEO sprint service.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> nithilan108@gmail.com
              </div>
              <div className="contact-item">
                <strong>Response Time:</strong> Within 24 hours
              </div>
              <div className="contact-item">
                <strong>Service:</strong> SEO Sprint & Technical Optimization
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            {isSubmitted ? (
              <div className="success-message">
                <h4>✅ Message Ready!</h4>
                <p>Your email client should open with a pre-filled message. If it doesn't open automatically, please email us directly at nithilan108@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your SEO project and goals..." 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
