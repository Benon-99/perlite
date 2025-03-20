import React from 'react';
import ContactForm from '@/components/sections/ContactForm';

// Page metadata
export const metadata = {
  title: 'Contact Us | Mihran Company - Perlite Products',
  description: 'Get in touch with Mihran Company for inquiries about our perlite products, quotes, or any other information you need.',
};

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Have questions about our perlite products or need a customized solution? 
              Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Main Office</h3>
                <div className="mt-2 text-base text-gray-500 space-y-1">
                  <p>123 Perlite Way</p>
                  <p>Industrial District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <div className="mt-2 text-base text-gray-500 space-y-1">
                  <p>
                    <span className="font-medium text-gray-900">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Email:</span> info@mihrancompany.com
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Fax:</span> +1 (555) 123-4568
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <div className="mt-2 text-base text-gray-500 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                <div className="mt-4 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.808.06 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.427.047 1.024.06 1.379.06 3.808v.8c0 2.43-.013 2.784-.06 3.809-.05 1.064-.218 1.79-.465 2.427a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.427.465-1.024.047-1.379.06-3.808.06h-.8c-2.43 0-2.784-.013-3.808-.06-1.064-.05-1.79-.218-2.427-.465a4.889 4.889 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.8c0-2.43.013-2.784.06-3.808.05-1.064.218-1.79.465-2.427a4.88 4.88 0 011.153-1.772A4.897 4.897 0 016.08 2.525c.637-.247 1.363-.415 2.427-.465C9.53 2.013 9.9 2 12.33 2h-.015zm-.023 1.5h-1.048c-2.26 0-2.582.01-3.584.058-.921.042-1.476.196-1.845.333a3.16 3.16 0 00-1.177.767 3.19 3.19 0 00-.767 1.177c-.137.369-.291.917-.333 1.845-.049 1.002-.058 1.323-.058 3.584v1.048c0 2.26.01 2.582.058 3.584.042.921.196 1.476.333 1.845.17.425.402.827.767 1.177.35.365.752.596 1.177.767.369.137.917.291 1.845.333 1.061.05 1.316.058 4.632.058 3.316 0 3.571-.008 4.632-.058.921-.042 1.476-.196 1.845-.333a3.308 3.308 0 001.944-1.944c.137-.369.291-.917.333-1.845.05-1.061.058-1.316.058-4.632 0-3.316-.008-3.571-.058-4.632-.042-.921-.196-1.476-.333-1.845a3.161 3.161 0 00-.767-1.177 3.19 3.19 0 00-1.177-.767c-.369-.137-.917-.291-1.845-.333-1.002-.049-1.323-.058-3.584-.058zm-.188 2.88a4.83 4.83 0 110 9.66 4.83 4.83 0 010-9.66zm0 7.98a3.15 3.15 0 100-6.3 3.15 3.15 0 000 6.3zm4.95-8.2a1.13 1.13 0 110 2.259 1.13 1.13 0 010-2.258z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-4 text-lg text-gray-600">
              Visit our main office and manufacturing facility
            </p>
          </div>
          
          {/* Map iframe - Replace with your actual location */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1658887568956!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mihran Company Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about contacting and working with us
            </p>
          </div>
          
          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">How quickly can I expect a response to my inquiry?</h3>
              <p className="mt-2 text-gray-600">
                We typically respond to all inquiries within 24-48 business hours. For urgent matters, 
                please call our office directly.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">Do you offer product samples?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we provide samples of our perlite products for qualified business inquiries. 
                Please specify your requirements in the contact form or call our sales department.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">Can I schedule a tour of your manufacturing facility?</h3>
              <p className="mt-2 text-gray-600">
                We offer guided tours of our production facilities for business partners and potential clients. 
                Please contact us at least two weeks in advance to arrange a visit.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900">Do you ship internationally?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we ship our perlite products worldwide. For international orders, please contact our 
                logistics department for shipping rates and delivery timeframes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;