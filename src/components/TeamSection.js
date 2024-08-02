import React from 'react';
import './TeamSection.css';
import linkedinLogo from '../assets/linkedin-logo.png'; // Ensure this is the correct path
import gaiaPhoto from '../assets/gaia.jpg'; // Import Gaia's photo
import adrienPhoto from '../assets/adrien.jpg'; // Import Adrien's photo
import sachaPhoto from '../assets/sacha.jpg'

const teamMembers = [
  {
    name: 'Gaia Bensouda Korachi',
    role: 'CEO',
    photo: gaiaPhoto, // Use the imported photo
    linkedin: 'https://www.linkedin.com/in/gaia-bensouda-korachi-352527260/'
  },
  {
    name: 'Adrien Dumont',
    role: 'CTO',
    photo: adrienPhoto, // Use the imported photo
    linkedin: 'https://www.linkedin.com/in/adrien-dumont-x'
  },
  {
    name: 'Sacha Elalouf',
    role: 'CTO',
    photo: sachaPhoto, // Use the imported photo
    linkedin: 'https://www.linkedin.com/in/sacha-elalouf'
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-section__title">Our Team</h2>
      <div className="team-section__members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={`${member.name}`} className="team-member__photo" />
            <h3 className="team-member__name">{member.name}</h3>
            <p className="team-member__role">{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="team-member__linkedin-logo" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
