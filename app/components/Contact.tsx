import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };

    // Yup validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .matches(/^[A-Za-z\s]+$/, "Name should only contain letters and spaces"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[+0-9]+$/, "Phone number should only contain numbers"),
        message: Yup.string().required("Message is required"),
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        values: typeof initialValues,
        { resetForm }: FormikHelpers<typeof initialValues> // Use FormikHelpers type
    ) => {
        setLoading(true);
        try {
            const templateParams = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message,
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );

            console.log("Email sent successfully:", response);
            toast.success("Message sent successfully!");
            resetForm();
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("An error occurred while sending the message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-40  bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Name
                            </label>
                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="name" component="p" className="text-red-600 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email
                            </label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="email" component="p" className="text-red-600 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <Field
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Your Phone Number"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="phone" component="p" className="text-red-600 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage name="message" component="p" className="text-red-600 text-sm" />
                        </div>

                        <button
                            type="submit"
                            disabled={loading} // Disable button while loading
                            className={`w-full px-4 py-2 ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white font-medium rounded`}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </Form>
                </Formik>
                <ToastContainer /> {/* Toast notifications container */}
            </div>
        </section>
    );
};

export default Contact;
