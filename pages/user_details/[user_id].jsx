import React, { useEffect, useState } from 'react'
import Layout from '../../src/layouts/Layout'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryAction } from '../../src/store/category/asyncActions';
import Link from 'next/link';
import ContentSlider from '../../src/components/ContentSlider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Business_details = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const categoryData = useSelector((state) => state?.category?.getCategory);

    const [category, setCategory] = useState(null);
    console.log("category========", category?.details?.references);
    const [loading, setLoading] = useState(false);
    const [showReferences, setShowReferences] = useState(false);

    const toggleReferences = () => {
        setShowReferences(!showReferences);
    };

    useEffect(() => {
        if (categoryData?.loading === false) {
            if (categoryData?.data?.status) {
                setCategory(categoryData?.data?.data);
                categoryData.data = null;
            }
            setLoading(false);
        }
    }, [categoryData]);

    useEffect(() => {
        setLoading(true);
        if (router?.query?.user_id && router?.query?.user_id !== '') {
            dispatch(getCategoryAction({ type: '', userID: router?.query?.user_id }));
        }
    }, [router?.query]);

    const is_social_links = (item) => {
        if ((item?.facebook && item?.facebook.trim() !== '') || (item?.pinterest && item?.pinterest.trim() !== '') || (item?.instagram && item?.instagram.trim() !== '')) {
            return true
        } else {
            return false
        }
    }

    const isPersonalInfo = ((category) => {
        if ((category?.details?.full_Name && category?.details?.full_Name !== '') || (category?.details?.nick_names && category?.details?.nick_names !== '') || (category?.details?.height && category?.details?.height !== '')
            || (category?.details?.weight && category?.details?.weight !== '') || (category?.details?.body_measurements && category?.details?.body_measurements !== '') || (category?.details?.eye_color && category?.details?.eye_color !== '')
            || (category?.details?.hair_color && category?.details?.hair_color !== '') || (category?.details?.dob && category?.details?.dob !== '') || (category?.details?.zodiac_sign && category?.details?.zodiac_sign !== '')
            || (category?.details?.food_habit && category?.details?.food_habit !== '') || (category?.details?.present_address && category?.details?.present_address !== '') || (category?.details?.religion && category?.details?.religion !== '')
            || (category?.details?.signature && category?.details?.signature !== '')) {
            return true
        } else {
            return false
        }
    })

    const isEducation = ((category) => {
        if ((category?.details?.school && category?.details?.school !== '') || (category?.details?.college && category?.details?.college !== '') || (category?.details?.educational_status && category?.details?.educational_status !== '')
            || (category?.details?.educational_awards && category?.details?.educational_awards !== '')
        ) {
            return true
        } else {
            return false
        }
    })

    const isIncome = ((category) => {
        if ((category?.details?.salary && category?.details?.salary !== '') || (category?.details?.net_Worth && category?.details?.net_Worth !== '')) {
            return true
        } else {
            return false
        }
    })

    const isCollections = ((category) => {
        if ((category?.details?.cars && category?.details?.cars !== '') || (category?.details?.watches && category?.details?.watches !== '')) {
            return true
        } else {
            return false
        }
    })

    const isStatistics = ((category) => {
        if ((category?.details?.passion_behind && category?.details?.passion_behind !== '') || (category?.details?.debut_first_business && category?.details?.debut_first_business !== '') || (category?.details?.turning_point && category?.details?.turning_point !== '')
            || (category?.details?.first_Success && category?.details?.first_Success !== '') || (category?.details?.awards_Achievements && category?.details?.awards_Achievements !== '')) {
            return true
        } else {
            return false
        }
    })

    const isFavourites = ((category) => {
        if ((category?.details?.food && category?.details?.food !== '') || (category?.details?.actor_actress && category?.details?.actor_actress !== '') || (category?.details?.musicians && category?.details?.musicians !== '')
            || (category?.details?.singers && category?.details?.singers !== '') || (category?.details?.songs && category?.details?.songs !== '') || (category?.details?.books && category?.details?.books !== '')
            || (category?.details?.hobbies && category?.details?.hobbies !== '') || (category?.details?.films && category?.details?.films !== '') || (category?.details?.color && category?.details?.color !== '')
            || (category?.details?.perfume && category?.details?.perfume !== '') || (category?.details?.holiday_destinations && category?.details?.holiday_destinations !== '')) {
            return true
        } else {
            return false
        }
    })

    const isFamily = ((category) => {
        if ((category?.details?.father && category?.details?.father !== '') || (category?.details?.mother && category?.details?.mother !== '') || (category?.details?.heigsiblingsht && category?.details?.siblings !== '')
            || (category?.details?.spouse && category?.details?.spouse !== '') || (category?.details?.children && category?.details?.children !== '')) {
            return true
        } else {
            return false
        }
    })

    const is_slides = (slides) => {
        if (!slides || !Array.isArray(slides)) {
            return false;
        }

        const filteredSlides = slides.filter(slide => slide.title !== "" || slide.description !== "");

        return filteredSlides.length > 0 ? filteredSlides : false;
    };

    const is_references = (reference) => {
        if (!reference || !Array.isArray(reference)) {
            return false;
        }

        const filterRef = reference.filter(ref => ref !== "");
        return filterRef.length > 0 ? filterRef : false;
    };

    return (
        <>
            <Layout>
                <div className="max-w-[1024px] mx-auto px-4 my-20">
                    <div className='mb-8'>
                        <div className='underline text-[25px] font-bold text-center'>Person Name Biography, Age, <br /> Boyfriend, Husband And Family</div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                        <div className='flex justify-center md:justify-end'>
                            <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.image}`} alt="" className='w-full max-w-[370px] object-cover' />
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col bg-[#FFF0F9]'>
                                <div className='first_div flex justify-center py-1 rounded-lg'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='second_div p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Name</span>
                                        <span className='text-[15px] break-all'>{category?.name}</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Profession</span>
                                        <span className='text-[15px] break-all'>{category?.profession}</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Age</span>
                                        <span className='text-[15px] break-all'>{category?.age}</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Maritial Status</span>
                                        <span className='text-[15px] break-all'>{category?.maritalStatus}</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Nationality</span>
                                        <span className='text-[15px] break-all'>{category?.nationality}</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Hometown</span>
                                        <span className='text-[15px] break-all'>{category?.hometown}</span>
                                    </div>
                                </div>
                                {is_social_links(category) &&
                                    <div className='third_div flex justify-center mt-auto py-2'>
                                        {category?.facebook && category?.facebook.trim() !== '' &&
                                            <Link href={category?.facebook}>
                                                <a target="_blank">
                                                    <img className='mr-3' width="29" height="29" src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                                </a>
                                            </Link>
                                        }
                                        {category?.pinterest && category?.pinterest.trim() !== '' &&
                                            <Link href={category?.pinterest}>
                                                <a target="_blank">
                                                    <img className='mr-3' width="29" height="29" src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" />
                                                </a>
                                            </Link>
                                        }
                                        {category?.instagram && category?.instagram.trim() !== '' &&
                                            <Link href={category?.instagram}>
                                                <a target="_blank">
                                                    <img className='mr-3' width="29" height="29" src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" />
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            {isPersonalInfo(category) &&
                                <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md overflow-hidden h-full'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Personal Information</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3 h-full'>
                                        {category?.details?.full_Name && category?.details?.full_Name !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Full Name</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.full_Name}</span>
                                            </div>
                                        }
                                        {category?.details?.nick_names && category?.details?.nick_names !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Nick names</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.nick_names}</span>
                                            </div>
                                        }
                                        {category?.details?.height && category?.details?.height !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Height</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.height}</span>
                                            </div>
                                        }
                                        {category?.details?.weight && category?.details?.weight !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Weight</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.weight}</span>
                                            </div>
                                        }
                                        {category?.details?.body_measurements && category?.details?.body_measurements !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Body Measurements</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.body_measurements}</span>
                                            </div>
                                        }
                                        {category?.details?.eye_color && category?.details?.eye_color !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Eye color</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.eye_color}</span>
                                            </div>
                                        }
                                        {category?.details?.hair_color && category?.details?.hair_color !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Hair color</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.hair_color}</span>
                                            </div>
                                        }
                                        {category?.details?.dob && category?.details?.dob !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>DOB</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.dob}</span>
                                            </div>
                                        }
                                        {category?.details?.zodiac_sign && category?.details?.zodiac_sign !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Zodiac Sign</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.zodiac_sign}</span>
                                            </div>
                                        }
                                        {category?.details?.food_habit && category?.details?.food_habit !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Food habit</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.food_habit}</span>
                                            </div>
                                        }
                                        {category?.details?.present_address && category?.details?.present_address !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Present address</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.present_address}</span>
                                            </div>
                                        }
                                        {category?.details?.religion && category?.details?.religion !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Religion</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.religion}</span>
                                            </div>
                                        }
                                        {category?.details?.signature && category?.details?.signature !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Signature</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.signature}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px]'>
                                {isEducation(category) &&
                                    <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                        <div className='first_div flex justify-center py-1 rounded'>
                                            <span className='text-white'>Education</span>
                                        </div>
                                        <div className='bg-[#FFF9EA] p-3'>
                                            {category?.details?.school && category?.details?.school !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>School</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.school}</span>
                                                </div>
                                            }
                                            {category?.details?.college && category?.details?.college !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>College</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.college}</span>
                                                </div>
                                            }
                                            {category?.details?.educational_status && category?.details?.educational_status !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>Educational Status</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.educational_status}</span>
                                                </div>
                                            }
                                            {category?.details?.educational_awards && category?.details?.educational_awards !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>Educational awards</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.educational_awards}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }

                                {isIncome(category) &&
                                    <div className='w-full max-w-[370px] flex flex-col mb-6 border-2 border-black rounded-md overflow-hidden'>
                                        <div className='first_div flex justify-center py-1 rounded'>
                                            <span className='text-white'>Total Income</span>
                                        </div>
                                        <div className='bg-[#FFF9EA] p-3'>
                                            {category?.details?.salary && category?.details?.salary !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>Salary</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.salary}</span>
                                                </div>
                                            }
                                            {category?.details?.net_Worth && category?.details?.net_Worth !== '' &&
                                                <div className="grid grid-cols-2 mb-3">
                                                    <span className='text-[15px]'>Net Worth</span>
                                                    <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.net_Worth}</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }

                                {isCollections(category) &&
                                    <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md overflow-hidden'>
                                        <div className='first_div flex justify-center py-1 rounded'>
                                            <span className='text-white'>Collections</span>
                                        </div>
                                        <div className='bg-[#FFF9EA] p-3'>
                                            {category?.details?.cars && category?.details?.cars !== '' &&
                                                <div className="grid grid-cols-2 mb-4">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Cars</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.cars_name}</div>
                                                    </div>
                                                    {/* <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.cars}</span> */}
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.cars}`} alt="" />
                                                </div>
                                            }
                                            {category?.details?.watches && category?.details?.watches !== '' &&
                                                <div className="grid grid-cols-2 mb-4">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Watches</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.watches_name}</div>
                                                    </div>
                                                    {/* <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.watches}</span> */}
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.watches}`} alt="" />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-6">
                        <div className='flex justify-center md:justify-end'>
                            {isStatistics(category) &&
                                <div className='w-full max-w-[370px] flex flex-col mb-5 border-2 border-black rounded-md h-full overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Career Statistics</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3 h-full'>
                                        {category?.details?.passion_behind && category?.details?.passion_behind !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Passion behind</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.passion_behind}</span>
                                            </div>
                                        }
                                        {category?.details?.debut_first_business && category?.details?.debut_first_business !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>debut/First Business</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.debut_first_business}</span>
                                            </div>
                                        }
                                        {category?.details?.turning_point && category?.details?.turning_point !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Turning point</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.turning_point}</span>
                                            </div>
                                        }
                                        {category?.details?.first_Success && category?.details?.first_Success !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>1st Success</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.first_Success}</span>
                                            </div>
                                        }
                                        {category?.details?.awards_Achievements && category?.details?.awards_Achievements !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Awards & Achievements</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.awards_Achievements}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            {isFavourites(category) &&
                                <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md h-full overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Favourites</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3 h-full'>
                                        {category?.details?.food && category?.details?.food !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Food</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.food}</span>
                                            </div>
                                        }
                                        {category?.details?.actor_actress && category?.details?.actor_actress !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Actor/Actress</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.actor_actress}</span>
                                            </div>
                                        }
                                        {category?.details?.musicians && category?.details?.musicians !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Musicians</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.musicians}</span>
                                            </div>
                                        }
                                        {category?.details?.singers && category?.details?.singers !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Singers</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.singers}</span>
                                            </div>
                                        }
                                        {category?.details?.songs && category?.details?.songs !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Songs</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.songs}</span>
                                            </div>
                                        }
                                        {category?.details?.books && category?.details?.books !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Books</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.books}</span>
                                            </div>
                                        }
                                        {category?.details?.hobbies && category?.details?.hobbies !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Hobbies</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.hobbies}</span>
                                            </div>
                                        }
                                        {category?.details?.films && category?.details?.films !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Films</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.films}</span>
                                            </div>
                                        }
                                        {category?.details?.color && category?.details?.color !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Color</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.color}</span>
                                            </div>
                                        }
                                        {category?.details?.perfume && category?.details?.perfume !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Perfume</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.perfume}</span>
                                            </div>
                                        }
                                        {category?.details?.holiday_destinations && category?.details?.holiday_destinations !== '' &&
                                            <div className="grid grid-cols-2 mb-3">
                                                <span className='text-[15px]'>Holiday destinations</span>
                                                <span className='text-[15px] break-all whitespace-pre-wrap'>{category?.details?.holiday_destinations}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-10">
                        <div className='flex justify-center md:justify-center'>
                            {isFamily(category) &&
                                <div className='w-full max-w-[770px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Family</span>
                                    </div>
                                    <div className='grid grid-cols-1 bg-[#FFF9EA] p-3 pb-10 px-6 gap-5 md:gap-0'>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-12 mb-0 md:mb-5'>
                                            {category?.details?.father && category?.details?.father !== '' &&
                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Father</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.father_name}</div>
                                                    </div>
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.father}`} alt="" />
                                                </div>
                                            }
                                            {category?.details?.mother && category?.details?.mother !== '' &&
                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Mother</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.mother_name}</div>
                                                    </div>
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.mother}`} alt="" />
                                                </div>
                                            }
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-12 mb-0 md:mb-5'>
                                            {category?.details?.siblings && category?.details?.siblings !== '' &&
                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Siblings/Cousins</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.siblings_name}</div>
                                                    </div>
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.siblings}`} alt="" />
                                                </div>
                                            }
                                            {category?.details?.spouse && category?.details?.spouse !== '' &&
                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>husband/Wife/Spouse</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.spouse_name}</div>
                                                    </div>
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.spouse}`} alt="" />
                                                </div>
                                            }
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-12'>
                                            {category?.details?.children && category?.details?.children !== '' &&
                                                <div className="grid grid-cols-2">
                                                    <div>
                                                        <div className='text-[15px] mt-[20px] font-bold text-center'>Childrens</div>
                                                        <div className='text-[15px] text-center mt-[25px] break-all whitespace-pre-wrap'>{category?.details?.children_name}</div>
                                                    </div>
                                                    <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${category?.details?.children}`} alt="" />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {is_slides(category?.details?.slides) &&
                    <div className="my-10">
                        <ContentSlider data={is_slides(category?.details?.slides)} />
                    </div>
                }

                {is_references(category?.details?.references) &&
                    <div className="max-w-[1024px] mx-auto px-4 mt-10 mb-5">
                        <div className="grid grid-cols-1">
                            <div className='flex justify-left'>
                                <div className='w-full max-w-[385px] flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                                    <div className='first_div flex justify-between items-center py-1 rounded bg-gray-800'>
                                        <span className='text-white pl-2'>References</span>
                                        <button onClick={toggleReferences} className='text-white px-2'>+</button>
                                    </div>
                                    {showReferences && (
                                        <div className='bg-[#FFF9EA] p-3 px-6'>
                                            <ul className='list-disc pl-5'>
                                                {category?.details?.references?.map((reference, index) => (
                                                    <a href={reference}>
                                                        <li key={index} className='text-[15px] mb-3'>
                                                            {reference}
                                                        </li>
                                                    </a>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Layout>
        </>
    )
}

export default Business_details