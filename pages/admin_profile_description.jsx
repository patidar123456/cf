'use client';
import React, { useEffect, useState } from 'react';
import Layout from '../src/layouts/Layout'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryAction, createSliderAction } from '../src/store/category/asyncActions';
import { Button, TextField } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
};

const Admin_profile_description = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('Business');

    const addCategoryData = useSelector((state) => state?.category?.addCategory);

    useEffect(() => {
        if (addCategoryData?.loading === false) {
            if (addCategoryData?.data?.status) {
                router.push('/');
                addCategoryData.data = null;
            }
            setLoading(false);
        }
    }, [addCategoryData]);

    const [data, setData] = useState({
        image: null,
        user_name: '',
        name: '',
        profession: '',
        age: '',
        maritalStatus: '',
        nationality: '',
        hometown: '',
        facebook: '',
        pinterest: '',
        instagram: ''
    });

    const [formData, setFormData] = useState({
        full_Name: '',
        nick_names: '',
        height: '',
        weight: '',
        body_measurements: '',
        eye_color: '',
        hair_color: '',
        dob: '',
        zodiac_sign: '',
        food_habit: '',
        present_address: '',
        religion: '',
        signature: '',
        school: '',
        college: '',
        educational_status: '',
        educational_awards: '',
        salary: '',
        net_Worth: '',
        cars: null,
        cars_name: '',
        watches: null,
        watches_name: '',
        passion_behind: '',
        debut_first_business: '',
        turning_point: '',
        first_Success: '',
        awards_Achievements: '',
        food: '',
        actor_actress: '',
        musicians: '',
        singers: '',
        songs: '',
        books: '',
        hobbies: '',
        films: '',
        color: '',
        perfume: '',
        holiday_destinations: '',
        father: null,
        father_name: '',
        mother_name: '',
        siblings_name: '',
        spouse_name: '',
        children_name: '',
        mother: null,
        siblings: null,
        spouse: null,
        children: null,
        slides: [{ description: '', title: '', bg_img: null }],
        references: []
    });
    console.log("formData", formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleReferenceInputChange = (index, event) => {
        const updatedReferences = [...formData.references];
        updatedReferences[index] = event.target.value;
        setFormData({
            ...formData,
            references: updatedReferences
        });
    };

    const addInputField = () => {
        setFormData({
            ...formData,
            references: [...formData.references, '']
        });
    };

    const handleSliderInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSlides = [...formData.slides];
        updatedSlides[index][name] = value;
        setFormData({
            ...formData,
            slides: updatedSlides
        });
    };

    const addSlide = () => {
        setFormData({
            ...formData,
            slides: [...formData.slides, { description: '', title: '' }]
        });
    };

    const removeSlide = (index) => {
        const updatedSlides = formData.slides.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            slides: updatedSlides
        });
    };

    // const createSlider = () => {
    //     dispatch(createSliderAction({ slides: sliderData?.slides }));
    // }

    const createCategory = () => {
        dispatch(addCategoryAction({ type, data, formData }));
    }

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageLoading = (imageData, setDataVel) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview({ ...imagePreview, [imageData.key]: reader.result });
            setDataVel(prevData => ({
                ...prevData,
                [imageData.key]: reader.result
            }));
        };
        if (typeof imageData.value === 'string') {
            setImagePreview({ ...imagePreview, [imageData.key]: imageData.value });
        } else {
            reader.readAsDataURL(imageData.value);
        }
    };

    useEffect(() => {
        if (data?.image !== '' && data?.image !== 'remove' && data?.image !== null) {
            handleImageLoading({ key: 'image', value: data?.image }, setData);
        }
        if (formData?.father !== '' && formData?.father !== 'remove' && formData?.father !== null) {
            handleImageLoading({ key: 'father', value: formData?.father }, setFormData);
        }
        if (formData?.mother !== '' && formData?.mother !== 'remove' && formData?.mother !== null) {
            handleImageLoading({ key: 'mother', value: formData?.mother }, setFormData);
        }
        if (formData?.siblings !== '' && formData?.siblings !== 'remove' && formData?.siblings !== null) {
            handleImageLoading({ key: 'siblings', value: formData?.siblings }, setFormData);
        }
        if (formData?.spouse !== '' && formData?.spouse !== 'remove' && formData?.spouse !== null) {
            handleImageLoading({ key: 'spouse', value: formData?.spouse }, setFormData);
        }
        if (formData?.children !== '' && formData?.children !== 'remove' && formData?.children !== null) {
            handleImageLoading({ key: 'children', value: formData?.children }, setFormData);
        }
        if (formData?.cars !== '' && formData?.cars !== 'remove' && formData?.cars !== null) {
            handleImageLoading({ key: 'cars', value: formData?.cars }, setFormData);
        }
        if (formData?.watches !== '' && formData?.watches !== 'remove' && formData?.watches !== null) {
            handleImageLoading({ key: 'watches', value: formData?.watches }, setFormData);
        }
    }, [data?.image, formData?.father, formData?.mother, formData?.siblings, formData?.spouse, formData?.children, formData?.cars, formData?.watches]);

    const removeImg = (setDataVel, key) => {
        setDataVel(prevData => ({
            ...prevData,
            [key]: 'remove'
        }));
        setImagePreview({ ...imagePreview, [key]: null });
    };

    const sliderFileToBase64 = (file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            handleSliderInputChange({ target: { name: 'bg_img', value: reader.result } }, index);
        };
        reader.onerror = (error) => {
            console.error('Error converting file to Base64:', error);
            // callback(null, error);
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <Layout>
                <div className="max-w-[1024px] mx-auto px-4 my-20">
                    <div className='mb-8'>
                        <div className='underline text-[25px] font-bold text-center'>Person Name Biography, Age, <br /> Boyfriend, Husband And Family</div>
                    </div>
                    <div className='flex justify-center mb-4'>
                        <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Business">Business</option>
                            <option value="Film_Industry">Film Industry</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                        <div className='flex justify-center md:justify-end'>
                            {!imagePreview?.image ?
                                <div className='fileDragArea'>
                                    <input type="file" accept="image/*" onChange={(e) => setData({
                                        ...data,
                                        image: e?.target?.files[0]
                                    })} />
                                    <div className='iconDiv'><ImageIcon sx={{ fontSize: '45px' }} /></div>
                                    <div className='fileupTxt'>Drag & Drop to upload image</div>
                                </div>
                                :
                                <div className='fileDragArea'>
                                    <div className='imgPrevOuter'>
                                        <img src={imagePreview?.image} alt="Image Preview" />
                                        <div className='imgRemove' onClick={() => removeImg(setData, 'image')}>
                                            <CloseIcon />
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <img src="/assets/images/person.jpeg" alt="" className='w-full max-w-[370px] object-cover' /> */}
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col bg-[#FFF0F9]'>
                                <div className='first_div flex justify-center py-1 rounded-lg'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='second_div p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className="font-bold text-[15px]">User Name</span>
                                        <input type="text" name="user_name" value={data.user_name} onChange={handleChange} className="text-[15px] border border-black border border-black" />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className="font-bold text-[15px]">Name</span>
                                        <input type="text" name="name" value={data.name} onChange={handleChange} className="text-[15px] border border-black border border-black" />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Profession</span>
                                        <input type="text" name="profession" value={data.profession} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Age</span>
                                        <input type="text" name="age" value={data.age} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Maritial Status</span>
                                        <input type="text" name="maritalStatus" value={data.maritalStatus} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Nationality</span>
                                        <input type="text" name="nationality" value={data.nationality} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Hometown</span>
                                        <input type="text" name="hometown" value={data.hometown} onChange={handleChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                                <div className='third_div mt-auto py-2 px-3'>
                                    <div className='flex mb-1'>
                                        <img className='mr-3 min-w-[25px]' width="15" height="15" src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                        <input type="text" name="facebook" value={data.facebook} onChange={handleChange} className='text-[15px] border border-black w-full' />
                                    </div>
                                    <div className='flex mb-1'>
                                        <img className='mr-3 min-w-[25px]' width="15" height="15" src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" />
                                        <input type="text" name="pinterest" value={data.pinterest} onChange={handleChange} className='text-[15px] border border-black w-full' />
                                    </div>
                                    <div className='flex mb-1'>
                                        <img className='mr-3 min-w-[25px]' width="15" height="15" src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" />
                                        <input type="text" name="instagram" value={data.instagram} onChange={handleChange} className='text-[15px] border border-black w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Full Name</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="full_Name" value={formData.full_Name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Nick names</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="nick_names" value={formData.nick_names} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Height</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="height" value={formData.height} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Weight</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="weight" value={formData.weight} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Body Measurements</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="body_measurements" value={formData.body_measurements} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Eye color</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="eye_color" value={formData.eye_color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hair color</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="hair_color" value={formData.hair_color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>DOB</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="dob" value={formData.dob} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Zodiac Sign</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="zodiac_sign" value={formData.zodiac_sign} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Food habit</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="food_habit" value={formData.food_habit} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Present address</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="present_address" value={formData.present_address} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Religion</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="religion" value={formData.religion} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Signature</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="signature" value={formData.signature} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div>
                                <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Education</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>School</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="school" value={formData.school} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>College</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="college" value={formData.college} onChange={handleInputChange} className='text-[15px] border border-black' />
                                            {/* <TextField
                                                className="mt-1 w-full border border-black focus:outline-none bg-white placeholder-black"
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={1}
                                                value={formData.college}
                                                name="college"
                                                onChange={handleInputChange}
                                            /> */}
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational Status</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="educational_status" value={formData.educational_status} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational awards</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="educational_awards" value={formData.educational_awards} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Total Income</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Salary</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="salary" value={formData.salary} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Net Worth</span>
                                            <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="net_Worth" value={formData.net_Worth} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Collections</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <div>
                                                <span className='text-[15px]'>Cars</span>
                                                <input type="text" name="cars_name" value={formData.cars_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                            </div>
                                            {/* <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="cars" value={formData.cars} onChange={handleInputChange} className='text-[15px] border border-black' /> */}
                                            {!imagePreview?.cars ?
                                                <div className='fileDragArea'>
                                                    <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                        ...formData,
                                                        cars: e?.target?.files[0]
                                                    })} />
                                                    <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                                </div>
                                                :
                                                <div className='fileDragArea'>
                                                    <div className='imgPrevOuter'>
                                                        <img src={imagePreview?.cars} alt="Image Preview" />
                                                        <div className='imgRemove' onClick={() => removeImg(setFormData, 'cars')}>
                                                            <CloseIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <div className="grid grid-cols-2 mb-4">
                                            <div>
                                                <span className='text-[15px]'>Watches</span>
                                                <input type="text" name="watches_name" value={formData.watches_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                            </div>
                                            {/* <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="watches" value={formData.watches} onChange={handleInputChange} className='text-[15px] border border-black' /> */}
                                            {!imagePreview?.watches ?
                                                <div className='fileDragArea'>
                                                    <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                        ...formData,
                                                        watches: e?.target?.files[0]
                                                    })} />
                                                    <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                                </div>
                                                :
                                                <div className='fileDragArea'>
                                                    <div className='imgPrevOuter'>
                                                        <img src={imagePreview?.watches} alt="Image Preview" />
                                                        <div className='imgRemove' onClick={() => removeImg(setFormData, 'watches')}>
                                                            <CloseIcon />
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            <div className='w-full max-w-[370px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Career Statistics</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3 pb-10'>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Passion behind</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="passion_behind" value={formData.passion_behind} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>debut/First Business</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="debut_first_business" value={formData.debut_first_business} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Turning point</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="turning_point" value={formData.turning_point} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>1st Success</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="first_Success" value={formData.first_Success} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Awards & Achievements</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="awards_Achievements" value={formData.awards_Achievements} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>Favourites</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Food</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="food" value={formData.food} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Actor/Actress</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="actor_actress" value={formData.actor_actress} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Musicians</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="musicians" value={formData.musicians} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Singers</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="singers" value={formData.singers} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Songs</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="songs" value={formData.songs} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Books</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="books" value={formData.books} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hobbies</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="hobbies" value={formData.hobbies} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Films</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="films" value={formData.films} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Color</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="color" value={formData.color} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Perfume</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="perfume" value={formData.perfume} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Holiday destinations</span>
                                        <TextField id="outlined-multiline-static" multiline rows={1} type="text" name="holiday_destinations" value={formData.holiday_destinations} onChange={handleInputChange} className='text-[15px] border border-black' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center md:justify-center'>
                        <div className='w-full max-w-[770px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                            <div className='first_div flex justify-center py-1 rounded'>
                                <span className='text-white'>Family</span>
                            </div>
                            <div className='bg-[#FFF9EA] p-3 pb-10 px-6'>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <div>
                                            <span className='text-[15px]'>Father</span>
                                            <input type="text" name="father_name" value={formData.father_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        {!imagePreview?.father ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    father: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.father} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'father')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <div>
                                            <span className='text-[15px]'>Mother</span>
                                            <input type="text" name="mother_name" value={formData.mother_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        {!imagePreview?.mother ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    mother: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.mother} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'mother')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <div>
                                            <span className='text-[15px]'>Siblings/Cousins</span>
                                            <input type="text" name="siblings_name" value={formData.siblings_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        {!imagePreview?.siblings ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    siblings: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.siblings} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'siblings')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <div>
                                            <span className='text-[15px]'>husband/Wife/Spouse</span>
                                            <input type="text" name="spouse_name" value={formData.spouse_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        {!imagePreview?.spouse ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    spouse: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.spouse} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'spouse')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <div>
                                            <span className='text-[15px]'>Children</span>
                                            <input type="text" name="children_name" value={formData.children_name} onChange={handleInputChange} className='text-[15px] border border-black' />
                                        </div>
                                        {!imagePreview?.children ?
                                            <div className='fileDragArea'>
                                                <input type="file" accept="image/*" onChange={(e) => setFormData({
                                                    ...formData,
                                                    children: e?.target?.files[0]
                                                })} />
                                                <div className='iconDiv'><ImageIcon sx={{ fontSize: '35px' }} /></div>
                                            </div>
                                            :
                                            <div className='fileDragArea'>
                                                <div className='imgPrevOuter'>
                                                    <img src={imagePreview?.children} alt="Image Preview" />
                                                    <div className='imgRemove' onClick={() => removeImg(setFormData, 'children')}>
                                                        <CloseIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings} className='slider_class'>
                        {formData.slides.map((slide, index) => (
                            <div key={index}>
                                <div className='bg_img flex justify-center items-center'>
                                    <img src={slide?.bg_img} alt="" />
                                    <div className='bg-white p-[40px] w-full max-w-[770px]'>
                                        <div className='flex'>
                                            <button className='ml-auto' onClick={() => removeSlide(index)}>
                                                <CloseIcon />
                                            </button>
                                        </div>
                                        <div>
                                            <textarea
                                                id={`title_${index}`}
                                                value={slide.title}
                                                name="title"
                                                required
                                                onChange={(e) => handleSliderInputChange(e, index)}
                                                rows="2"
                                                className="resize-none mt-1 p-2 w-full border-2 border-black rounded-md focus:outline-none text-black bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                            </textarea>
                                            <textarea
                                                id={`description_${index}`}
                                                value={slide.description}
                                                name="description"
                                                required
                                                onChange={(e) => handleSliderInputChange(e, index)}
                                                rows="2"
                                                className="resize-none mt-1 p-2 w-full border-2 border-black rounded-md focus:outline-none text-black bg-transparent placeholder-black hover:bg-white focus:bg-white">
                                            </textarea>
                                            <div className='text-[15px]'>Add Background Image</div>
                                            <input type="file" accept="image/*" onChange={(e) => sliderFileToBase64(e?.target?.files[0], index)} />
                                        </div>
                                        <div className='flex items-center'>
                                            <Button className='underline' onClick={addSlide}>Add More Description</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="grid grid-cols-1 mt-10">
                        <div className='flex justify-center'>
                            <div className='w-full max-w-[385px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                <div className='first_div flex justify-center py-1 rounded'>
                                    <span className='text-white'>References</span>
                                </div>
                                <div className='bg-[#FFF9EA] p-3 px-6'>
                                    {formData.references.map((reference, index) => (
                                        <div className="grid grid-cols-1 mb-3 gap-12" key={index}>
                                            <input
                                                type="text"
                                                className='text-[15px] border border-black'
                                                name="link"
                                                value={reference}
                                                onChange={(e) => handleReferenceInputChange(index, e)}
                                            />
                                        </div>
                                    ))}
                                    <button
                                        className='mt-2 p-2 border border-black bg-gray-200 rounded'
                                        onClick={addInputField}
                                    >
                                        Add Reference
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 flex justify-center items-center'>
                        <Button onClick={createCategory} className='bg-black text-white px-5'>
                            Create
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Admin_profile_description