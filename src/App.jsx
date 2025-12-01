import React, { useState } from 'react';
import Button from './components/ui/Button';
import {Bounce, FadeIn, SlideIn} from 'tmt-anim-library'
import { MapPin, Navigation, Clock, Package, Shield, Menu, X, Car, Truck, Star, DollarSign, Headphones, Zap } from 'lucide-react';
import DownloadModal from './components/ui/DownloadModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openDownloadModal = () => setShowDownloadModal(true);
  const closeDownloadModal = () => setShowDownloadModal(false);

  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden">
      <DownloadModal open={showDownloadModal} onClose={closeDownloadModal} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#f27e05] flex items-center">
              <img src='/images/locate_white.png' alt='Icon' className="w-9 h-12 object-contain mr-2"/>
              <p>Drop</p>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-[#f27e05]">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#f27e05]">Services</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#f27e05]">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-[#f27e05]">Contact</a>
            </div>
            <Button className="hidden md:block bg-[#f27e05] hover:bg-[#f27e05]/90" onClick={openDownloadModal}>
              Download App
            </Button>
            <button
              className="md:hidden text-gray-600 hover:text-gray-800"
              onClick={toggleNavbar}
            >
              {isOpen ? <X size={24} /> : <Menu size={24}/>}
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#about" className="block text-gray-600 hover:text-[#f27e05]">About</a>
              <a href="#services" className="block text-gray-600 hover:text-[#f27e05]">Services</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-[#f27e05]">Testimonials</a>
              <a href="#contact" className="block text-gray-600 hover:text-[#f27e05]">Contact</a>
              <Button className="w-full bg-[#f27e05] hover:bg-[#f27e05]/90" onClick={openDownloadModal}>
                Download App
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-left">
            <FadeIn delay={0.5} duration={2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Drop your way,<br />
                Arrive on time
              </h1>
            </FadeIn>
            <SlideIn delay={0.5} duration={2}>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Experience the future of transportation with Drop. Fast, reliable, and convenient rides at your fingertips. We're not just connecting riders to drivers; we're revolutionizing the way you move.
            </p>
            </SlideIn>
            <FadeIn delay={0.5} duration={1}>
              <Bounce duration={2}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="w-full sm:w-auto bg-[#f27e05] hover:bg-[#f27e05]/90 text-xl py-6" onClick={openDownloadModal}>
                    Download App
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl py-6" onClick={openDownloadModal}>
                    Learn More
                  </Button>
                </div>
              </Bounce>
            </FadeIn>
          </div>
          <FadeIn delay={0.5} duration={2}>
            <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden mt-8 md:mt-0">
              <img 
                src="/images/car-hero.jpeg"
                alt="Drop car"
                className="w-full h-full object-contain md:object-contain lg:object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.5} duration={2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            About Drop
          </h2>
          </FadeIn>
          <FadeIn delay={0.5} duration={3}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xl text-gray-600">
              Drop is more than just a ride-sharing platform; we're a movement towards smarter, more efficient urban mobility. Founded in 2024, we've quickly grown to become a leading player in the transportation industry, thanks to our unwavering commitment to innovation, safety, and customer satisfaction.
            </p>
            <p className="text-xl text-gray-600">
              Our mission is to provide seamless, efficient, and affordable transportation services to communities around the world. We believe in a future where getting from point A to point B is not just about the destination, but about enjoying the journey.
            </p>
            <p className="text-xl text-gray-600">
              With Drop, you're not just a passenger; you're part of a community that values time, comfort, and sustainability. Join us in reshaping the future of transportation, one ride at a time.
            </p>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose Drop?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <SlideIn direction='right' delay={0.5} duration={1}>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
                <Clock className="w-16 h-16 text-[#f27e05] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Always On Time</h3>
                <p className="text-gray-600 text-lg">
                  We understand the value of your time. Our advanced algorithms ensure you reach your destination promptly, every single time. Say goodbye to waiting and hello to punctuality.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction='left' delay={0.5} duration={1}>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
                <Navigation className="w-16 h-16 text-[#f27e05] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Easy Navigation</h3>
                <p className="text-gray-600 text-lg">
                  Our user-friendly app makes journey planning a breeze. With intuitive interfaces and real-time updates, you're always in control of your travel experience.
                </p>
              </div>
            </SlideIn>
            <SlideIn direction='right' delay={0.5} duration={1}>
              <div className="p-8 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
                <Shield className="w-16 h-16 text-[#f27e05] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Safe & Secure</h3>
                <p className="text-gray-600 text-lg">
                  Your safety is our top priority. Enjoy peace of mind with our thoroughly vetted drivers, secure payment options, and 24/7 support. Ride with confidence, every time.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 justify-center items-center flex flex-col">
              <FadeIn duration={2} delay={0.5}>
                <div className="flex items-start space-x-4">
                  <Car className="w-12 h-12 text-[#f27e05] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ride Service</h3>
                    <p className="text-gray-600 text-lg">
                      Experience comfort and convenience with our premium ride service. Whether you're commuting to work, heading to the airport, or enjoying a night out, our professional drivers are ready to take you there in style.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn duration={2} delay={0.5}>
                <div className="flex items-start space-x-4">
                  <Truck className="w-12 h-12 text-[#f27e05] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Delivery Service</h3>
                    <p className="text-gray-600 text-lg">
                      Need something delivered? Our efficient delivery service has got you covered. From important documents to your favorite meal, we ensure your items reach their destination quickly and safely.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.5} duration={2}>
                <div className="flex items-start space-x-4">
                  <Star className="w-12 h-12 text-[#f27e05] flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Premium Experience</h3>
                    <p className="text-gray-600 text-lg">
                      Elevate your journey with our premium service. Enjoy luxury vehicles, personalized attention, and exclusive perks designed for those who appreciate the finer things in life.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <SlideIn direction='left' delay={0.5} duration={1}>
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img 
                  src="/images/delivery-service.jpeg"
                  alt="Ride service"
                  className="w-full h-full object-contain md:object-cover lg:object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-2xl font-bold">Experience Comfort</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img 
                  src="/images/driver-happy.jpeg"
                  alt="Delivery service"
                  className="w-full h-full object-contain md:object-cover lg:object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-2xl font-bold">Swift Deliveries</p>
                </div>
              </div>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.5} duration={3}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <SlideIn duration={2} direction='left'>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/images/driver-happy.jpeg"
                  alt="Happy driver"
                  className="w-16 h-16 rounded-full object-contain md:object-cover lg:object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl">John Doe</h3>
                  <p className="text-gray-600">Regular User</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                "Drop has revolutionized my daily commute. The drivers are always professional, the cars are clean, and the service is consistently reliable. I can't imagine using any other ride-sharing app!"
              </p>
            </div>
            </SlideIn>
            <SlideIn direction='right' duration={2} delay={0.5}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/images/customer-happy.jpeg"
                  alt="Happy customer"
                  className="w-16 h-16 rounded-full object-contain md:object-cover lg:object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl">Jane Smith</h3>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                "As a small business owner, Drop's delivery service has been a game-changer. Their reliability and efficiency have helped me expand my customer base and improve satisfaction. I highly recommend Drop to any business looking to streamline their deliveries."
              </p>
            </div>
            </SlideIn>
            <SlideIn direction='left' duration={2} delay={0.5}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/images/customer-happy.jpeg"
                  alt="Happy customer"
                  className="w-16 h-16 rounded-full object-contain md:object-cover lg:object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl">Alex Johnson</h3>
                  <p className="text-gray-600">Frequent Traveler</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg">
                "I travel a lot for work, and Drop has made getting around in new cities so much easier. The app is intuitive, the drivers are knowledgeable, and the prices are competitive. It's my go-to transportation solution wherever I go."
              </p>
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FadeIn delay={0.5} duration={3}>
      <section className="py-20 bg-[#f27e05] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience the Drop Difference?
          </h2>
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto">
            Download the Drop app now and experience the future of transportation and delivery services. Join thousands of satisfied customers who have made Drop their go-to choice for reliable, efficient, and comfortable rides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-[#f27e05] hover:bg-gray-100 text-xl py-6" onClick={openDownloadModal}>
              Download App
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-xl py-6" onClick={openDownloadModal}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f27e05] focus:ring focus:ring-[#f27e05] focus:ring-opacity-50 text-lg py-3" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f27e05] focus:ring focus:ring-[#f27e05] focus:ring-opacity-50 text-lg py-3" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="6" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f27e05] focus:ring focus:ring-[#f27e05] focus:ring-opacity-50 text-lg"></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#f27e05] hover:bg-[#f27e05]/90 text-xl py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-3xl font-bold text-[#f27e05] mb-6">Drop</h3>
              <p className="text-gray-400 text-lg mb-6">
                Revolutionizing transportation and delivery services, one ride at a time.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#f27e05]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f27e05]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f27e05]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#about" className="hover:text-[#f27e05]">About Us</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Careers</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Blog</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-[#f27e05]">Ride</a></li>
                <li><a href="#services" className="hover:text-[#f27e05]">Delivery</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Business</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Cities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#contact" className="hover:text-[#f27e05]">Help Center</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Safety</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#f27e05]">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; {new Date().getFullYear()} Drop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

