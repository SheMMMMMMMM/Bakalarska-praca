import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/projects/ProjectDetail.css";
import travelVlogsImg from "../assets/images/projects/travel_vlogs/vien/preview.jpg";
import travelVlogsVideo from "../assets/videos/vien/wien.mp4";
import studyVibeVideo from "../assets/videos/study_vibe/1.MP4";
import studyVibe1 from "../assets/images/projects/study_vibe/photo/1.jpg";
import studyVibe2 from "../assets/images/projects/study_vibe/photo/2.jpg";
import studyVibe3 from "../assets/images/projects/study_vibe/photo/3.jpg";
import studyVibe4 from "../assets/images/projects/study_vibe/photo/4.jpg";
import studyVibe5 from "../assets/images/projects/study_vibe/photo/5.jpg";
import trustProcessImg1 from "../assets/images/projects/trust_process/1.jpg";
import trustProcessVideo1 from "../assets/videos/trust_process/1.mp4";
import trustProcessImg2 from "../assets/images/projects/trust_process/2.jpg";
import trustProcessVideo2 from "../assets/videos/trust_process/2.mp4";
import trustProcessImg3 from "../assets/images/projects/trust_process/3.jpg";
import trustProcessVideo3 from "../assets/videos/trust_process/3.mp4";
import trustProcessImg4 from "../assets/images/projects/trust_process/4.jpg";
import trustProcessVideo4 from "../assets/videos/trust_process/4.mp4";
import illustrationVideo1 from "../assets/videos/illustration/1.MP4";
import illustrationVideo2 from "../assets/videos/illustration/2.MP4";
import illustrationVideo3 from "../assets/videos/illustration/3.MP4";
import illustrationVideo4 from "../assets/videos/illustration/4.MP4";
import illustrationVideo5 from "../assets/videos/illustration/5.MP4";
import illustrationVideo6 from "../assets/videos/illustration/6.MP4";
import illustrationVideo7 from "../assets/videos/illustration/7.MP4";
import illustrationVideo8 from "../assets/videos/illustration/8.MP4";
import illustrationVideo9 from "../assets/videos/illustration/9.MP4";
import illustrationPreview from "../assets/images/projects/illustration/preview.jpg";
import illustrationImg1 from "../assets/images/projects/illustration/Untitled_Artwork 1.jpg";
import illustrationImg2 from "../assets/images/projects/illustration/Untitled_Artwork 2.jpg";
import illustrationImg3 from "../assets/images/projects/illustration/Untitled_Artwork 3.jpg";
import illustrationImg4 from "../assets/images/projects/illustration/Untitled_Artwork 4.jpg";
import illustrationImg5 from "../assets/images/projects/illustration/Untitled_Artwork 5.jpg";
import illustrationImg6 from "../assets/images/projects/illustration/Untitled_Artwork 6.jpg";
import illustrationImg7 from "../assets/images/projects/illustration/Untitled_Artwork 7.jpg";
import illustrationImg8 from "../assets/images/projects/illustration/Untitled_Artwork 8.jpg";
import illustrationImg9 from "../assets/images/projects/illustration/Untitled_Artwork 9.jpg";


export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState(null);

    const projects = {
        2: {
            title: t("projects.list.studyVibe.title"),
            description: t("projects.list.studyVibe.description"),
            fullDescription: t("projects.list.studyVibe.fullDescription"),
            image: studyVibe1,
            video: studyVibeVideo,
            gallery: [studyVibe1, studyVibe2, studyVibe3, studyVibe4, studyVibe5]
        },
        3: {
            title: t("projects.list.videography.title"),
            description: t("projects.list.videography.description"),
            fullDescription: t("projects.list.videography.fullDescription"),
            image: travelVlogsImg,
            video: travelVlogsVideo
        },
        4: {
            title: t("projects.list.illustration.title"),
            description: t("projects.list.illustration.description"),
            fullDescription: t("projects.list.illustration.fullDescription") || "Digital illustration.",
            image: trustProcessImg1,
            video: trustProcessVideo1
        },
        5: {
            title: t("projects.list.illustration.title"),
            description: t("projects.list.illustration.description"),
            fullDescription: t("projects.list.illustration.fullDescription") || "Digital illustration.",
            image: trustProcessImg2,
            video: trustProcessVideo2
        },
        6: {
            title: t("projects.list.illustration.title"),
            description: t("projects.list.illustration.description"),
            fullDescription: t("projects.list.illustration.fullDescription") || "Digital illustration.",
            image: trustProcessImg3,
            video: trustProcessVideo3
        },
        7: {
            title: t("projects.list.illustration.title"),
            description: t("projects.list.illustration.description"),
            fullDescription: t("projects.list.illustration.fullDescription") || "Digital illustration.",
            image: trustProcessImg4,
            video: trustProcessVideo4
        },
        8: {
            title: t("projects.list.illustration.title"),
            description: t("projects.list.illustration.description"),
            fullDescription: t("projects.list.illustration.fullDescription"),
            image: illustrationPreview,
            video: null,
            gallery: [
                { id: 1, img: illustrationImg1, video: illustrationVideo1 },
                { id: 2, img: illustrationImg2, video: illustrationVideo2 },
                { id: 3, img: illustrationImg3, video: illustrationVideo3 },
                { id: 4, img: illustrationImg4, video: illustrationVideo4 },
                { id: 5, img: illustrationImg5, video: illustrationVideo5 },
                { id: 6, img: illustrationImg6, video: illustrationVideo6 },
                { id: 7, img: illustrationImg7, video: illustrationVideo7 },
                { id: 8, img: illustrationImg8, video: illustrationVideo8 },
                { id: 9, img: illustrationImg9, video: illustrationVideo9 }
            ]
        }
    };

    const project = projects[id];

    if (!project) {
        return (
            <div className="project-detail-container">
                <div className="project-detail-section">
                    <h1>{t("projectDetail.notFound")}</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <div className="project-detail-section">
                
                {/* Top Section: Video/Media + Description */}
                {(project.video || !project.gallery) && (
                    <div className="project-detail-content">
                        <div className="project-detail-media">
                            {project.video ? (
                                <video 
                                    width="100%" 
                                    height="100%" 
                                    controls 
                                    className="project-video"
                                >
                                    <source src={project.video} type="video/mp4" />
                                    Ваш браузер не підтримує HTML5 відео.
                                </video>
                            ) : (
                                <img src={project.image} alt={project.title} />
                            )}
                        </div>
                        <div className="project-detail-info">
                            <h1 className="project-detail-title">{project.title}</h1>
                            <p className="project-detail-text">{project.fullDescription}</p>
                        </div>
                    </div>
                )}

                {/* Full-Width Carousel Section */}
                {project.gallery && (
                    <div className="carousel-section">
                        <div className="carousel-container">
                            <div className="carousel-track">
                                {/* Study Vibe - рядки (зображення без кліків) */}
                                {project.gallery.some(item => typeof item === 'string') && project.gallery.map((img, index) => (
                                    <img 
                                        key={index} 
                                        src={img} 
                                        alt={`${project.title} ${index + 1}`}
                                        className="carousel-image"
                                    />
                                ))}
                                {/* Illustration - об'єкти з img і video (з кліками) */}
                                {project.gallery.some(item => item.img) && project.gallery.map((item) => (
                                    <img 
                                        key={item.id} 
                                        src={item.img} 
                                        alt={`${project.title} ${item.id}`}
                                        className="carousel-image"
                                        onClick={() => setSelectedVideo(item.video)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                                {/* Дублюємо Study Vibe для нескінченної каруселі */}
                                {project.gallery.some(item => typeof item === 'string') && project.gallery.map((img, index) => (
                                    <img 
                                        key={`duplicate-${index}`} 
                                        src={img} 
                                        alt={`${project.title} ${index + 1}`}
                                        className="carousel-image"
                                    />
                                ))}
                                {/* Дублюємо Illustration для нескінченної каруселі */}
                                {project.gallery.some(item => item.img) && project.gallery.map((item) => (
                                    <img 
                                        key={`duplicate-${item.id}`} 
                                        src={item.img} 
                                        alt={`${project.title} ${item.id}`}
                                        className="carousel-image"
                                        onClick={() => setSelectedVideo(item.video)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal for Illustration Page */}
                {selectedVideo && (
                    <div 
                        className="video-modal-overlay"
                        onClick={() => setSelectedVideo(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            cursor: 'pointer'
                        }}
                    >
                        <video 
                            src={selectedVideo} 
                            controls 
                            autoPlay
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                borderRadius: '12px',
                                cursor: 'default'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
