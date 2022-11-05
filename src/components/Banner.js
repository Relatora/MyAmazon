// import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImageWrapper from './BannerImageWrapper';



function Banner() {
    const customRenderItem = (item, props) => (
      <item.type {...item.props} {...props} />
    );
  return (
    <div className="relative">
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <BannerImageWrapper key="0" image="gi1.jpg" title="File 0" />
          {/* <img loading="lazy" src="https://links.paparact.com/gi1" alt="" /> */}
          {/* <img loading="lazy" src="/gi1" alt="" /> */}
        </div>

        <div>
          <BannerImageWrapper key="1" image="6ff.jpg" title="File 1" />
          {/* <img loading="lazy" src="https://links.paparact.com/6ff" alt="" /> */}
          <img loading="lazy" src="/6ff" alt="" />
        </div>

        <div>
          <BannerImageWrapper key="2" image="7ma.jpg" title="File 2" />
          {/* <img loading="lazy" src="https://links.paparact.com/7ma" alt="" /> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Banner
