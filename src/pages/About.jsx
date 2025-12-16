import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/about/About.css";
import aboutImage from "../assets/images/about/IMG_9478.JPG";

export default function About() {
    const [copied, setCopied] = useState(false);
    const { t } = useTranslation();
    const email = "sashka.melnyk66@gmail.com";

    const handleEmailCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return(
        <div className="about-container">
            <div className="about-content">
                <div className="about-left">
                    <div className="about-image">
                        <img src={aboutImage} alt="Oleksandra Melnyk" />
                    </div>
                    <div className="about-social">
                        <a 
                            href="https://www.instagram.com/marssianochkka?igsh=MW91NGdtc3luMjJieQ%3D%3D" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link instagram"
                            title="Instagram"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                            </svg>
                        </a>
                        <a 
                            href="https://t.me/msandraaaa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link telegram"
                            title="Telegram"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="none">
                                <circle cx="12" cy="12" r="12" fill="#1F1F1F"/>
                                <path d="M10.3 12.9l-2.4-1.1c-.5-.2-.5-.7 0-.9l9.8-3.8c.4-.1.8.1.7.6l-1.6 7.6c-.1.5-.5.6-.9.3l-2.4-1.8-1.1 1.1c-.1.1-.3.2-.5.2l.2-2.8 4.5-4.1c.2-.2 0-.3-.2-.1l-5.6 3.5z" fill="white"/>
                            </svg>
                        </a>
                        <button 
                            onClick={handleEmailCopy}
                            className="social-link email"
                            title="Copy email"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                                <path d="m22 7-10 5L2 7"></path>
                            </svg>
                            {copied && <span className="copy-message">{t("about.copied")}</span>}
                        </button>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-text">
                        <p>{t("about.description1")}</p>
                        <p>{t("about.description2")}</p>
                        <p>{t("about.description3")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
