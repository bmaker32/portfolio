import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import Modal from './Modal'

const ContactUs = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });

    const [isModalOpen,setIsModalOpen] = useState(false)
    const [ModalMessage,setModalMessage] = useState('');
    const handlechange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
        console.log(formData)
    };

    const handleSubmit = async (e)=> {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact',formData);
            console.log(response)
            setModalMessage(response.data.message);
            setIsModalOpen(true)
            setFormData({name:"",email:"",phone:'',message:''})
        }catch(error){
            console.error(error)
            setModalMessage('Something went wrong. Please try again')
            setIsModalOpen(true)
        }
        
    };
    const closeModal = ()=>{
        setIsModalOpen(false)
    }
  return (
    <section className=" py-12 px-6 md:px-20 rounded-lg shadow-md mt-12">
      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Contact Us
      </h2>
      <p className="text-center text-white mb-8">
        Got questions? Reach out to us using the form below.
      </p>
      <div className="max-w-4xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full mt-2 p-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="Your full name"
              value={formData.name}
              onChange={handlechange}
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handlechange}
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full mt-2 p-3 rounded-md border border-neutral-300 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handlechange}
              required
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              
              
              className="py-3 px-6 rounded-md bg-purple-400 text-white font-semibold hover:bg-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        {/* Display Modal if isModalOpen is true */}
        {isModalOpen && <Modal message={ModalMessage} onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ContactUs;
