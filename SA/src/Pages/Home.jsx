import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegPaperPlane } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import './home.css'

const Home = () => {
  return (
    <div>
      <div className='ban'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='words'>
                  <p>Healthy & Quality</p>
                  <h1>Ultimate</h1>
                  <h2>Protine Fix</h2>
                  <button>ORDER NOW</button>
                </div>
              </div>
              <div className='col-lg-4 slide'>
                <img src='https://streetarabiya.com/wp-content/uploads/2025/01/alfaham.webp' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='words-1'>
                  <p>Healthy & Quality</p>
                  <h1>Delicious</h1>
                  <h2>Authentic Mandhi</h2>
                  <button>ORDER NOW</button>
                </div>
              </div>
              <div className='col-lg-4 slide'>
                <img src='https://streetarabiya.com/wp-content/uploads/2025/01/mandi.webp' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='words-2'>
                  <p>Healthy & Quality</p>
                  <h1>50+ Favaourfull</h1>
                  <h2>Shawarma Rolls</h2>
                  <button>ORDER NOW</button>
                </div>
              </div>
              <div className='col-lg-4 slide'>
                <img src='https://streetarabiya.com/wp-content/uploads/2025/01/shawarma-2.webp' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='words-3'>
                  <p>Vibrating & relaxing</p>
                  <h1>Inveting to</h1>
                  <h2>Arabian Atmosphere</h2>
                  <button>BOOK NOW</button>
                </div>
              </div>
              <div className='col-lg-4 slide'>
                <img src='https://streetarabiya.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-15-at-16.36.16_abb06d4b.jpg' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='words-4'>
                  <p>Founders</p>
                  <h1>Founders of</h1>
                  <h2>STREET ARABIYA</h2>
                  <button>KNOW MORE</button>
                </div>
              </div>
              <div className='col-lg-4 slide'>
                <img src='https://streetarabiya.com/wp-content/uploads/2024/12/PARTNERS.webp' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='box'>
        <div className='Best'>Best Seller 🌶</div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Chicken_Mandi-removebg-preview-e1734267558215.png" />
            <h6>Chicken Mandhi</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Mutton_Raan_1_-removebg-preview-e1734267127566.png" />
            <h6>Mutton Raan</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Mutton_Ribs-removebg-preview-e1734358482699.png" />
            <h6>Mutton Ribs</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Mexican_Shawarma-removebg-preview-e1734267263131.png" />
            <h6>Mexican Shawarma</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Street_Special_Shawarma_Plate-removebg-preview-e1734267004913.png" />
            <h6>Chicken Shawarma</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Murgh_Rozali_Kebab-removebg-preview-e1734267179849.png" />
            <h6>Murgh Rozali Kebab</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Malai_Kebab-removebg-preview-e1734267320693.png" />
            <h6>Malai Kebab</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Street_Kebab-removebg-preview-e1734267047957.png" />
            <h6>Street Kebab</h6>
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://streetarabiya.com/wp-content/uploads/2024/12/Afghani_Alfaham-removebg-preview-e1734267653371.png" />
            <h6>Afghani Alfaham</h6>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='Arabic'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='goat'>
                <img src='https://streetarabiya.com/wp-content/uploads/2024/10/HOMEPAGE-CIRCLE-BG-REMOVED-e1728134942675.webp' />
              </div>
            </div>
            <div className='col-lg-6'>
              <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
              <h6>ABOUT OUR FOOD</h6>
              <h2>Arabic Authentic Flavors with an Indian Twist</h2>
              <p>At Street Arabiya, we blend the bold, traditional flavors of Arabic cuisine with a touch of Indian flair, creating dishes that cater to the unique tastes of our guests. From juicy shawarmas and flavorful mandi to mouthwatering kebabs, BBQ, and indulgent Arabic desserts, every item is crafted to bring you the best of both worlds. Refresh your senses with our mojitos and milkshakes, and enjoy a fusion experience like no
                other!</p>
              <div className='small'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/about_feature_1.svg' />
                    <h3>Best Quality Food</h3>
                    <p>The carefully curated décor sets the stage.</p>
                  </div>
                  <div className='col-lg-6'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/05/about_feature_2.svg' />
                    <h3>Qualified Chef</h3>
                    <p>Define the concept and theme of your food.</p>
                  </div>
                </div>
              </div>
              <button class="border-btn"><span>BOOK US</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='plus'>
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
      <div className='post'>
        <h2>Grill Chicken Stick</h2>
        <h4>Limited Offer</h4>
        <button>ORDER NOW</button>
        <img src='https://streetarabiya.com/wp-content/uploads/2024/05/cta_1.png' />
      </div>
      <div className='youtube'>
        <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' alt="icon" />
        <h4>Gallery</h4>
        <h2>Videos</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <iframe width="400" height="226" src="https://www.youtube.com/embed/7TxKDS5zbDU" title="Shawarmaaaas 🔥 and Grill at Street Arabiya, Coimbatore - Irfan&#39;s View" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='col-lg-4'>
              <iframe width="400" height="226" src="https://www.youtube.com/embed/ZJ6oVeH_mFc" title="குடும்பத்தோட துபாய் சாப்பாடு சாப்பிட வந்தோம் | மந்தி பிரியாணி at Coimbatore STREET ARABIYA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='col-lg-4'>
              <iframe width="400" height="226" src="https://www.youtube.com/embed/2E6RD0qgNZo" title="கோவையில் முதல் முறையாக Kuzhi Mandi Platter - Best Unlimited Mandi at Street Arabiya Coimbatore" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='reserve'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img src='https://streetarabiya.com/wp-content/uploads/2024/12/booking-form-homepage.webp' />
            </div>
            <div className='col-md-6'>
              <h5>Need Booking ?</h5>
              <h3>Reserve Your Personal Table Now!</h3>
              <label>NAME</label>
              <input type="text" class="form-control" id="validationCustom01" placeholder="Name.." required /><br />
              <label>PHONE</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Phone" required /><br />
              <label>DATE</label>
              <input type="date" class="form-control" id="validationCustom01" placeholder="Date" required /><br />
              <label>TIME</label>
              <input type="time" class="form-control" id="validationCustom01" placeholder="Time" required /><br />
              <label>NO.OF.PERSON</label>
              <input type="number" class="form-control" id="validationCustom01" placeholder="Total person" required /><br />
              <button>RESERVE NOW</button>
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
    </div>
  )
}

export default Home
