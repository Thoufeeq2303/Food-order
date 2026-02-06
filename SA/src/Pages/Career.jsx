import React from 'react'
import { GoArrowRight } from "react-icons/go";
import './career.css'
const Career = () => {
  return (
    <div>
      <div className='banner'>
        <div className='text'>
          <div className='topic'>Career</div>
          <div className='subtopic'> Home <GoArrowRight /> Career</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='with'>Work With Us</div>
            <div className="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Branch Manager
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Job Title:<br />
                    Restaurant Branch Manager
                    Job Overview:<br />
                    The Restaurant Branch Manager oversees the daily operations of the restaurant, ensuring exceptional customer service, efficient operations, and profitability. This role involves leading the team, managing resources, maintaining quality standards, and implementing strategies to achieve business objectives.
                    <br /><br />
                    Key Responsibilities:
                    <br /><br />
                    Operational Management:<br />
                    - Oversee the day-to-day operations of the restaurant branch.<br />
                    - Ensure compliance with health, safety, and hygiene standards.<br />
                    - Manage inventory, stock levels, and ordering supplies to prevent shortages or overstocking.<br />
                    - Monitor and control expenses to meet budget requirements.<br />
                    - Maintain restaurant equipment and coordinate repairs or replacements as needed.<br />
                    <br />
                    Team Leadership:<br />
                    - Recruit, train, and manage restaurant staff.<br />
                    - Schedule shifts and ensure adequate staffing during peak hours.<br />
                    - Motivate the team to deliver excellent customer service.<br />
                    - Conduct regular performance reviews and provide constructive feedback.<br /><br />
                    Customer Service:<br />
                    - Ensure a positive dining experience for all guests by addressing complaints and resolving issues promptly.<br />
                    - Maintain a high standard of quality and consistency in food and service.<br />
                    - Gather customer feedback and use it to improve operations and offerings.<br /><br />
                    <br />
                    Financial Management:<br />
                    - Monitor sales and profitability, identifying areas for improvement.<br />
                    - Analyze financial statements and implement strategies to achieve revenue goals.<br />
                    - Handle cash management and ensure accurate financial reporting.<br />
                    <br />
                    Marketing and Promotion:<br />
                    - Collaborate with the marketing team to implement local promotions and campaigns.<br />
                    - Analyze market trends and competitor activities to improve the branch’s performance.<br />
                    - Engage with the community to build brand awareness and loyalty.<br />
                    <br />
                    Required Skills and Qualifications:<br />
                    - Proven experience in restaurant management or a similar role.<br />
                    - Strong leadership and organizational skills.<br />
                    - Excellent problem-solving and decision-making abilities.<br />
                    - Exceptional customer service skills.<br />
                    - Proficiency in financial management, including budgeting and cost control.<br />
                    - Familiarity with restaurant management software and tools.<br />
                    - Knowledge of food safety and hygiene regulations.<br />
                    Preferred Qualifications:<br />
                    - Degree in hospitality management, business administration, or a related field.<br />
                    - Certification in food safety or similar credentials.<br />
                    <br />
                    Work Environment:<br />
                    - Fast-paced and customer-oriented.<br />
                    - Requires flexibility for evenings, weekends, and holidays.<br />
                    <br />
                    Would you like any specific adjustments or additions?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='upload'>
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <input type="text" class="form-control" id="validationCustom01" placeholder="Name" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-6">
                  <input type="number" class="form-control" id="validationCustom02" placeholder="Phone" required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <label>Upload Your Resume</label><br />
                  <input type="file" aria-label="file example" required />
                  <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div className='col-lg-12'>
                  <textarea placeholder="Your Message"></textarea><br />
                </div>
                <div class="col-12">
                  <button class="btn " type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
