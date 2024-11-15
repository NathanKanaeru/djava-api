// pages/index.js
import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My Landing Page</title>
        <meta name="description" content="Landing page built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <header className="bg-blue-600 text-white p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">MyBrand</h1>
            <nav className="space-x-6">
              <a href="#features" className="hover:text-gray-200">Features</a>
              <a href="#about" className="hover:text-gray-200">About</a>
              <a href="#contact" className="hover:text-gray-200">Contact</a>
            </nav>
          </div>
        </header>
        <section className="text-center py-20 bg-blue-100">
          <h2 className="text-4xl font-bold text-blue-800">Welcome to My Landing Page</h2>
          <p className="text-lg text-gray-700 mt-4">
            Build modern and professional websites with Next.js.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Get Started
          </button>
        </section>
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-semibold text-gray-800">Our Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-bold text-gray-800">Fast Performance</h4>
                <p className="text-gray-600 mt-2">Enjoy lightning-fast load times with our optimized setup.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-bold text-gray-800">Responsive Design</h4>
                <p className="text-gray-600 mt-2">Looks great on both mobile and desktop devices.</p>
              </div>
              <div className="p-6 bg-white shadow rounded-lg">
                <h4 className="text-xl font-bold text-gray-800">Customizable</h4>
                <p className="text-gray-600 mt-2">Easily adapt to your business needs.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-semibold text-gray-800 text-center">About Us</h3>
            <p className="mt-4 text-gray-600 text-center">
              We are a team of developers passionate about building scalable and modern web solutions.
            </p>
          </div>
        </section>
        <footer id="contact" className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto text-center">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="text-sm mt-2">Email: contact@mybrand.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </footer>
      </main>
    </>
  );
}
