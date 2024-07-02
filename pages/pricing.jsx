'use client';
import React, { useEffect, useState } from 'react';
import BootstrapDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Layout from '../src/layouts/Layout';
import { CircularProgress, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { makeContactAction } from '../src/store/user/asyncActions';

const Pricing = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const sendEmailData = useSelector((state) => state?.user?.contact);

    useEffect(() => {
        if (sendEmailData?.loading === false) {
            if (sendEmailData?.data?.status) {
                setOpen(false);
                setMailData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    plan: 'free',
                    message: ''
                });
                sendEmailData.data = null;
            }
            setLoading(false);
        }
    }, [sendEmailData]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [active, setActive] = useState({
        one: false,
        two: true,
        three: false,
    });

    const togglePriceCard = (card, value) => {
        setActive({
            ...active,
            [card]: value
        });
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (Number(window.innerWidth) <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [mailData, setMailData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        plan: 'free',
        message: ''
    });

    const inpHandleChange = (e) => {
        setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    }

    const make_contact = (e) => {
        e.preventDefault();
        setLoading(true);

        let html = '';
        html += `<b>Name: </b>${mailData?.first_name} ${mailData?.last_name}<br>`;
        html += `<b>E-Mail: </b>${mailData?.email}<br>`;
        html += `<b>Plan: </b>${mailData?.plan}<br>`;
        html += `<b>Message: </b>${mailData?.message}<br>`;

        dispatch(makeContactAction({
            email: mailData?.email,
            subject: 'Plan Inquiry',
            message: html
        }));
    }

    return (
        <>
            <Layout>
                <React.Fragment>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth="lg"
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            Contact Us
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <DialogContent dividers>
                            <div className="max-w-[1024px] px-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-14">
                                    <div className='hidden md:block'>
                                        <img className='w-[100%] h-[383px]' src="/assets/images/White And Yellow Colorful Web Designer Instagram Post.webp" alt="" />
                                    </div>
                                    <div>
                                        <form className="space-y-6" onSubmit={(e) => make_contact(e)}>
                                            <div className="flex space-x-4">
                                                <div className="w-1/2">
                                                    <label className="block text-sm font-medium">First Name</label>
                                                    <input type="text" name="first_name" required value={mailData?.first_name} onChange={(e) => inpHandleChange(e)} className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent hover:bg-white focus:bg-white" />
                                                </div>
                                                <div className="w-1/2">
                                                    <label className="block text-sm font-medium">Last Name</label>
                                                    <input type="text" name="last_name" required value={mailData?.last_name} onChange={(e) => inpHandleChange(e)} className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">Email *</label>
                                                <input type="email" name="email" required value={mailData?.email} onChange={(e) => inpHandleChange(e)} className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white" />
                                            </div>
                                            <div>
                                                <label htmlFor="prefferedPlan" className="block text-sm font-medium">Preferred Plan *</label>
                                                <select id="preferredPlan" name="plan" value={mailData?.plan} onChange={(e) => inpHandleChange(e)} className="mt-1 p-2 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                                    <option value="free">Free</option>
                                                    <option value="standard">Standard</option>
                                                    <option value="premium">Premium</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                                {/* <input type="text" required id="message" value={mailData?.message} name="message" onChange={(e) => inpHandleChange(e)} className="mt-1 p-2 w-full h-[45px] border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                                </input> */}
                                                <TextField
                                                    className="mt-1 w-full border border-gray-300 focus:outline-none bg-transparent placeholder-black hover:bg-white focus:bg-white"
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    rows={1}
                                                    value={mailData?.message}
                                                    name="message"
                                                    onChange={(e) => inpHandleChange(e)}
                                                />
                                            </div>
                                            <div>
                                                <button disabled={loading} type="submit" className="sub_but flex justify-center items-center text-white px-4 py-2 w-full rounded-md transition duration-300 hover:bg-black hover:text-white hover:border-1 hover:border-black focus:outline-none focus:ring focus:border-blue-300">
                                                    {loading ? <CircularProgress style={{ color: 'white', height: '22px', width: '22px' }} /> : 'Submit'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </BootstrapDialog>
                </React.Fragment>

                <div className='w-full bg-[#ffd7ef] h-[325px] pt-[200px] mt-[-98px] flex justify-center'>
                    <div className='w-[250px] md:w-full text-center'>
                        <Typography variant='caption' className="text-[15px]">
                            Use this area to describe one of your memberships.
                        </Typography>
                    </div>
                </div>
                <div className='w-full bg-[#ffd7ef] h-[75px]'>
                    <img src="/assets/images/header-white-curve.png" alt="" className='header-white-curve' />
                </div>
                <div className='flex mt-[-125px]'>
                    <div className="max-w-[1024px] mx-auto px-4 z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-8">
                            <div className='min-w-[100%] md:min-w-[285px] order-2 lg:order-1 mb-8 lg:mb-0'>
                                <div className='rounded-t-lg first_half p-7 pt-9'>
                                    <div className='text-[20px]'>Free</div>
                                    <span className='font-semibold text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-[68px]'>0</span>
                                    <div className='text-[12px] mt-6'>Free Plan</div>
                                    <button className="mt-5 bg-black text-white font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-[#4c390a]"
                                        onClick={handleClickOpen}>
                                        Get Started
                                    </button>
                                </div>
                                <div className="rounded-b-lg second_half">
                                    <div className={`priceCard ${!active?.one && isMobile ? 'priceCardHide' : ''}`}>
                                        <div className='flex mt-4'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>Free profile on Clestrix </span>
                                        </div>
                                        <div className='flex mt-5'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>3 free edits </span>
                                        </div>
                                    </div>
                                    {isMobile &&
                                        <div onClick={() => togglePriceCard('one', !active.one)} className={`flex justify-center p-2 icon_div ${!active?.one ? 'icon_div' : 'pink_icon_div'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px] h-[14px]' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='min-w-[100%] md:min-w-[285px] order-1 lg:order-2 mb-8 lg:mb-0'>
                                <div className='rounded-t-lg bg-black p-7 pt-9'>
                                    <div className='best_value'>
                                        <button className='first_half border border-black px-2 py-1 font-bold'>Best Value</button>
                                    </div>
                                    <div className='text-[20px] text-white'>Standard</div>
                                    <span className='font-semibold text-white text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-white text-[68px]'>4,999</span>
                                    <button className="mt-[62px] bg-white text-black font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-[#b3b3b3] hover:text-black"
                                        onClick={handleClickOpen}>
                                        Get Started
                                    </button>
                                </div>
                                <div className='rounded-b-lg second_half'>
                                    <div className={`priceCard ${!active?.two && isMobile ? 'priceCardHide' : ''}`}>
                                        <div className='flex mt-4'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>Personalized Website </span>
                                        </div>
                                        <div className='flex mt-5'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>3 lifetime edits </span>
                                        </div>
                                    </div>
                                    {isMobile &&
                                        <div onClick={() => togglePriceCard('two', !active.two)} className={`flex justify-center p-2 icon_div ${!active?.two ? 'black_icon_div' : 'pink_icon_div'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px] h-[14px]' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='min-w-[100%] md:min-w-[285px] order-3 lg:order-3 mb-8 lg:mb-0'>
                                <div className='rounded-t-lg first_half p-7 pt-9'>
                                    <div className='text-[20px]'>Premium</div>
                                    <span className='font-semibold text-[18px] relative top-[-50px]'>₹</span>
                                    <span className='font-semibold text-[68px]'>49</span>
                                    <div className='text-[12px]'>Every month</div>
                                    <div className='text-[12px] mt-3'>7 day free trial</div>
                                    <button className="mt-4 bg-black text-white font-bold text-[20px] py-3 w-full rounded-md transition duration-300 hover:bg-[#4c390a]"
                                        onClick={handleClickOpen}>
                                        Start Free Trial
                                    </button>
                                </div>
                                <div className='rounded-b-lg second_half'>
                                    <div className={`priceCard ${!active?.three && isMobile ? 'priceCardHide' : ''}`}>
                                        <div className='flex mt-4'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>Free profile on Clestrix </span>
                                        </div>
                                        <div className='flex mt-5'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>Search Engine Optimization</span>
                                        </div>
                                        <div className='flex mt-5'>
                                            <span>
                                                <img src="/assets/images/check_icon.png" alt="" />
                                            </span>
                                            <span className='text-[13px] pl-2'>Lifetime free management</span>
                                        </div>
                                    </div>
                                    {isMobile &&
                                        <div onClick={() => togglePriceCard('three', !active.three)} className={`flex justify-center p-2 icon_div ${!active?.three ? 'icon_div' : 'pink_icon_div'}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px] h-[14px]' viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='first_half h-[55px] md:h-[85px] mt-8 md:mt-[85px] pointer-events-none'>
                    <div className="w-full max-w-[1024px] mx-auto px-4">
                        <div className='grid grid-cols-2'>
                            <div className='z-10 mt-[-60px] md:mt-[-100px] flex justify-end lg:justify-start order-2 lg:order-1'>
                                <img className='h-[80px] w-[auto] md:h-[130px] w-[auto]' src="/assets/images/img_4.png" alt="" />
                            </div>
                            <div className='z-10 mt-[-75px] md:mt-[-115px] flex justify-start lg:justify-end order-1 lg:order-2'>
                                <img className='h-[95px] w-[auto] md:h-[130px] w-[auto]' src="/assets/images/img_5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Pricing