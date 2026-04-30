export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">STEMSAGE</h2>
          <p className="mt-3 text-sm text-gray-400">
            One Step Towards DIGITAL 🚀 <br />
            Empowering students with hands-on STEM education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">
            📧 stemsage.techworld.llp@gmail.com <br />
            📱 +91-XXXXXXXXXX <br />
            📍 Shirpur, Maharashtra
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © 2026 STEMSAGE TECHWORLD LLP. All rights reserved.
      </div>
    </footer>
  );
}