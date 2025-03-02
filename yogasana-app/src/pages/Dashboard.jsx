// import banner from "../../public/Dash_banner.jpg";
// import didUknow from "../../public/Dash_didUn.png";
import "./dashboard.css";
import Slider from '../components/slider/slider.jsx';
import teacher1 from '../assets/teach/1.jpeg';
import teacher2 from '../assets/teach/2.jpeg';
import teacher3 from '../assets/teach/3.jpeg';
import SatisfiedMembers from '../components/people/members.jsx'
import { FaYoutube } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";


export default function Dashboard() {
  const didYouknow = [
    "Full-Body Workout: Engages every muscle – arms, core, legs, back – in 12 poses! 💪",
    "Boosts Cardiovascular Health: Gets your heart pumping like a mini cardio session. ❤️",
    "Weight Loss Warrior: Burns up to 150+ calories in 30 mins (science-backed! 🏋️♀️).",
    "Digestive Fire: Twists and forward bends massage internal organs (hello, metabolism! 🔥).",
    "Better Sleep: Balances the nervous system for deeper Zzzs. 🌙",
  ];

  return (
    <div>
      <div className="dash_main_section">
        <h1 className="center">
          "<span className="highlight">No gym?</span> No problem! Your mat{" "}
          <span className="highlight"> + </span> the sun{" "}
          <span className="highlight">= </span>the ultimate fitness duo. 🌅🏋️"
        </h1>

        <div className="banner center">
          <img src="/Dash_banner.jpg" alt="Banner" />
        </div>

        <div className="fact">
          <div>
          <img src="/Dash_didUn.png" alt="DidUn" />
          </div>
          <div>
            <ul>
              {didYouknow.map((line) => (
                <li>
                  <b>{line}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="welcome">       <span >Welcome to <span className="welcome_logo" >Yogasana</span></span>
      </div>

      <Slider />

      <div className="plans">
        <div className="plane_title">
          <span>Choose the best subscription payment plan for you</span>
        </div>
        <div className="multi_plans">

          <div className="plan_1">
            <div><span>Annual / Monthly</span></div>
            <p>Most Popular</p>
            <h1>$208.25</h1>
            <p>/month</p>
            <button> Try It Free</button>
            <b>Billed at $2400.00/year</b>
          </div>
          <div className="plan_2">
            <div><span>Student Discount</span></div>
            <p>50% Off (Verified Student)</p>
            <h1>$99.25</h1>
            <p>/month</p>
            <button> Try It Free</button>
            <b>Billed at $1,204.90/year</b>
          </div>
          <div className="plan_3">
            <div><span>Family Plan</span></div>
            <p> 4 Accounts</p>
            <h1>$135.45</h1>
            <p>/mo.</p>
            <p>per person*</p>
            <button>  Choose Plan</button>
            <b>Billed at $6,499.00/year</b>
          </div>
        </div>
      </div>

      <div className="instructors-section">
        <h2 className="section-title">Meet Our Certified Yoga Masters</h2>

        <div className="instructors-grid">
          {/* Instructor 1 */}
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src={teacher3}
                alt="Shanti Patel teaching yoga"
                loading="lazy"
              />
              <div className="experience-badge">12+ Years Experience</div>
            </div>
            <div className="instructor-info">
              <h3>Shanti Patel</h3>
              <p className="specialty">Hatha Yoga & Meditation Expert</p>
              <p className="bio">500+ hours certified instructor with focus on alignment and breath work</p>
              <div className="social-links">
                <a href="#" aria-label="View Shanti's profile">
                  <span className="social-icon"><FaCircleInfo /> Profile</span>
                </a>
                <a href="#" aria-label="Follow on Instagram">
                  <span className="social-icon">📸 Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src={teacher2}
                alt="Ravi Verma in warrior pose"
                loading="lazy"
              />
              <div className="experience-badge">8+ Years Experience</div>
            </div>
            <div className="instructor-info">
              <h3>Ravi Verma</h3>
              <p className="specialty">Vinyasa Flow & Power Yoga Specialist</p>
              <p className="bio">E-RYT 300 certified, creating dynamic flows since 2016</p>
              <div className="social-links">
                <a href="#" aria-label="View Ravi's profile">
                  <span className="social-icon"><FaCircleInfo /> Profile</span>
                </a>
                <a href="#" aria-label="Follow on YouTube">
                  <span className="social-icon"><FaYoutube /> YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="instructor-card">
            <div className="instructor-image">
              <img
                src={teacher1}
                alt="Priya Sharma demonstrating asana"
                loading="lazy"
              />
              <div className="experience-badge">15+ Years Experience</div>
            </div>
            <div className="instructor-info">
              <h3>Priya Sharma</h3>
              <p className="specialty">Prenatal & Therapeutic Yoga</p>
              <p className="bio">Specializing in yoga for women's health and rehabilitation</p>
              <div className="social-links">
                <a href="#" aria-label="View Priya's profile">
                  <span className="social-icon"><FaCircleInfo /> Profile</span>
                </a>
                <a href="#" aria-label="Visit website">
                  <span className="social-icon">🌐 Website</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SatisfiedMembers />
    </div>

  );
}
