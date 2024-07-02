import React, { useEffect, useState } from "react";
import Layout from "../../src/layouts/Layout";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import { useAuth } from "../../src/context/AuthContext";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const tags = [
  'Credit Cards Millenia',
  'Best Credit Cards',
  'Best Credit Cards Millenia',
  'Apply for Credit Card',
  'Grab This Card',
  'Best Credit Card',
  'First Credit Cards',
  'Credit Card for First Time User',
  'Bank Credit Card',
];

const faqs = [
  'What is Best CC Offers?',
  'What are the benefits of using Best Credit Card Offers?',
  'What is Best Credit Card Offers Cashback?',
  'What is Best CC Offer Rewards?'
];

const categories = [1, 2];
const items = [1, 2, 3, 4, 5, 6, 7, 8];
const hasTags = ['#offers', '#bestoffers', '#discounts', '#wednesdayoffer', '#deals', '#limitedtimeoffer', '#specialoffer', '#salonoffersforladies', '#salonoffers', '#beautyoffer', '#beautyservices', '#ksdoffers', '#exclusivesale', '#discount', '#luxury247affairs', '#basicmakeup', '#bestdigitalmarketinginmumbai', '#admissionopen', '#savings', '#homedecor', '#newyears', '#home', '#upto75off', '#it', '#architecture', '#salon', '#sale', '#readytowear', '#diptisalon', '#globalcolor', '#mailorder', '#brands', '#getitnow', '#supportlocalartists', '#organicdigitalmarketing', '#special'];


const ProviderOffers = () => {

  const { accessToken } = useAuth();

  const router = useRouter();
  const dispatch = useDispatch();

  const [offerList, setOfferList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState(null);
  const [title, setTitle] = useState('');
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openShare, setOpenShare] = React.useState(false);
  const [link, setLink] = React.useState(null);

  const offersData = useSelector((state) => state?.offer?.getByPart);
  const wishlistAddRemoveData = useSelector((state) => state?.wishlist?.addOrRemove);
  const wishlistData = useSelector((state) => state?.wishlist?.getAll);

  useEffect(() => {
    setLoading(true);
    if (router?.query?.url_query && router?.query?.url_query !== '') {
      setTitle(router?.query?.url_query.replace(/[^-\w\s]/g, '').replace(/-+/g, ' ').toLowerCase().trim().replace(/\s+/g, ' '));
      setLoading(true);
      // dispatch(getOfferByPartAction({
      //   type: 'product',
      //   search_query: router?.query?.url_query
      // }));
    }
  }, [router?.query]);

  useEffect(() => {
    if (offersData?.data?.status && Array.isArray(offersData?.data?.data)) {
      setOfferList(offersData?.data?.data);
      setLoading(false);
      offersData.data = null;
    } else if (offersData?.data?.status === false && offersData?.data?.response_code === 201) {
      setTitle('404');
      offersData.data = null;
    }
  }, [offersData]);

  useEffect(() => {
    if (wishlistAddRemoveData?.data?.status && accessToken) {
      // dispatch(getAllWishlistAction());
    }
  }, [wishlistAddRemoveData]);

  useEffect(() => {
    if (wishlistData?.data?.status && Array.isArray(wishlistData?.data?.data)) {
      setWishlist(wishlistData?.data?.data);
      wishlistData.data = null;
    }
  }, [wishlistData]);

  const addOrRemoveWishlist = (offerID) => {
    if (accessToken) {
      // dispatch(addOrRemoveWishlistAction({ offer_id: offerID }));
    } else {
      setOpenLogin(true);
    }
  }

  useEffect(() => {
    if (accessToken) {
      // dispatch(getAllWishlistAction());
    } else {
      setWishlist(null);
    }
  }, [accessToken]);

  const shareModal = (str) => {
    setLink(str);
    setOpenShare(true);
  }

  // if (title === '404') {
  //   return (
  //     <Custom404 />
  //   );
  // }

  return (
    <Layout>
      <div class="container home-offers-container-one mt-35">
        <div class="row">
          {loading &&
            <div className="w-100 d-flex justify-content-center my-5">
              <CircularProgress />
            </div>
          }
          {!loading && offerList && offerList?.map((offer) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-2" key={offer?._id}>
                <div
                  className="listing-item listing-item-one listing-grid-one mb-20 wow fadeInUp"
                  dta-wow-delay="10ms"
                >
                  <div className="listing-thumbnail">
                    {offer?.thumb_image ? (
                      <img
                        src={offer?.thumb_image}
                        alt="Listing Image"
                      />
                    ) : (
                      <div className="non_thumb_offer">
                        {offer?.sub_title}
                      </div>
                    )}
                    <div className="listing-thumbnail-overlay">
                      <div className="d-flex px-2 pt-2 w-100">
                        <div className="thumb-btn" onClick={() => { shareModal(`${process.env.NEXT_PUBLIC_APP_BASE_URL}details/${offer?.slug}`) }}>
                          Share this offer <i className="ti-share"></i>
                        </div>
                        {wishlist?.includes(offer?._id) ?
                          <div className="thumb-btn wish ml-auto" onClick={() => addOrRemoveWishlist(offer?._id)}>
                            Wishlisted <i className="ti-heart"></i>
                          </div>
                          :
                          <div className="thumb-btn ml-auto" onClick={() => addOrRemoveWishlist(offer?._id)}>
                            Wishlist <i className="ti-heart"></i>
                          </div>
                        }
                      </div>
                      <div className="on-off-tag">
                        {offer?.applicable && offer?.applicable?.map((i) => {
                          return i;
                        }).join(' / ')}
                      </div>
                    </div>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                      <div className="meta-icon-title d-flex align-items-center">
                        <div className="title">
                          <Link href={`/instrument/${offer?.instrument_slug}`}>
                            <a><h6>{offer?.instrument_name}</h6></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listing-content">
                    <h3 className="title px-2">
                      <Link href={`/details/${offer?.slug}`}>
                        <a>{offer?.title.length > 75 ? offer?.title.slice(0, 75) + '...' : offer?.title}</a>
                      </Link>
                    </h3>
                    <span className="price mb-1 mt-1 px-2">
                      {offer?.brands?.map((brand) => {
                        return brand.name;
                      }).join(', ')}
                      {Array.isArray(offer?.brands) && offer?.brands?.length > 0 && ' Offer'}
                    </span>
                    <div className="product-prt">
                      {Array.isArray(offer?.products_covered_in) && offer?.products_covered_in?.length > 0 &&
                        <>
                          <span className="price color_black mb-1 mt-3 pt-1">Products / Services Covered in this Offer</span>
                          <hr />
                        </>
                      }
                      {offer?.products_covered_in?.map((product, index, array) => (
                        <span key={product?.name} className="phone-meta pb-1 mr-1">
                          {`${product?.name}${index !== array.length - 1 ? ',' : ''}`}
                        </span>
                      ))}
                    </div>
                    <div className="listing-meta pt-2 px-2">
                      <ul>
                        <li>
                          <span>
                            <a href="#" className="listing-meta-btn-f">Get This Card</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            <Link href={`/details/${offer?.slug}`}>
                              <a className="listing-meta-btn-s">View Details</a>
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {!loading && offerList && Array.isArray(offerList) && offerList?.length < 1 &&
            <div className="w-100 my-5">
              <div className="w-100 d-flex justify-content-center mb-2">
                <i className="ti-search" style={{ fontSize: '35px', fontWeight: 'bold' }}></i>
              </div>
              <div className="w-100 d-flex justify-content-center">
                <h4>No result found</h4>
              </div>
            </div>
          }
        </div>
      </div>

      <div className="container category-container">
        <hr />
        <div className="related-searches">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <h5 className="mt-10 mb-10">Related Searches</h5>
            </div>
            <div className="col-lg-10 col-md-12">
              <div className="related-searches-tags">
                {tags && tags.map((tag, index) => {
                  return (
                    <div className="tag" key={index}>
                      <span>{tag}</span>
                      <i className="ti-close"></i>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="text-center mb-35 mt-35">Frequently Asked Questions</h3>
        <div className="row px-3 d-flex justify-content-center mb-25">
          <div className="faq-list w-100">
            {faqs && faqs.map((faq, index) => {
              return (
                <Accordion className="custom-faq-list" key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="content-0"
                    id="header-0"
                  >
                    <Typography>{faq}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </div>
      </div>
      <h3 className="text-center mb-35 mt-35">Popular Categories</h3>
      {/* <!--====== Start Category Section ======--> */}
      <section className="category-area w-100 mb-45">
        <div className="category-wrapper-one categories wow fadeInDown">
          <div className="container">
            {categories && categories.map((cat, index) => {
              return (
                <div className="row no-gutters" key={index}>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-government"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Museums</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-serving-dish"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Restaurant</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-game-controller"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Game Field</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-suitcase"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Job & Feed</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-gift-box"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Party Center</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                      <div className="info d-flex align-items-center justify-content-center">
                        <div className="icon">
                          <i className="flaticon-dumbbell"></i>
                        </div>
                        <div className="ml-3">
                          <h6>Fitness Zone</h6>
                        </div>
                      </div>
                      <Link href="/">
                        <a className="category-btn">
                          <i className="ti-arrow-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!--====== End Category Section ======--> */}
      <div className="container category-container">
        <div className="row px-3 d-flex justify-content-center mb-45">
          <div className="has-tags">
            <b>Popular Brands : </b>
            {hasTags && hasTags.map((tag, index) => {
              return (
                <span key={index}>{tag}</span>
              )
            })}
          </div>
        </div>
        <div className="row px-3 d-flex justify-content-center mb-45">
          <div className="about-best-cc">
            <h5 className="mb-1">About Best CC Offers</h5>
            <p className="pb-10">Best CC Offers is a platform providing exclusive cashless payment deals. Discover the finest payment offers associated with your debit card, credit card, internet banking, UPI, or any other cashless payment method. Customers using &quot;Best Credit Cards Offers&quot; platform can easily locate deals that align with their preferred payment options, availing benefits such as discounts, cashback, and reward points.</p>
            <p>Whether you are shopping, traveling, dining, recharging, or making any other payments, we are here to find the best offers for you at <a href='https://bestccoffers.com' style={{ color: '#ff344f' }}>www.bestccoffers.com</a> website.</p>
          </div>
        </div>
      </div>

    </Layout>
  );
};
export default ProviderOffers;
