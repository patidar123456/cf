import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { getSliderAction } from '../store/category/asyncActions';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
};

function ContentSlider({ data }) {
    const dispatch = useDispatch();
    const [slides, setSlides] = useState(null);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setSlides(data);
        }
    }, [data]);

    return (
        <Slider {...settings} className='slider_class'>
            {slides && slides.map((item, index) => (
                <div key={index}>
                    <div className='bg_img flex justify-center items-center'>
                        <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${item?.bg_img}`} alt="" />
                        <div className='bg-white p-[40px] w-full max-w-[340px] md:max-w-[770px] rounded'>
                            <div className='flex'>
                                <div className='text-[26px] mr-4 relative bottom-[7px]'>•</div>
                                {item.title && <div className='text-[18px] font-[400] mb-3 break-all'>{item.title}</div>}
                            </div>
                            <div className='flex'>
                                <div className='text-[26px] mr-4 relative bottom-[7px]'>•</div>
                                {item.description && <div className='text-[18px] font-[400] break-all'>{item.description}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default ContentSlider;
