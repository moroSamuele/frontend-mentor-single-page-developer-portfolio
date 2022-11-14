"use client"

import Image from 'next/image';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const Form = () => {
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: () => {
      setMessage('Thank you!');
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Sorry, invalid format here')
        .required('E-mail is required'),
      message: yup.string().trim().required('A greeting is always well accepted'),
    }),
  });


  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-[11px]">
      <div className="flex flex-col pb-[21px]">
        <div className="w-full relative">
          <input
            type="text"
            name="name"
            className={`${ formik.errors.name ? "border-b-errorRed" : "border-b-totalWhite hover:border-b-goodGreen focus:border-b-goodGreen" } text-white uppercase w-full px-[24px] pb-[18px] border-b-[1px] transition-all outline-none`}
            placeholder="NAME"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <Image
              src="/assets/images/error.svg"
              alt={formik.errors.name}
              width="24"
              height="24"
              className="absolute right-0 top-0"
            />
          )}
        </div>
        <div className="mt-[5px] h-[16px] text-[12px] leading-[16px] tracking-[-0.17px] text-errorRed text-right font-[500]">
          {formik.errors.name && (
            formik.errors.name
          )}
        </div>
      </div>
      <div className="flex flex-col pb-[21px]">
        <div className="w-full relative">
          <input
            type="email"
            name="email"
            className={`${ formik.errors.email ? "border-b-errorRed" : "border-b-totalWhite hover:border-b-goodGreen focus:border-b-goodGreen" } text-white uppercase w-full px-[24px] pb-[18px] border-b-[1px] transition-all outline-none`}
            placeholder="EMAIL"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <Image
              src="/assets/images/error.svg"
              alt={formik.errors.name}
              width="24"
              height="24"
              className="absolute right-0 top-0"
            />
          )}
        </div>
        <div className="mt-[5px] h-[16px] text-[12px] leading-[16px] tracking-[-0.17px] text-errorRed text-right font-[500]">
          {formik.errors.email && (
            formik.errors.email
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full relative">
          <textarea
            name="message"
            placeholder="MESSAGE"
            className={`${ formik.errors.message ? "border-b-errorRed" : "border-b-totalWhite hover:border-b-goodGreen focus:border-b-goodGreen" } text-white resize-none h-[107px] uppercase w-full px-[24px] pb-[18px] border-b-[1px] transition-all outline-none`}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <Image
              src="/assets/images/error.svg"
              alt={formik.errors.name}
              width="24"
              height="24"
              className="absolute right-0 top-0"
            />
          )}
        </div>
        <div className="mt-[5px] h-[16px] text-[12px] leading-[16px] tracking-[-0.17px] text-errorRed text-right font-[500]">
          {formik.errors.message && (
            formik.errors.message
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="text-[16px] font-[700] uppercase leading-[26px] tracking-[2.28px] text-totalWhite py-[10px] border-b-2 border-b-goodGreen transition-all hover:text-goodGreen">
          Send message
        </button>
      </div>
    </form>
  )
}

export default Form;