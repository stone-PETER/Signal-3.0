import React from 'react';
import './Speakers.css';
import wave from '../../assets/green wave 3.jpg';

const Speakers = () => {
    const speakers = [
        { id: 1, name: 'John Doe', job: 'Keynote Speaker', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Jane Smith', job: 'Motivational Speaker', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Sam Wilson', job: 'Tech Expert', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Lisa Brown', job: 'Leadership Coach', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="speakers-section">
            <div>
                <img src={wave} alt="Decorative wave" className="wave-image" />
            </div>
            <h2 className="speakers-heading">Speakers</h2>
            <div className="speakers-container">
                {speakers.map((speaker) => (
                    <div key={speaker.id} className="speakers-card">
                        <div className="speaker-image-container">
                            <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                        </div>
                        <h3 className="speaker-name">{speaker.name}</h3>
                        <p className="speaker-job">{speaker.job}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Speakers;
