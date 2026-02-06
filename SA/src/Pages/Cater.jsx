import React, { useEffect, useState, useRef } from 'react';
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import './cater.css'

const Cater = () => {
  return (
    <div>
      <div className='banner-1'>
        <div className='text-1'>
          <div className='topic-1'>Catering</div>
          <div className='subtopic-1'> Home <GoArrowRight /> Catering</div>
        </div>
      </div>
      <div className='pic'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/10/1.webp' />
            </div>
            <div className='col-lg-5'>
              <h5>Events & Caterers</h5>
              <h3>Crafting Memorable Moments with Exceptional Taste</h3>
              <p>At Street Arabiya, we believe that every event is a unique opportunity to create lasting memories. The expert team that we have assembled is dedicated to ensuring that your event is a success. We ensure your vision is brought to life by combining our exquisite catering services with our attention to detail.</p>
              <button class="border-btn"><span>CONTACT US</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='under'>
        <h3>We Undertake Orders For</h3>
        <div className='pills'>
          <p>Mailangi Nights</p>
          <p>Wedding & Marriage Reception Orders</p>
          <p>College & School Feast</p>
          <p>Private & Corporate Parties</p><br />
        </div>
        <div className='pills-1'>
          <p>Exhibition, Expo & Public Events</p>
          <p>House Warming</p>
          <p>Birthaday Parties</p>
          <p>Business Parties</p>
        </div>
        <button class="border-btn"><span>BOOK US</span></button>
      </div>
      <div className='picture'>
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/1.webp' />
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/2.webp' />
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/3.webp' />
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/4.webp' />
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/5.webp' />
        <img src='https://streetarabiya.com/wp-content/uploads/2024/10/6.webp' />
      </div>
      <div className='ready'>
        <div className='ready-text'>
          <h6>CONTACT US</h6>
          <h3>Ready to start planning your next event?</h3>
          <p>Contact us today to schedule a consultation. Let turn your vision into reality with exceptional event planning and catering services.</p>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="orders">
        <div className="orders-left">
          <div className='orders-title'>MENUS</div>
          <div className='orders-subtitle'>
            We Have Wide Range Of Menu In Veg & Non Veg Starters
          </div>
          <div className='orders-flex'>
            <div className="menu-pill">All Arabian Dishes</div>
            <div className="menu-pill">Shawarma</div>
            <div className="menu-pill">Barbecue</div>
            <div className="menu-pill">Kebab</div>
            <div className="menu-pill">Mandi Rice Chicken</div>
            <div className="menu-pill">Beef</div>
            <div className="menu-pill">Mutton</div>
            <div className="menu-pill">Fish</div>
            <div className="menu-pill">All Types of Biryanis</div>
            <div className="menu-pill">Breads</div>
            <div className="menu-pill">Beeda</div>
            <div className="menu-pill">Ice Cream</div>
            <div className="menu-pill">Mojitos</div>
            <div className="menu-pill">Hot Jalebi</div>
            <div className="menu-pill">Kunafa</div>
            <div className="menu-pill">Chocolate Fountain</div>
            <div className="menu-pill">Desserts</div>
            <div className="menu-pill">Herbal Tea</div>
            <div className="menu-pill">Hot Beverages</div>
            <div className="menu-pill">All Veg Dishes</div>
          </div>
          <button className="border-btn">
            <span>CONTACT US</span>
          </button>
        </div>
        <div className="menu-right">
          <img src="https://streetarabiya.com/wp-content/uploads/2024/10/6.webp" />
        </div>
      </div>
      <div className='test'>
        <div className='test-title'>TESTIMONIALS</div>
        <div className='test-subtitle'>What Our Customer Say?</div>
        <Swiper
          spaceBetween={200}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><p>Hi, I’m Ahamed Shahabath N, the proud founder of Street Arabiya. At Street Arabiya, we are passionate about serving authentic Mediterranean cuisine—from Shawarmas, Alfahams, Mandhis, Arabic Desserts, and Kebabs to a variety of flavorful dishes. What started as a humble food truck has grown into 5+ restaurants and 20+ food trucks across Tamil Nadu and Kerala, serving over 2 lakh loyal customers. For us, food is about trust, and quality and safety are non-negotiable. Our commitment is to deliver top-quality food you can enjoy with confidence. Our vision is to make Street Arabiya a leading global brand for shawarmas and Mediterranean cuisine, adapting flavors to local tastes while staying true to our roots. At Street Arabiya, we’re not just serving food; we’re delivering trust, quality, and an experience you’ll love. Thank you for being part of our
            journey!</p>
            <h5>Ahamed Shahabath N</h5>
          </SwiperSlide>
          <SwiperSlide><p>As the partner of Street Arabiya, my goal is to deliver authentic Arabic cuisine with exceptional hospitality, while aiming to expand globally and share the richness of Arabic culture with the world.” my goal is to deliver authentic Arabic cuisine with exceptional hospitality. Our aim is to make middle and below-middle-class people feel rich through a luxurious dining experience at more affordable prices, ensuring value unmatched by other restaurants, while striving to expand globally and share the richness of Arabic culture with the
            world.</p>
            <h5>Yasar arafath M</h5>
          </SwiperSlide>
          <SwiperSlide><p>Our aim is to redefine dining experiences by combining culinary excellence, innovative hospitality, and sustainability. We strive to create a modern, customer-centric platform where food lovers can explore unique flavors, engage with immersive dining technology, and enjoy exceptional service while contributing to a greener
            future.</p>
            <h5>Jansa Mohammed K</h5>
          </SwiperSlide>
          <SwiperSlide><p>I am M.H. Nizamuddin, father of Ahmad Shahabath. N Along with his two partners—who may not be sons by blood but treat me as a father, and whom I proudly treat as my own— I oversee the backbone of Street Arabiya’s operations. While they focus on growth, new branches, hygiene, cleanliness, and exciting new dishes, I ensure smooth operations by managing purchases, quality, accounts, salaries, and vendor payments with zero delays or credits. I take care of our staff—handling their health, leaves, ticketing, advances, and financial needs—especially those who have left their hometowns and states to work with us. In my view, a business stands strong with two pillars: our staff and our vendors. If we care for both, our customers’ happiness will naturally
            follow.</p>
            <h5>M.H. Nizamuddin</h5>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Cater