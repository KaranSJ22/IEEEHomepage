import React, { useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import './NewsSection.css';

// ------------------ Mock Data ------------------

const coordinators = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    department: 'Electrical Engineering',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sarah@example.com',
    },
  },
  {
    id: '2',
    name: 'Prof. Michael Lee',
    department: 'Computer Science',
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:michael@example.com',
    },
  },
  {
    id: '3',
    name: 'Dr. Emma Rodriguez',
    department: 'Biomedical Engineering',
    image: 'https://images.pexels.com/photos/5212326/pexels-photo-5212326.jpeg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      
      email: 'mailto:emma@example.com',
    },
  },
  {
    id: '4',
    name: 'Prof. David Kim',
    department: 'Mechanical Engineering',
    image: 'https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      email: 'mailto:david@example.com',
    },
  },
];

// ------------------ Coordinators Component ------------------

const Coordinators: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  // Duplicate for seamless marquee
  const duplicatedCoordinators = [...coordinators, ...coordinators];

  return (
    <section className="news-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="news-container">
        <div className="section-header">
          <div className="header-content">
            <span className="section-label">Faculty</span>
            <h2 className="section-title">Faculty Coordinators</h2>
            <p className="section-description">
              Meet our dedicated faculty members who guide and support the IEEE Student Branch.
            </p>
          </div>
        </div>
        <div className="overflow-hidden group" style={{ marginTop: '2.5rem' }}>
          <div
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
            style={{ gap: '2rem' }}
          >
            {duplicatedCoordinators.map((coordinator, idx) => (
              <article
                key={`${coordinator.id}-${idx}`}
                className={`news-card${hovered === `${coordinator.id}-${idx}` ? ' is-hovered' : ''}`}
                style={{
                  minWidth: 420,
                  width: 420,
                  '--animation-delay': `${(idx % coordinators.length) * 0.15}s`,
                  '--category-bg': '#1a1a2e',
                  margin: '0 1rem',
                } as React.CSSProperties}
                onMouseEnter={() => setHovered(`${coordinator.id}-${idx}`)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="card-background"></div>
                <div className="card-gradient"></div>

                <div className="card-border-effect"></div>
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    className="h-48 overflow-hidden rounded-lg mb-4"
                    style={{ height: 192, marginBottom: 0 }}
                  >
                    <img
                      src={coordinator.image}
                      alt={coordinator.name}
                      className="w-full h-full object-cover"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="card-header">
                  <div>
                    <span className="article-title" style={{ fontSize: '1.5rem' }}>
                      {coordinator.name}
                    </span>
                    <p className="article-excerpt" style={{ fontSize: '1rem' }}>
                      {coordinator.department}
                    </p>
                  </div>
                  <div className="author-info flex space-x-2" style={{ display: 'flex', gap: '0.5rem' }}>
                    {coordinator.socialLinks.linkedin && (
                      <a
                        href={coordinator.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile of ${coordinator.name}`}
                        style={{ color: 'inherit' }}
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {coordinator.socialLinks.twitter && (
                      <a
                        href={coordinator.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Twitter profile of ${coordinator.name}`}
                        style={{ color: 'inherit' }}
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {coordinator.socialLinks.email && (
                      <a
                        href={coordinator.socialLinks.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Email ${coordinator.name}`}
                        style={{ color: 'inherit' }}
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="card-footer">
                  <button className="read-more">
                    <span className="btn-text">View Profile</span>
                    <div className="btn-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="hover-gradient"></div>
                <div className="card-reflection"></div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* Optionally, you can include background elements for extra style */}
      <div className="background-elements">
        <div className="noise-texture"></div>
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="geometric-pattern"></div>
      </div>
    </section>
  );
};

export default Coordinators;
