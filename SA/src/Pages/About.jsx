import React, { useEffect, useState, useRef } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import './about.css';

const About = () => {
  return (
    <div>
      <div className='banner'>
        <div className='text'>
          <div className='topic'> About Us</div>
          <div className='sub-topic'> Home <GoArrowRight /> About Us</div>
        </div>
      </div>
      <div className='owner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 photo'>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/12/PARTNERS.webp' alt="owners" />
            </div>
            <div className='col-lg-8'>
              <div className='about'>
                <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
                <h6>ABOUT OUR RESTAURANT</h6>
                <h4>Street Arabiya: Restaurants, Food Trucks, Catering, and Events (Unit of I-Arch)</h4>
                <p>
                  Founded in 2017 by 3 dynamic engineers,
                  <a href="#"> Ahamed Shahabath, Yasar Arafath, Jansa Mohammed</a>.
                  Street Arabiya began its journey with a single food truck.Step by step, we grew into a trusted name in Mediterranean cuisine with 10+ restaurants and 20+ food trucks across Coimbatore, Trichy, Erode, and Palakkad.
                  <br /><br />
                  At Street Arabiya, we bring authentic Arabic dishes with an Indian twist that perfectly suits South Indian tastes.
                  <br /><br />
                  From being the first to introduce shawarma in food trucks, we’ve now created 20+ varieties of Shawarmas, Alfahams, Kebabs, Mandhi and trending Mediterranean foods. Our focus extends beyond food—hygiene, cleanliness, and quality are at the heart of everything we do.
                  <br /><br />
                  With innovation, we’ve also introduced European desserts and popular trend foods to delight our customers. Our ultimate vision is to make Street Arabiya an international brand synonymous with shawarma and Mediterranean cuisine, setting new standards globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='box-title'>
          <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
          <h6>OUR RESTAURANT SERVICES</h6>
          <h2>Our Commitment to Excellence</h2>
        </div>
        <div className='large'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card-body'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/feature_box_2.svg' />
                    <h4>Original Recipes</h4>
                    <h5>We prepare our own masalas with care, blending Indian touches into authentic Mediterranean dishes.</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card-body'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/feature_box_3.svg' />
                    <h4>100% Fresh & Halal</h4>
                    <h5>We use 100% halal-certified meat and the freshest vegetables, ensuring health remains our top priority.</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card-body'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/feature_box_4.svg' />
                    <h4>Hygiene & Cleanliness</h4>
                    <h5>From our centralized kitchens to restaurants and food trucks, we maintain the hygiene and cleanliness standards.</h5>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card-body'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/feature_box_5.svg' />
                    <h4>Warm Welcome & Service</h4>
                    <h5>Our friendly staff and inviting ambience ensure every guest feels at home, with a warm and memorable experience.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='count'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-1'></div>
            <div className='col-lg-2'>
              <h2>2.8K</h2>
              <h5>Our Daily Orders</h5>
            </div>
            <div className='col-lg-2'>
              <h2>10+</h2>
              <h5>Restaurants</h5>
            </div>
            <div className='col-lg-2'>
              <h2>139</h2>
              <h5>Our Menu & Dish</h5>
            </div>
            <div className='col-lg-2'>
              <h2>25+</h2>
              <h5>Food Trucks</h5>
            </div>
            <div className='col-lg-2'>
              <h2>39</h2>
              <h5>Won the Awards</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='found'>
        <div className='found-title'>Founders</div>
        <div className='found-subtitle'>See What Our Founder Says</div>
        <div className='founders'>
          <Swiper
            spaceBetween={200}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><p>Hi, I’m Ahamed Shahabath N, the proud founder of Street Arabiya. At Street Arabiya, we are passionate about serving authentic Mediterranean cuisine—from Shawarmas, Alfahams, Mandhis, Arabic Desserts, and Kebabs to a variety of flavorful dishes. What started as a humble food truck has grown into 5+ restaurants and 20+ food trucks across Tamil Nadu and Kerala, serving over 2 lakh loyal customers. For us, food is about trust, and quality and safety are non-negotiable. Our commitment is to deliver top-quality food you can enjoy with confidence. Our vision is to make Street Arabiya a leading global brand for shawarmas and Mediterranean cuisine, adapting flavors to local tastes while staying true to our roots. At Street Arabiya, we’re not just serving food; we’re delivering trust, quality, and an experience you’ll love. Thank you for being part of our
              journey!</p>
              <img src='https://streetarabiya.com/wp-content/uploads/2025/01/17.webp' />
              <h5>Ahamed Shahabath N</h5>
              <h6>Founder</h6>
            </SwiperSlide>
            <SwiperSlide><p>As the partner of Street Arabiya, my goal is to deliver authentic Arabic cuisine with exceptional hospitality, while aiming to expand globally and share the richness of Arabic culture with the world.” my goal is to deliver authentic Arabic cuisine with exceptional hospitality. Our aim is to make middle and below-middle-class people feel rich through a luxurious dining experience at more affordable prices, ensuring value unmatched by other restaurants, while striving to expand globally and share the richness of Arabic culture with the
              world.</p>
              <img src='https://streetarabiya.com/wp-content/uploads/2025/01/YASAR-NA.webp' />
              <h5>Yasar arafath M</h5>
              <h6>Founder</h6>
            </SwiperSlide>
            <SwiperSlide><p>Our aim is to redefine dining experiences by combining culinary excellence, innovative hospitality, and sustainability. We strive to create a modern, customer-centric platform where food lovers can explore unique flavors, engage with immersive dining technology, and enjoy exceptional service while contributing to a greener
              future.</p>
              <img src='https://streetarabiya.com/wp-content/uploads/2025/01/JANSA-NA.webp' />
              <h5>Jansa Mohammed K</h5>
              <h6>Founder</h6>
            </SwiperSlide>
            <SwiperSlide><p>I am M.H. Nizamuddin, father of Ahmad Shahabath. N Along with his two partners—who may not be sons by blood but treat me as a father, and whom I proudly treat as my own— I oversee the backbone of Street Arabiya’s operations. While they focus on growth, new branches, hygiene, cleanliness, and exciting new dishes, I ensure smooth operations by managing purchases, quality, accounts, salaries, and vendor payments with zero delays or credits. I take care of our staff—handling their health, leaves, ticketing, advances, and financial needs—especially those who have left their hometowns and states to work with us. In my view, a business stands strong with two pillars: our staff and our vendors. If we care for both, our customers’ happiness will naturally
              follow.</p>
              <img src='https://streetarabiya.com/wp-content/uploads/2025/01/18.webp' />
              <h5>M.H. Nizamuddin</h5>
              <h6>Founder</h6>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='history'>
        <div className='history-title'><img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
          <h6>OUR HISTORY</h6></div>
        <div className='history-subtitle'>Our Journery Story</div>
        <div className='history-i'>
          <img src='https://streetarabiya.com/wp-content/uploads/2024/10/HISTORY-CLOTH-PRINT-04-2048x888.jpg' />
        </div>
      </div>
      <div className='test'>
        <div className='test-title'><img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
          <h6>TESTIMONIAL</h6></div>
        <div className='test-subtitle'>Our Journery Story</div>
        <div className='test-i'>
          <Swiper
            spaceBetween={200}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/12/Being-Nizar-300x300.jpg' />
              <p>I have been Street Arabiya's customer since their food truck days. Their Shawarmas were the perfect blend of Arabian & Indian cuisine. Even their Mandhi and Alfaham's has my heart❤️ If you are in Coimbatore never miss them</p>
              <h5>Being Nizar</h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/12/Reshma-e1734366439433-300x300.webp' />
              <p>We’ve been regulars at the Street Arabiya ever since they opened in Saibaba colony. Easily one among the best shawarma spots I’ve ever tried in my life. Absolutely love their peri peri shawarma, cone shawarma and cheese charcoal shawarma.</p>
              <h5>Walk with jai</h5>
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/12/Walk-With-Jai-e1734366371267-312x312.webp' />
              <p>I’ve been a loyal customer of Street Arabiya ever since they opened in Saibaba Colony, and they’ve never disappointed! Easily one of the best spots in Coimbatore for shawarma and mandhi.</p>
              <h5>Reshma</h5>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='touch'>
        <div className='touch-title'>Get In Touch</div>
        <div className='form'>
          <ul>
            <li><input type="text" required placeholder="Name" /></li>
            <li> <input type="number" required placeholder="Phone" /></li>
            <li><input type="mail" required placeholder="Email" /></li>
            <li><input type="text" required placeholder="Subject" /></li>
            <li><textarea placeholder="Your Message"></textarea></li>
            <button>Submit <FaRegPaperPlane /></button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
