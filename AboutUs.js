import React from 'react';
import '../App.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="content-wrapper">
                <div className="text-section">
                    <h1>About Us</h1>
                    <p>
                        AI Mentor is an educational platform dedicated to providing comprehensive learning experiences
                        in the field of artificial intelligence (AI). It serves as a resource hub for individuals seeking
                        to expand their knowledge and skills in AI-related disciplines.
                    </p>
                    <p>
                        At AI Mentor, we offer a diverse range of virtual internship programs that provide
                        hands-on experience with real-world AI applications. With the help of AI, we aim to equip learners
                        with practical skills and real-world experience, making them industry-ready.
                    </p>
                    <p>
                        Our platform also offers certification programs that validate your AI
                        expertise and enhance your professional credentials. These certifications
                        are recognized by industry leaders and can significantly boost your employability in the competitive job market.
                    </p>
                </div>
                <div className="image-section">
                    <img src="/aboutpic.png" alt="About Us Background" />
                </div>
            </div>

            <div className="videos-section">
                <div className="video-section">
                    <h2>Our Introduction Video</h2>
                    <div className="video-container">
                        <video width="560" height="315" controls>
                            <source src="/AimentorVid1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="video-section">
                    <h2>AI Mentor Overview</h2>
                    <div className="video-container">
                        <video width="560" height="315" controls>
                            <source src="/aimentor2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
