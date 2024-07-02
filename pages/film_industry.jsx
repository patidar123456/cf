import React, { useEffect, useState } from 'react'
import Layout from '../src/layouts/Layout'
import { Link, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAction } from '../src/store/category/asyncActions';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const Film_Industry = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState(null);

  const categoryData = useSelector((state) => state?.category?.allCategory);

  useEffect(() => {
    dispatch(getAllCategoryAction({ type: 'Film_Industry', page, size }));
  }, [page]);

  useEffect(() => {
    if (categoryData?.loading === false) {
      if (categoryData?.data?.status && Array.isArray(categoryData?.data?.data?.records)) {
        setCategories(categoryData?.data?.data?.records);
        setTotal(categoryData?.data?.data?.totalCount);
        categoryData.data = null;
      }
      setLoading(false);
    }
  }, [categoryData]);

  const is_social_links = (item) => {
    if ((item?.facebook && item?.facebook.trim() !== '') || (item?.pinterest && item?.pinterest.trim() !== '') || (item?.instagram && item?.instagram.trim() !== '')) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <Layout>
        <div className="max-w-[1024px] mx-auto px-3 mt-7">
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Film Industry</Typography>
            </Breadcrumbs>
          </div>
          <div className='text-[50px] explore_your'>Explore Your Fantacies</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories && categories.map((item, index) => (
              <>
                <div className='flex justify-center items-center my-2 md:my-4 mx-1 '>
                  <div className='overflow-hidden w-full person_card'>
                    <Link href={`/${item?.user_name}`}>
                      <div className='person_card_img'>
                        <img src={`${process.env.NEXT_PUBLIC_APP_API_URL}profile-photo/original/${item?.image}`} alt="" />
                      </div>
                    </Link>
                    <div className='p-3 mb-2'>
                      <Typography variant='h6' className='PerNm mb-2'>
                        {item?.name}
                      </Typography>
                      {/* <Typography variant='subtitle2'>
                        ₹85.00
                      </Typography> */}
                    </div>
                    {is_social_links(item) && <hr className="border-t border-gray-300" />}
                    <div className='flex justify-center items-center h-[60px]'>
                      {item?.facebook && item?.facebook.trim() !== '' &&
                        <Link href={item?.facebook}>
                          <a target="_blank">
                            <img className='mr-3' width="29" height="29" src="/assets/images/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                          </a>
                        </Link>
                      }
                      {item?.pinterest && item?.pinterest.trim() !== '' &&
                        <Link href={item?.pinterest}>
                          <a target="_blank">
                            <img className='mr-3' width="29" height="29" src="/assets/images/11062b_9c81fe0a816041068cc7d995e7a01f90~mv2.webp" alt="" />
                          </a>
                        </Link>
                      }
                      {item?.instagram && item?.instagram.trim() !== '' &&
                        <Link href={item?.instagram}>
                          <a target="_blank">
                            <img className='mr-3' width="29" height="29" src="/assets/images/8d6893330740455c96d218258a458aa4.webp" alt="" />
                          </a>
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Stack spacing={2} className='CustomPagination flex justify-center items-center my-4'>
            <Pagination
              count={Math.ceil(total / size)}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </div>
      </Layout>
    </>
  )
}

export default Film_Industry