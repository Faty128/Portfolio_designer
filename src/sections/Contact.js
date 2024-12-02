import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Contactez-moi</h2>
      <p className="text-lg text-gray-600 mb-12">
        N'hésitez pas à me contacter pour toute question ou projet. Je serai ravi de vous répondre !
      </p>
      <form className="max-w-2xl mx-auto bg-gradient-to-r from-gray-800 to-indigo-900 shadow-lg rounded-lg px-8 pt-6 pb-8 space-y-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
