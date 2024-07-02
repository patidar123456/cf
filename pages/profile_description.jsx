import React from 'react'
import Layout from '../src/layouts/Layout'

const profile_description = () => {
    return (
        <>
            <Layout>
                <div className="max-w-[1024px] mx-auto px-4 my-20">
                    <div className='mb-8'>
                        <div className='underline text-[25px] font-bold text-center'>Person Name Biography, Age, <br /> Boyfriend, Husband And Family</div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                        <div className='flex justify-center md:justify-end'>
                            <img src="/assets/images/person.jpeg" alt="" className='w-full max-w-[370px] object-cover' />
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <div className='w-full max-w-[370px] flex flex-col bg-[#FFF0F9]'>
                                <div className='first_div flex justify-center py-1 rounded-lg'>
                                    <span className='text-white'>Personal Information</span>
                                </div>
                                <div className='second_div p-3'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Name</span>
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Profession</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Age</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Maritial Status</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Nationality</span>
                                        <span className='text-[15px]'>Hinduism</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='font-bold text-[15px]'>Hometown</span>
                                        <span className='text-[15px]'>Coimbatore, Tamil Nadu</span>
                                    </div>
                                </div>
                                <div className='third_div flex justify-center mt-auto py-2'>
                                    <img className='mr-3' width="29" height="29" src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                    <img className='mr-3' width="29" height="29" src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" />
                                    <img className='mr-3' width="29" height="29" src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" />
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
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Nick names</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Height</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Weight</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Body Measurements</span>
                                        <span className='text-[15px]'>Hinduism</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Eye color</span>
                                        <span className='text-[15px]'>Coimbatore, Tamil Nadu</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hair color</span>
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>DOB</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Zodiac Sign</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Food habit</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Present address</span>
                                        <span className='text-[15px]'>Religion</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Religion</span>
                                        <span className='text-[15px]'>Coimbatore, Tamil Nadu</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Signature</span>
                                        <span className='text-[15px]'>Coimbatore, Tamil Nadu</span>
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
                                            <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>College</span>
                                            <span className='text-[15px]'>Actress, Doctor</span>
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational Status</span>
                                            <span className='text-[15px]'>31 Years</span>
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Educational awards</span>
                                            <span className='text-[15px]'>Unmarried</span>
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
                                            <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                        </div>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Net Worth</span>
                                            <span className='text-[15px]'>Actress, Doctor</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full max-w-[370px] flex flex-col border-2 border-black rounded-md overflow-hidden'>
                                    <div className='first_div flex justify-center py-1 rounded'>
                                        <span className='text-white'>Collections</span>
                                    </div>
                                    <div className='bg-[#FFF9EA] p-3'>
                                        <div className="grid grid-cols-2 mb-3">
                                            <span className='text-[15px]'>Cars</span>
                                            <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                        </div>
                                        <div className="grid grid-cols-2 mb-4">
                                            <span className='text-[15px]'>Watches</span>
                                            <span className='text-[15px]'>Actress, Doctor</span>
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
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>debut/First Business</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Turning point</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>1st Success</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-12">
                                        <span className='text-[15px]'>Awards & Achievements</span>
                                        <span className='text-[15px]'>Unmarried</span>
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
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Actor/Actress</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Musicians</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Singers</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Songs</span>
                                        <span className='text-[15px]'>Hinduism</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Books</span>
                                        <span className='text-[15px]'>Coimbatore, Tamil Nadu</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Hobbies</span>
                                        <span className='text-[15px]'>Sai Pallavi Senthamarai</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Films</span>
                                        <span className='text-[15px]'>Actress, Doctor</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Color</span>
                                        <span className='text-[15px]'>31 Years</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Perfume</span>
                                        <span className='text-[15px]'>Unmarried</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Holiday destinations</span>
                                        <span className='text-[15px]'>Religion</span>
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
                                        <span className='text-[15px]'>Father</span>
                                        <img src="/assets/images/family photo.jpeg" alt="" />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Mother</span>
                                        <img src="/assets/images/family photo.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Siblings/Cousins</span>
                                        <img src="/assets/images/family photo.jpeg" alt="" />
                                    </div>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>husband/Wife/Spouse</span>
                                        <img src="/assets/images/family photo.jpeg" alt="" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-12'>
                                    <div className="grid grid-cols-2 mb-3">
                                        <span className='text-[15px]'>Childrens</span>
                                        <img src="/assets/images/family photo.jpeg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-left'>
                        <div className='flex flex-col mb-5 border-2 border-black rounded-md h-[fit-content] overflow-hidden'>
                            <div className='first_div flex justify-center py-1 rounded'>
                                <span className='text-white'>Refrences</span>
                            </div>
                            <div className='bg-[#FFF9EA] p-3 px-6'>
                                <div className=''>
                                    <div className="grid grid-cols-2 mb-3 gap-12">
                                        <span className='text-[15px]'>Cars</span>
                                        <span className='text-[15px]'>abc</span>
                                    </div>
                                    <div className="grid grid-cols-2 mb-3 gap-12">
                                        <span className='text-[15px]'>Watches</span>
                                        <span className='text-[15px]'>abc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default profile_description