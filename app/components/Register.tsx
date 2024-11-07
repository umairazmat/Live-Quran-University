"use client"; // Ensure the component runs on the client side
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    course: string;
}

const Register = () => {
    // State for loading indicator
    const [loading, setLoading] = useState(false);

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .matches(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces"),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[+0-9]+$/, "Phone number must be numeric"),
        course: Yup.string().required("Course selection is required"),
    });

    // Separate form handler function
    const handleSubmit = async (
        values: FormValues,
        { resetForm }: FormikHelpers<FormValues>
    ) => {
        setLoading(true); // Set loading state to true
        try {
            // console.log(values);
            const templateParams = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                course: values.course,
            };

            // Send email using EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_REGISTER_TEMPLATE_ID!,  // Make sure this ID is correct in EmailJS for registration
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            toast.success("Registration successful!");
            // console.log('response', response);
            resetForm(); // Reset the form fields
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("An error occurred during registration. Please try again.");
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    return (
        <section id="register" className="py-20 md:py-24 lg:py-40">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Register for Our Quran Classes
                </h2>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
                    <div className="md:flex">
                        <div className="bg-blue-600 text-white p-8 md:w-1/2">
                            <h3 className="text-2xl font-bold mb-4">
                                Enroll Now and Begin Your Journey!
                            </h3>
                            <p className="mb-4">
                                Don&apos;t miss the opportunity to learn Quran online with our esteemed
                                teachers. Enjoy the flexibility of scheduling your classes according to your
                                convenience.
                            </p>
                        </div>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                phone: "",
                                course: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit} // Use the separate handler here
                        >
                            {() => (
                                <Form className="p-8 md:w-1/2">
                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Name
                                        </label>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            className="w-full p-2 border rounded-md"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-600" />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            className="w-full p-2 border rounded-md"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-600" />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Phone
                                        </label>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            required
                                            className="w-full p-2 border rounded-md"
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-600" />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="course"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Select Course
                                        </label>
                                        <Field as="select" id="course" name="course" className="w-full p-2 border rounded-md" required>
                                            <option value="">Select a course</option>
                                            <option value="hifz">Hifz (Memorization)</option>
                                            <option value="tajweed">Tajweed</option>
                                            <option value="nazrah">Nazrah (Reading)</option>
                                            <option value="norani">Norani Qaida (Reading)</option>
                                        </Field>
                                        <ErrorMessage name="course" component="div" className="text-red-600" />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading} // Disable button while loading
                                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? "Registering..." : "Register Now"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
