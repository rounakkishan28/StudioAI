import React from 'react';
import Header from '../_components/Header';

function About() {
  return (
    <div className="bg-black min-h-screen pb-14">
      <div className="flex flex-col items-center justify-center">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-28 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-900">
          Welcome to <span className="text-4xl md:text-5xl">StudioAI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empower your creativity with AI-powered video generation and editing tools.
        </p>
      </div>

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-400">Who We Are</h2>
          <p className="text-gray-600 text-base">
            At StudioAI, we believe in transforming the way videos are created. Using cutting-edge AI
            technology, we enable creators, businesses, and individuals to craft professional-grade
            videos effortlessly. Whether you’re editing raw footage or generating new content from
            scratch, StudioAI is here to empower your vision.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-400">Our Mission</h2>
          <p className="text-gray-600 text-base">
            Our mission is to simplify the video creation process by harnessing the power of artificial
            intelligence. We aim to provide intuitive tools that make storytelling more accessible and
            efficient, helping you bring your ideas to life with unmatched ease.
          </p>
        </div>
      </div>
      
      {/* Our Features Section */}
      <div className="max-w-6xl mx-auto mt-5 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-lg shadow-white p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-400">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">AI Video Generation</h3>
            <p className="mt-4 text-gray-600">
              Generate stunning videos in minutes using advanced AI models trained for creativity and
              efficiency.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Smart Editing Tools</h3>
            <p className="mt-4 text-gray-600">
              Edit your videos effortlessly with intelligent tools that understand your creative needs.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Seamless Collaboration</h3>
            <p className="mt-4 text-gray-600">
              Work with your team in real-time, ensuring that every project is as collaborative as it is
              creative.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto mt-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-lg shadow-white p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-400">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Creativity</h3>
            <p className="mt-4 text-gray-600">
              We inspire limitless creativity by providing innovative tools for creators of all kinds.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Simplicity</h3>
            <p className="mt-4 text-gray-600">
              We believe in simplicity, making advanced tools easy to use for everyone.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Innovation</h3>
            <p className="mt-4 text-gray-600">
              We constantly innovate to stay ahead, empowering you with the latest AI advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
