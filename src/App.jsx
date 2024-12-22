import Button from './components/ui/Button'
import { MapPin, Navigation, Clock, Package, Shield } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#f27e05]">Drop</div>
          <div className="flex gap-6">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
            <Button className="bg-[#f27e05] hover:bg-[#f27e05]/90">Download App</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Drop your way,<br />
              Arrive on time
            </h1>
            <p className="text-lg text-gray-600">
              Simply connecting riders to drivers. Fast, reliable, and convenient transportation at your fingertips.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#f27e05] hover:bg-[#f27e05]/90">
                Book a Ride
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/images/car-hero.jpeg"
              alt="Drop car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Drop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-[#f27e05] mb-4" />
              <h3 className="text-xl font-bold mb-2">Always On Time</h3>
              <p className="text-gray-600">
                Reliable service that ensures you reach your destination on schedule.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Navigation className="w-12 h-12 text-[#f27e05] mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Navigation</h3>
              <p className="text-gray-600">
                Simple and intuitive app interface for seamless journey planning.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-[#f27e05] mb-4" />
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Verified drivers and secure payment options for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <img 
                src="/images/delivery-service.jpeg"
                alt="Ride service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ride Service</h3>
                  <p>Quick and comfortable rides to your destination</p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <img 
                src="/images/driver-happy.jpeg"
                alt="Delivery service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Delivery Service</h3>
                  <p>Fast and reliable delivery to your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Happy Customers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/images/driver-happy.jpeg"
                  alt="Happy driver"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">Regular User</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Drop has made my daily commute so much easier. The drivers are always professional and on time!"
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/images/customer-happy.jpeg"
                  alt="Happy customer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The delivery service is fantastic! It has helped my business grow by providing reliable same-day deliveries."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f27e05] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Download the Drop app now and experience the future of transportation and delivery services.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-[#f27e05] hover:bg-gray-100">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#f27e05] mb-4">Drop</h3>
              <p className="text-gray-400">
                Simply connecting riders to drivers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ride</li>
                <li>Delivery</li>
                <li>Business</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Drop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App

