import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/contact/Contact.css";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Можна додати відправку на сервер
        setFormData({ name: "", surname: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-section">
                <h2 className="contact-title">{t('contact.title')}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('contact.name')}
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder={t('contact.surname')}
                        value={formData.surname}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t('contact.email')}
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                    <div className="textarea-wrapper">
                        <textarea
                            name="message"
                            placeholder={t('contact.message')}
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            rows="6"
                            maxLength="500"
                            required
                        ></textarea>
                        <span className="char-count">{formData.message.length}/500 {t('contact.chars')}</span>
                    </div>
                    <button type="submit" className="submit-btn">{t('contact.send')}</button>
                </form>
            </div>
        </div>
    );
}