import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { ReactComponent as Image } from "assets/svg/authBanner.svg";
import { Link } from "react-router-dom";
import Head from "components/Head";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email Required"),
  username: Yup.string().required("Username Required"),
  password: Yup.string()
    .min(6, "Password needs more than 6 characters")
    .max(20, "Password needs less than 20 characters")
    .required("Password Required"),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function Login() {
  return (
    <>
      <Head title="Login" desc="Login page" />
      <div className="grid grid-cols-1 space-x-2 md:grid-cols-2 mt-14">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-center">
            Login to Your Account
          </h1>
          <div className="flex flex-col justify-center mt-10 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <button className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white ">
              <FaGoogle size={22} />
              <p className="inline-block pt-1">Login With Google</p>
            </button>
            <button className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white">
              <FaApple size={26} />
              <p className="inline-block pt-1">Login With Apple</p>
            </button>
          </div>
          <p className="my-2 mt-4 text-center text-gray-400">-- OR --</p>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            //  onSubmit outputs values for now
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form className="space-y-4">
              <div className="space-y-2">
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
                />
                <ErrorMessage name="email" />
                <Field
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
                />
                <ErrorMessage name="username" />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
                />
                <ErrorMessage name="password" />
                <Field
                  type="password"
                  name="passwordConfirmation"
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full px-2 py-4 transition delay-75 transform bg-gray-800 rounded-md focus:outline-black focus:scale-105"
                />
                <ErrorMessage name="passwordConfirmation" />
              </div>
              <div className="flex justify-between">
                <a
                  href="/"
                  className="inline-block text-gray-400 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                name="login"
                className="w-full p-2 text-lg rounded-md gradient"
              >
                Login
              </button>
            </Form>
          </Formik>
          <p className="my-4 text-center text-gray-400">
            Not a member yet ?{" "}
            <Link to="/register" className="text-white underline">
              Register Now
            </Link>
          </p>
        </div>
        <div className="hidden md:flex">
          <Image width="100%" />
        </div>
      </div>
    </>
  );
}

export default Login;
