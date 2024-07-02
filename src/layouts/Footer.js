import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeContactAction } from "../store/user/asyncActions";

const Footer = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const [mailData, setMailData] = useState({
        email: '',
        query: '',
        message: ''
    });

    const inpHandleChange = (e) => {
        setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    }

    const sendEmailData = useSelector((state) => state?.user?.contact);

    useEffect(() => {
        if (sendEmailData?.loading === false) {
            if (sendEmailData?.data?.status) {
                setMailData({
                    email: '',
                    query: '',
                    message: ''
                });
                sendEmailData.data = null;
            }
            setLoading(false);
        }
    }, [sendEmailData]);

    const make_contact = (e) => {
        e.preventDefault();
        setLoading(true);

        let html = '';
        html += `<b>E-Mail: </b>${mailData?.email}<br>`;
        html += `<b>Message: </b>${mailData?.message}<br>`;

        dispatch(makeContactAction({
            email: mailData?.email,
            subject: mailData?.query,
            message: html
        }));
    }

    return (
        <>
            <div className="Experience_the_best pt-[70px] pb-6">
                <div className="max-w-[1024px] mx-auto px-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-1">
                        <div className=''>
                            <div className='flex items-center'>
                                <div>
                                    <img className="mr-1 h-[43px] w-[43px]" src="/assets/images/logo.png" alt="" />
                                    {/* <svg className="mr-1" preserveAspectRatio="xMidYMid meet" data-bbox="23.5 23.5 153 153" viewBox="23.5 23.5 153 153" height="40" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kybbhi6c svg [data-color="1"] </style></defs>
                                    <g>
                                        <path d="M158.026 23.5H41.974C31.771 23.5 23.5 31.771 23.5 41.974v116.052c0 10.203 8.271 18.474 18.474 18.474h116.052c10.203 0 18.474-8.271 18.474-18.474V41.974c0-10.203-8.271-18.474-18.474-18.474zM62.37 125.347c-8.382 1.206-16.154-4.611-17.36-12.992s4.611-16.154 12.992-17.36c8.382-1.206 16.154 4.611 17.36 12.992s-4.61 16.154-12.992 17.36zm89.787-43.89-47.193 63.061a14.978 14.978 0 0 1-12.021 6.014c-3.127 0-6.279-.974-8.976-2.992-6.633-4.964-7.985-14.364-3.022-20.997l47.193-63.061c4.964-6.633 14.363-7.985 20.997-3.022 6.632 4.964 7.985 14.365 3.022 20.997z" fill="#111010" data-color="1"></path>
                                    </g>
                                </svg> */}
                                </div>
                                <div className='pl-2'>
                                    <h1 className='text-[23px] font-semibold leading-7'>Clestrix</h1>
                                    <p className='text-[13px]'>Discover the World of Celebrities.</p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <p>
                                    Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.Helvetica Light is an easy-to-read font, with tall and narrow letters, that works well on almost every site.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-[19px] font-semibold mt-12'>Follow Us</h1>
                            </div>
                            <div className='flex mt-5'>
                                <img className='mr-3' src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" width="39" height="39" />
                                <img className='mr-3' src="/assets/images/48a2a42b19814efaa824450f23e8a253.webp" alt="" width="39" height="39" />
                                <img className='mr-3' src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" width="39" height="39" />
                                <img className='mr-3' src="/assets/images/11062b_81cefb1bd2e2490d892a1cad5cc1cd8a~mv2.webp" alt="" width="39" height="39" />
                                <img className='mr-3' src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" width="39" height="39" />
                                <img className='mr-3' src="/assets/images/11062b_5786213245914dde873f6b286a16854c~mv2.webp" alt="" width="39" height="39" />
                            </div>
                        </div>

                        <div className='pl-0 lg:pl-14'>
                            <div>
                                <h1 className='text-[20px] font-semibold mt-12 lg:mt-0'>Quick Links</h1>
                                <div className="grid grid-cols-2 mt-6">
                                    <a href="/" className='py-2 underline'>Home</a>
                                    <a href="/" className='py-2 underline'>Sports</a>
                                    <a href="/" className='py-2 underline'>About Us</a>
                                    <a href="/" className='py-2 underline'>Business</a>
                                    <a href="/" className='py-2 underline'>Our Services</a>
                                    <a href="/" className='py-2 underline'>Film Industry</a>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[20px] font-semibold mt-14'>Legal Ameneties</h1>
                                <div className="grid mt-2">
                                    <a href="/" className='py-2 underline'>Terms & Conditions</a>
                                    <a href="/" className='py-2 underline'>Privacy Policy</a>
                                </div>
                            </div>
                        </div>

                        <div className="pl-0 lg:pl-4" id='contact_us'>
                            <h1 className='text-[20px] font-semibold mb-8 mt-12 lg:mt-0'>Contact Us</h1>
                            <form onSubmit={(e) => make_contact(e)} className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block text-sm font-medium text-black">Email *</label>
                                        <input type="email" id="email" name="email" required value={mailData?.email} onChange={(e) => inpHandleChange(e)} placeholder="example@abc.com" className="mt-1 p-2 w-full border-2 border-black rounded-md focus:outline-none text-black bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="query" className="block text-sm font-medium text-black">Query *</label>
                                        <input type="text" id="query" name="query" required value={mailData?.query} onChange={(e) => inpHandleChange(e)} placeholder="Subject for Query" className="mt-1 p-2 w-full border-2 border-black rounded-md focus:outline-none text-black bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-black">Message *</label>
                                    <textarea id="message" value={mailData?.message} name="message" required onChange={(e) => inpHandleChange(e)} placeholder="Elaborate Your Concerns" rows="4" className="resize-none mt-1 p-2 w-full border-2 border-black rounded-md focus:outline-none text-black bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                    </textarea>
                                </div>
                                <div>
                                    <button disabled={loading} type="submit" className="bg-black flex justify-center items-center text-white px-4 py-2 w-full rounded-md transition duration-300 hover:bg-white hover:text-black hover:border-1 hover:border-black focus:outline-none focus:ring focus:border-blue-300">
                                        {loading ? <CircularProgress style={{ color: '#ffbf23', height: '22px', width: '22px' }} /> : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black py-3 mb-[-25px]'>
                <h1 className='text-white text-center text-[13px]'>© 2024 Clestrix. All rights reserved.</h1>
            </div>
        </>
    )
};
export default Footer;
