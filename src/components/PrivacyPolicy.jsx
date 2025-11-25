import React from 'react';
import logo from '../images/logo.webp';
import { Link } from 'react-router-dom';
import { Footer } from '../home';

export default function PrivacyPolicy() {
  return (
    <>
      <nav className='fixed top-0 left-0 z-40 w-full shadow-md z-90 bg-white/30 backdrop-blur-md'>
        <div className='flex items-center justify-between px-4 py-3 md:px-10 lg:px-16'>
          {/* Logo */}
          <Link to='/'>
            <img
              src={logo}
              alt=' Logo'
              className='h-auto w-28 sm:w-full sm:h-50 md:w-40 lg:w-full lg:h-10'
            />
          </Link>

          {/* Phone Number */}
          <a
            href='tel:+919849669988'
            className='text-base font-semibold text-gray-900 transition-colors sm:text-lg md:text-xl hover:text-blue-700'
          >
            📞 98496 69988
          </a>
        </div>
      </nav>
      <div className='min-h-screen px-6 py-12 bg-gray-50'>
        <div className='max-w-4xl p-10 mx-auto bg-white shadow-xl rounded-xl'>
          <h1 className='pl-3 mb-6 text-4xl font-extrabold text-gray-900 border-l-8 border-yellow-500'>
            Privacy Policy
          </h1>

          <p className='mb-6 leading-relaxed text-gray-700'>
            At <strong>Premier Automobiles</strong>, we respect your privacy and
            are committed to protecting your personal information. This policy
            applies to all our services related to{' '}
            <strong>Vespa and Aprilia scooters & racing accessories</strong>.
          </p>

          <h2 className='mt-8 mb-3 text-2xl font-bold text-gray-800'>
            Information We Collect
          </h2>
          <ul className='pl-6 text-gray-700 list-disc'>
            <li>Personal details like name, phone number, address & email</li>
            <li>Scooter/service booking details</li>
            <li>Payment information (if applicable)</li>
            <li>Device information, IP address, browsing data</li>
          </ul>

          <h2 className='mt-8 mb-3 text-2xl font-bold text-gray-800'>
            How We Use Your Information
          </h2>
          <ul className='pl-6 text-gray-700 list-disc'>
            <li>To book test rides & process purchases</li>
            <li>To provide service, warranty & support</li>
            <li>To improve customer experience & services</li>
            <li>To send updates & promotional offers (opt-in)</li>
          </ul>

          <h2 className='mt-8 mb-3 text-2xl font-bold text-gray-800'>
            Sharing Your Information
          </h2>
          <p className='leading-relaxed text-gray-700'>
            We may share your data with <strong>Piaggio, Vespa, Aprilia</strong>{' '}
            and authorized service providers strictly for operational purposes.
            We do not sell your data to third parties.
          </p>

          <h2 className='mt-8 mb-3 text-2xl font-bold text-gray-800'>
            Your Rights
          </h2>
          <ul className='pl-6 text-gray-700 list-disc'>
            <li>Request data correction/update</li>
            <li>Opt-out of promotional communication</li>
            <li>Request data deletion (as per legal terms)</li>
          </ul>

          <h2 className='mt-8 mb-3 text-2xl font-bold text-gray-800'>
            Contact Us
          </h2>
          <p className='leading-relaxed text-gray-700'>
            For any queries regarding this policy, email us at:
            <strong> support@premierautomobiles.in</strong>
          </p>

          <p className='mt-10 text-sm text-center text-gray-600'>
            © {new Date().getFullYear()} Premier Automobiles. All Rights
            Reserved.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
