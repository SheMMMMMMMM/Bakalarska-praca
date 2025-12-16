import "../assets/styles/home/Home.css";
import homeImg1 from "../assets/images/home/photo_2025-11-07_12-55-32 1.png";

import homeImg2 from "../assets/images/home/photo_10_2025-11-05_18-52-40 1.png";

export default function Home() {
    return (
        <div className="home-container">
            <div className="portfolio-section">
                <div className="portfolio-white-bg">
                    <h2 className="portfolio-title">Portfolio</h2>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <img src={homeImg1} alt="Portfolio 1" />
                        </div>
                        <div className="portfolio-item">
                            <img src={homeImg2} alt="Portfolio 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}