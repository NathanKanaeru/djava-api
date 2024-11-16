// pages/_app.js
//import '../styles/globals.css'; // Ensure this line is present
import "tailwindcss/tailwind.css"
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>My Vercel App</title>
        <meta name="description" content="A modern and responsive Next.js application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
              Welcome to <span className="text-blue-500">My Vercel App</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Build modern, scalable, and responsive apps with Next.js and deploy on Vercel.
            </p>
            <div className="mt-8">
              <a
                href="#features"
                className="px-6 py-3 bg-blue-500 text-white text-lg rounded-full shadow-md hover:bg-blue-600 transition"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Features</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Fast Performance"
                description="Next.js ensures blazing-fast load times and seamless user experience."
                icon="⚡"
              />
              <FeatureCard
                title="SEO Optimized"
                description="Built-in SEO features help your app rank higher in search engines."
                icon="🚀"
              />
              <FeatureCard
                title="Easy Deployment"
                description="Deploy your app with a single click using Vercel’s platform."
                icon="📦"
              />
            </div>
          </section>

          {/* Footer Section */}
          <footer className="mt-16 text-center text-gray-600 text-sm">
            © 2024 My Vercel App. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="text-4xl text-blue-500">{icon}</div>
      <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
