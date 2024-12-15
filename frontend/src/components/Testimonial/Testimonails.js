import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonails = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        swipeToSlide:true,
        slidesToShow:3,
        reponsive:[
            {
                breakpoint:992,
                setting:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                setting:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]
    }
        
  return (
    <Slider {...settings}>
        <div className='testimonails py-4 px-3'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2'  alt=''/>
                <div>
                    <h6 className='mb-0 mt-3'>
                        kathan goda
                    </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonails py-4 px-3'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2'  alt=''/>
                <div>
                    <h6 className='mb-0 mt-3'>
                        kathan goda
                    </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonails py-4 px-3'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2'  alt=''/>
                <div>
                    <h6 className='mb-0 mt-3'>
                        kathan goda
                    </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonails py-4 px-3'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2'  alt=''/>
                <div>
                    <h6 className='mb-0 mt-3'>
                        kathan goda
                    </h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonails