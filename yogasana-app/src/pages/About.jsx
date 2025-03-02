import { 
     GiThreeFriends, 
     GiAchievement,
   } from 'react-icons/gi';
  import { GrYoga } from "react-icons/gr";
  import { IoAnalyticsSharp } from "react-icons/io5";
  export const LeafIcon = IoAnalyticsSharp;
  export const CommunityIcon = GiThreeFriends;
  export const PoseIcon = GrYoga;
  export const AchievementIcon = GiAchievement;
import teamPhoto from '../assets/main.avif';
import './about.css';

const AboutPage = () => {
    let sizeOfIcon = {fontSize:'45px'}
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>Transforming Yoga Practice Through Community & Gamification</h1>
        <p className="tagline">Where ancient wisdom meets modern motivation</p>
        <div className="stats-container">
          <StatBox number="10K+" label="Active Yogis" />
          <StatBox number="30+" label="Yogasanas Tracked" />
          <StatBox number="7k+" label="Community Interactions" />
        </div>
      </header>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="text-content">
          <h2>Why We Created Yogasna</h2>
          <p>
            In 2023, we noticed a growing need for <strong>sustainable motivation</strong> in 
            yoga practice. While millions start their yoga journey, only 15% 
            continue beyond 6 months. Our solution? Combine the power of 
            <strong> community support</strong> with <strong>game mechanics</strong> to make 
            wellness engaging and social.
          </p>
         </div>
        <div className="image-content">
          <img src={teamPhoto} alt="Yogasna founding team practicing yoga" />
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <h2>What Makes Us Different</h2>
        <div className="feature-grid">
          <FeatureCard 
            icon={<PoseIcon style={sizeOfIcon}/>}
            title="Asana Tracker Pro"
            text="Log poses with difficulty ratings, duration, and personal notes"
          />
          <FeatureCard 
            icon={<AchievementIcon style={sizeOfIcon}/>}
            title="Skill Mastery System"
            text="Earn badges and level up your yoga profile"
          />
          <FeatureCard 
            icon={<CommunityIcon style={sizeOfIcon}/>}
            title="Community Challenges"
            text="Weekly group goals and friendly competitions"
          />
          <FeatureCard 
            icon={<LeafIcon style={sizeOfIcon}/>}
            title="Personalized Analytics"
            text="Track progress with smart insights and recommendations"
          />
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="guidelines-section">
        <h2>Our Wellness Philosophy</h2>
        <div className="philosophy-grid">
          <PrincipleCard 
            title="Non-competition"
            text="Celebrate personal growth over comparisons"
          />
          <PrincipleCard 
            title="Mindful Sharing"
            text="Encourage authentic, judgment-free experiences"
          />
          <PrincipleCard 
            title="Accessibility First"
            text="Modified poses and adaptive challenges for all bodies"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Transform Your Practice?</h2>
        <div className="cta-buttons">
          <button className="primary-cta">Join Free Community</button>
          <button className="secondary-cta">Explore Yogasanas</button>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const StatBox = ({ number, label }) => (
  <div className="stat-box">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const FeatureCard = ({ icon, title, text }) => (
  <div className="feature-card">
    <div className="icon-wrapper">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const PrincipleCard = ({ title, text }) => (
  <div className="principle-card">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default AboutPage;
