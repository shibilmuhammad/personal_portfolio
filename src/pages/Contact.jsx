import axios from "axios";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        emailjs
      .sendForm('service_xq18d8t', 'template_bwjnjn8', form.current, {
        publicKey: '1Y_DRkp-cAXhW2jGP',
      })
      .then(
        () => {
            setLoading(false);
            setSuccess(true);
            toast.success("Sent Successfully")
        },
        (error) => {
            setLoading(false);
            toast.error("error")
            console.log(error);
        },
      );
        
    };
    return (
        <section id="contact" className="pb-16 mx-4 lg:mx-0">
            <h2 className="text-center text-4xl dark:text-white">Contact Me</h2>
            <ToastContainer />

            <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
                {/* blurDataURL="https://i.imgur.com/owZdhjA.png" */}
                <img unoptimized={true} quality={100} alt="contact" src="/img/contact.png" className="hidden md:block w-1/2 h-full object-cover" width={1000} height={1000} />
                <div className="flex-1">
                    <h3 className="text-2xl dark:text-white">Get in touch</h3>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>

                    <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-4 rounded-xl">
                        <input required  name="user_name" type="text" placeholder='Full Name *' className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <input required name="user_email" type="email" placeholder='Email *' className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <textarea required name="message" rows={4} placeholder='Message *' className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <button disabled={loading} className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end">
                            {loading ? <span className="flex items-center gap-2 ">Say Hello <i class="bi bi-arrow-clockwise animate-spin"></i> </span> : "Say Hello 👋"}
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contact