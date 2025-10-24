import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Image from "next/image";
import { FaGlobe, FaMobileAlt, FaChartLine, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kribe Technologies</h1>
          <p className="text-xl md:text-2xl mb-8">
            Web & Mobile App Development with Full Digital Marketing Solutions
          </p>
          <div className="flex justify-center gap-4">
            <a href="#services" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">View services</a>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">Get in touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Innovative solutions{" "}
              <span className="text-blue-600">
                Transforming your digital presence
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              At Kribe Technologies, we specialize in creating stunning websites and mobile applications tailored to your unique needs. Our team of experts in Port-Harcourt is dedicated to helping you stand out in the digital landscape. We combine creativity and technology to deliver solutions that elevate your brand and drive engagement. Partner with us for a comprehensive approach to digital success.
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition">Get in touch</a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://static.photos/technology/1024x576/1"
              alt="Digital solutions"
              width={500}
              height={300}
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Innovative solutions{" "}
              <span className="text-blue-600">
                Transforming your digital presence
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaGlobe className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Website development</h3>
              <p className="text-gray-600">Transform your online presence with custom website development.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaMobileAlt className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile app development</h3>
              <p className="text-gray-600">Build engaging mobile apps that captivate your audience.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Digital marketing</h3>
              <p className="text-gray-600">Boost your brand visibility with strategic digital marketing services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">We'd love to hear from you</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="email@website.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Comment or Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition w-full">Submit</button>
              </form>
             
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 p-2 flex items-center justify-center">
                      <FaPhone className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">09027865543</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 p-2 flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@kribetechnologies.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 p-2 flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Port Harcourt, Rivers State, Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7226135623465!2d7.004645614763942!3d4.815517396488982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce2b8a7f3b0b%3A0x2e2e2e2e2e2e2e2e!2sPort%20Harcourt%2C%20Rivers%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}