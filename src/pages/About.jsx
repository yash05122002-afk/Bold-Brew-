import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import coffeeDrumRoaster from '../images/coffeedrumroaster.png.png';
import coffeeMachine from '../images/coffeemachine.png';


const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Interactive 4-Step Bean-to-Cup Process
  const craftSteps = [
    {
      step: '01',
      title: 'Direct-Trade High-Altitude Sourcing',
      subtitle: 'ETHIOPIA • COLOMBIA • GUATEMALA',
      desc: 'We travel directly to family-owned micro-estates growing 100% specialty-grade Arabica at elevations above 1,600 meters. By paying 45% above Fair Trade minimums, we ensure farmers thrive while securing the sweetest, densest cherries of the harvest.',
      highlight: 'Top 1% Specialty Grade Arabica',
      img: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
    },
    {
      step: '02',
      title: 'Small-Batch Cast-Iron Drum Roasting',
      subtitle: 'THE ART OF FIRE & TIME',
      desc: 'Every morning, our head roaster profiles 15kg batches on a vintage cast-iron drum roaster. We track bean temperature to the exact second to caramelize natural sugars without ever scorching the delicate essential oils.',
      highlight: 'Roasted & Shipped Within 24 Hours',
      img:  coffeeDrumRoaster,
    },
    {
      step: '03',
      title: '18-Hour Triple-Filtered Cold Steep',
      subtitle: 'SILKY CREMA • ZERO BITTERNESS',
      desc: 'For our famous cold brews, coarse-ground beans are steeped in cold mountain-filtered water for 18 uninterrupted hours. This patient extraction yields 67% less acidity than traditional hot coffee and unlocks deep chocolatey smoothness.',
      highlight: '67% Lower Acidity Than Hot Brews',
      img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    },
    {
      step: '04',
      title: 'Precision Espresso Bar Craft',
      subtitle: 'DIALED IN EVERY MORNING',
      desc: 'Before opening our doors at 7:00 AM, our baristas dial in grind size, water mineral balance, and extraction pressure. Whether it is a velvety Spanish Cortado or a V60 pour-over, every cup is poured with intention.',
      highlight: 'La Marzocco Precision Extraction',
      img: coffeeMachine,
    },
  ];

  // Core Pillars
  const values = [
    {
      icon: '🌱',
      title: '100% Ethical & Traceable',
      text: 'Every bag features a QR code tracing the exact farm, harvest date, altitude, and farmer cooperative behind your beans.',
    },
    {
      icon: '🔥',
      title: 'Zero-Emission Roasting',
      text: 'Our Loring smart-roaster recycles hot air during the roast cycle, cutting carbon emissions by 80% compared to conventional drums.',
    },
    {
      icon: '♻️',
      title: 'Plastic-Free & Compostable',
      text: 'From our plant-based cold brew cups to our biodegradable degassing valve bean bags, nothing we pack lingers in a landfill.',
    },
  ];

  // Roastery Team
  const team = [
    {
      name: 'Vikramaditya Rao',
      role: 'Founder & Master Roaster',
      quote: '“Good coffee wakes you up. Great coffee makes you pause and savor the craft.”',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Green Bean Sourcing',
      quote: '“Great flavor begins in healthy soil at high elevation long before the roaster heats up.”',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Devansh Kulkarni',
      role: 'Lead Barista & Beverage Director',
      quote: '“Dialing in the morning espresso shot is equal parts chemistry, rhythm, and hospitality.”',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <div className="about-page">
      
      {/* =========================================================
          1. HERO BANNER
      ========================================================= */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-eyebrow">EST. 2018 • ARTISAN ROASTERY & CAFE</span>
          <h1>Obsessed With Every Single Bean.</h1>
          <p>
            We started with a 15kg cast-iron drum roaster and a simple belief: coffee should never taste burnt, bitter, or rushed.
          </p>
        </div>
      </section>

      {/* =========================================================
          2. OUR STORY SPLIT SECTION
      ========================================================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="story-split-grid">
            
            {/* Left Layered Visuals */}
            <div className="story-visual-stack">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                alt="Inside our coffee roastery"
                className="story-main-img"
              />
              <div className="story-experience-badge">
                <strong>8+</strong>
                <span>Years of Small-Batch Roasting</span>
              </div>
            </div>

            {/* Right Narrative Copy */}
            <div className="story-text-col">
              <span className="section-tag-gold">OUR ORIGIN STORY</span>
              <h2>From a Garage Roaster to Your Morning Ritual</h2>
              <p>
                Roast & Crema was born out of frustration with over-roasted, mass-produced commercial coffee that masked poor bean quality behind heavy syrups. We wanted to celebrate coffee as a seasonal culinary craft—just like fine wine or artisanal chocolate.
              </p>
              <p>
                Today, we partner directly with 18 family-owned farms across Ethiopia, Colombia, Sumatra, and India's Chikmagalur hills. Every batch is roasted to order and shipped within 24 hours so you experience peak aroma and velvety crema at home.
              </p>

              {/* Key Impact Metrics */}
              <div className="story-metrics-row">
                <div className="metric-box">
                  <h4>18+</h4>
                  <span>Direct-Trade Partner Farms</span>
                </div>
                <div className="metric-box">
                  <h4>45%</h4>
                  <span>Paid Above Fair-Trade Base</span>
                </div>
                <div className="metric-box">
                  <h4>100%</h4>
                  <span>Compostable Packaging</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. INTERACTIVE 4-STEP BEAN-TO-CUP PROCESS
      ========================================================= */}
      <section className="about-section process-bg">
        <div className="about-container">
          <div className="about-header-center">
            <span className="section-tag-gold">FROM FARM TO CUP</span>
            <h2>How We Craft Your Brew</h2>
            <p>Click through each stage of our roasting and brewing process below.</p>
          </div>

          {/* Step Selector Tabs */}
          <div className="process-tabs">
            {craftSteps.map((item, idx) => (
              <button
                key={item.step}
                className={`process-tab-btn ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="step-num">{item.step}</span>
                <span className="step-label">{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Step Display Card */}
          <div className="process-showcase-card">
            <div className="process-img-col">
              <img
                src={craftSteps[activeStep].img}
                alt={craftSteps[activeStep].title}
              />
              <span className="process-step-watermark">
                STEP {craftSteps[activeStep].step}
              </span>
            </div>

            <div className="process-info-col">
              <span className="section-tag-gold">
                {craftSteps[activeStep].subtitle}
              </span>
              <h3>{craftSteps[activeStep].title}</h3>
              <p>{craftSteps[activeStep].desc}</p>

              <div className="process-highlight-pill">
                <span>✓</span> {craftSteps[activeStep].highlight}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SUSTAINABILITY & CORE VALUES
      ========================================================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-header-center">
            <span className="section-tag-gold">WHAT WE STAND FOR</span>
            <h2>Our Roastery Standards</h2>
          </div>

          <div className="values-grid">
            {values.map((val, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. MEET THE ROASTERS & BARISTAS
      ========================================================= */}
      <section className="about-section team-bg">
        <div className="about-container">
          <div className="about-header-center">
            <span className="section-tag-gold">THE ARTISANS</span>
            <h2>Meet the People Behind the Pour</h2>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-body">
                  <span className="team-role">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. VISIT CAFE OR ORDER CTA BANNER
      ========================================================= */}
      <section className="about-section">
        <div className="about-container">
          <div className="visit-cta-banner">
            <div className="visit-cta-text">
              <span className="section-tag-gold light">TASTE THE DIFFERENCE</span>
              <h2>Ready to Experience Freshly Roasted Coffee?</h2>
              <p>
                Stop by our flagship Bandra Roastery & Espresso Bar to watch our daily roast in action, or order our signature brews and whole beans online.
              </p>
              <div className="visit-cta-buttons">
                <Link to="/menu" className="btn-caramel-main">
                  Explore Espresso Bar & Beans
                </Link>
                <Link to="/auth" className="btn-outline-light">
                  Join Coffee Club Rewards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;