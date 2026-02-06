import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GiStopwatch } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { IoPin } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
    return (
        <div>
            <section id='Branches'>
                <div className='title'>
                    <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' />
                    <h6>Our Branches</h6>
                </div>
                <div className='sub-title'>
                    Our Tasty Points
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='type'>Restarunt</div>
                            <div className='where'>Podanur</div>
                            <div className='place'><CiLocationOn /> PODANUR MAIN ROAD, KARUPARAYAN KOVIL STOP, OPP MODERN HOT CHIPS</div>
                            <div className='time'><GiStopwatch /> 12pm - 11pm</div>
                            <div className='phone'><FiPhone /> +91 96290 75139</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Restarunt</div>
                            <div className='where'>Sai Baba Colony</div>
                            <div className='place'><CiLocationOn /> PODANUR BHARATHI PARK 7TH STREET</div>
                            <div className='time'><GiStopwatch /> 04pm - 11pm</div>
                            <div className='phone'><FiPhone /> +91 76959 75907</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Ramanathapuram</div>
                            <div className='place'><CiLocationOn /> KALLIMADAI STOP NEAR YELLOW TRAIN SCHOOL</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 88702 51139</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Ganapathy</div>
                            <div className='place'><CiLocationOn /> GANAPATHY SATHY ROAD, BHARA THI NAGAR BUS STOP, NEXT TO TMB BANK</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 88702 51139</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Kalapati</div>
                            <div className='place'><CiLocationOn /> NEHRU NAGAR WEST, KALAPATI, OPP SITRA BUILDING</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 96291 99369</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Podanur</div>
                            <div className='place'><CiLocationOn /> PODANUR MAIN ROAD, KARUPARAYAN KOVIL STOP, OPP MODERN HOT CHIPS</div>
                            <div className='time'><GiStopwatch /> 12pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 96290 75139</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Restarunt</div>
                            <div className='where'>Palakkad</div>
                            <div className='place'><CiLocationOn /> FRIZ TOWER, CALICUT BYE PASS, PALAKKAD 678002</div>
                            <div className='time'><GiStopwatch /> 12pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 88919 98299</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Palakkad</div>
                            <div className='place'><CiLocationOn /> MEPARAMBU BYE PASS, PALAKKAD 678006</div>
                            <div className='time'><GiStopwatch /> 12pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 96051 65242</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='type'>Restarunt</div>
                            <div className='where'>Trichy</div>
                            <div className='place'><CiLocationOn /> 75b, SALAI ROAD, NORTH EAST EXTENSION OPP: LAXMI COMPLEX, TRICHY,620018</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 95000 85825</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Restarunt</div>
                            <div className='where'>Erode</div>
                            <div className='place'><CiLocationOn /> 60B, Gandhiji Rd, opp. Nila Fast Food, CSI Institutions Campus, Erode, Tamil Nadu 638001</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 83002 80520</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='type'>Food Truck</div>
                            <div className='where'>Erode</div>
                            <div className='place'><CiLocationOn /> Perundurai Rd, near Eswaramoorthy Mahal, Pari Nagar, Kumalan Kuttai, Erode, Tamil Nadu 638011</div>
                            <div className='time'><GiStopwatch /> 04pm -11pm</div>
                            <div className='phone'><FiPhone /> +91 83003 80064</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Delivery'>
                <div className='container'>
                    <div className='heading'>
                        <img src='https://streetarabiya.com/wp-content/plugins/restar-core/assets/img/title_icon.svg' />
                        <h6>FOOD DELIVERY</h6>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='sub-head'>
                                Where Good Food<br /> Meets Fast Delivery
                                <h5>With Our Delivery Partners</h5>
                                <img src='https://streetarabiya.com/wp-content/uploads/2024/09/swiggy.png' /> <img src='https://streetarabiya.com/wp-content/uploads/2024/09/zomoto-removebg-preview.png' />
                            </div>
                            <div className='city'>
                                <div className="city-col">
                                    <div className="sym"><IoPin /> Podanur</div>
                                    <div className="sym"><IoPin /> Sai Baba Colony</div>
                                    <div className="sym"><IoPin /> Ramanathapuram - Ft</div>
                                    <div className="sym"><IoPin /> Ganapathy</div>
                                    <div className="sym"><IoPin /> Kalapati</div>
                                    <div className="sym"><IoPin /> Palakkad Town</div>
                                    <div className="sym"><IoPin /> Palakkad</div>
                                    <div className="sym"><IoPin /> Trichy - Woraiyur</div>
                                    <div className="sym"><IoPin /> Erode Palayapalayam</div>
                                </div>

                                <div className="city-col">
                                    <div className="sym1"><IoPin /> Podanur</div>
                                    <div className="sym1"><IoPin /> Sai Baba Colony</div>
                                    <div className="sym1"><IoPin /> Ramanathapuram - Ft</div>
                                    <div className="sym1"><IoPin /> Ganapathy</div>
                                    <div className="sym1"><IoPin /> Kalapati</div>
                                    <div className="sym1"><IoPin /> Palakkad Town</div>
                                    <div className="sym1"><IoPin /> Palakkad</div>
                                    <div className="sym1"><IoPin /> Trichy - Woraiyur</div>
                                    <div className="sym1"><IoPin /> Erode Palayapalayam</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 '>
                            <img src='https://streetarabiya.com/wp-content/uploads/2024/05/delivery_1.png' />
                        </div>
                    </div>
                </div>
            </section>
            <section id='foot'>
                <div className='part1'>
                    <img src='https://streetarabiya.com/wp-content/uploads/2024/04/Street-Arabiya-logo.jpg' />
                    <p>At Street Arabiya, we blend the bold, traditional<br /> flavors of Arabic cuisine with a touch of Indian<br /> flair, creating dishes that cater to the unique<br /> tastes of our guests.</p>
                </div>
                <div className='part2'>
                    <div className='name'>
                        Quick Links
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Catering</li>
                        <li>Menus</li>
                        <li>Gallery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='part3'>
                    <div className='name'>
                        Menus
                    </div>
                    <ul>
                        <li>Shawarma</li>
                        <li>Mandhi</li>
                        <li>Madhooth</li>
                        <li>BBQ</li>
                        <li>Grill</li>
                        <li>Platter</li>
                    </ul>
                </div>
                <div className='part4'>
                    <div className='name'>
                        Contact Us
                    </div>
                    <ul>
                        <li><MdPhoneInTalk /> +91 90259 94512</li>
                        <li><LuMailOpen /> streetarabiya@gmail.com</li><br />
                        <div className="social">
                            <span className="icon">
                                <FaInstagram />
                            </span>
                            <span className="icon">
                                <FaFacebook />
                            </span>
                            <span className="icon">
                                <FaLink />
                            </span>
                        </div>
                    </ul>
                </div>
            </section>
            <section id='last'>
                <div className='line'>Copyrights © All rights Recieved by Street Arabiya, Developed by Thoufeeq</div>
                <div className='lin'>Privacy Policy</div>
                <div className='lin2'>Terms & Condition</div>
            </section>
        </div>
    )
}

export default Footer