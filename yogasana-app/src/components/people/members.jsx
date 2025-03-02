// import { QuoteIcon, CommunityIcon, StarIcon } from './Icons';
import { FaQuoteLeft } from "react-icons/fa6";
import { RiUserCommunityLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import  femaleUser from "../../assets/users/head1.jpeg"
import  maleUser from "../../assets/users/head.jpeg"

const QuoteIcon = FaQuoteLeft;
const CommunityIcon = RiUserCommunityLine;
const StarIcon = FaRegStar;


import './members.css'
export default  function SatisfiedMembers(){
  return (

    <section className="community-section">
       <div className="section-header">
        <h2>Join Our Tribe of Thriving Yogis</h2>
        <p className="subheading">Where Growth Meets Connection</p>
      </div>

      <div className="member-grid">
        {/* Member Card 1 */}
        <div className="member-card">
          <div className="member-header">
            <img 
              src={femaleUser}
              alt="Priya's journey" 
              className="member-avatar"
            />
            <div>
              <h3>Priya S.</h3>
              <p className="member-role">Meditation Guide</p>
              <div className="achievement-badges">
                <span>🧘 487+ Poses</span>
                <span>🌟 28 Day Streak</span>
              </div>
            </div>
          </div>
          <QuoteIcon className="quote-icon" />
          <blockquote>
            "This community transformed my practice - from proper alignment tips 
            to celebrating small wins together!"
          </blockquote>
          <div className="community-stats">
            <div className="stat-item">
              <CommunityIcon />
              <span>Shared 42 Insights</span>
            </div>
            <div className="stat-item">
              <StarIcon />
              <span>Earned Guru Status</span>
            </div>
          </div>
        </div>

        {/* Member Card 2 */}
        <div className="member-card highlight-card">
          <div className="member-header">
            <img 
              src={maleUser} 
              alt="Raj's transformation" 
              className="member-avatar"
            />
            <div>
              <h3>Raj M.</h3>
              <p className="member-role">Power Yoga Enthusiast</p>
              <div className="achievement-badges">
                <span>🔥 650 Cal/Day</span>
                <span>🚀 Level 45</span>
              </div>
            </div>
          </div>
          <QuoteIcon className="quote-icon" />
          <blockquote>
            "Never thought fitness could be this fun! The weekly challenges keep 
            me motivated and accountable."
          </blockquote>
          <div className="community-stats">
            <div className="stat-item">
              <CommunityIcon />
              <span>Created 8 Challenges</span>
            </div>
            <div className="stat-item">
              <StarIcon />
              <span>Top Contributor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="community-cta">
        <button className="join-button">
          Start Your Journey → 
        </button>
        <p className="cta-subtext">
          2,341 members joined this week alone!
        </p>
      </div>
    </section>
  );
};

