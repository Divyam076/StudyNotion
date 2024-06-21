import React from 'react'
import ContactUsForm from "../../ContactPage/ContactUsForm"
const ContactFormSection = () => {
  return (
    <div>
        <div className='mx-auto'>
            <h1 className='text-center text-4xl font-semibold'>
                Get in Touch
            </h1>
            <p className='text-center text-richblack-300 mt-3'>
            We&apos;d love to here for you, Please fill out this form.
            </p>
            <div className='text-center text-richblack-300 mt-3'>
            <ContactUsForm />
            </div>
        </div>
    </div>
  )
}

export default ContactFormSection