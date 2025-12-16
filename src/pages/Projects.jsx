import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/projects/Projects.css";
import travelVlogsImg1 from "../assets/images/projects/travel_vlogs/vien/превю.jpg";
import studyVibe1 from "../assets/images/projects/study_vibe/превю.jpg";
import trustProcessImg1 from "../assets/images/projects/trust_process/1.jpg";
import trustProcessImg2 from "../assets/images/projects/trust_process/2.jpg";
import trustProcessImg3 from "../assets/images/projects/trust_process/3.jpg";
import trustProcessImg4 from "../assets/images/projects/trust_process/4.jpg";
import illustrationPreview from "../assets/images/projects/illustration/превю.jpg";


export default function Projects() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        "all",
        "study_vibe",
        "travel_vlogs",
        "trust_process",
        "illustration"
    ];

    const projects = [
        {
            id: 2,
            title: t("projects.list.studyVibe.title"),
            description: t("projects.list.studyVibe.description"),
            category: "study_vibe",
            image: studyVibe1
        },
        {
            id: 3,
            title: t("projects.list.videography.title"),
            description: t("projects.list.videography.description"),
            category: "travel_vlogs",
            image: travelVlogsImg1
        },
        {
            id: 4,
            title: t("projects.list.branding.title"),
            description: t("projects.hoverText"),
            category: "trust_process",
            image: trustProcessImg1
        },
        {
            id: 5,
            title: t("projects.list.animation.title"),
            description: t("projects.hoverText"),
            category: "trust_process",
            image: trustProcessImg2
        },
        {
            id: 6,
            title: t("projects.list.illustration.title"),
            description: t("projects.hoverText"),
            category: "trust_process",
            image: trustProcessImg3
        },
        {
            id: 7,
            title: t("projects.list.branding.title"),
            description: t("projects.hoverText"),
            category: "trust_process",
            image: trustProcessImg4
        },
        {
            id: 8,
            title: t("projects.list.illustration.title"),
            description: "Untitled",
            category: "illustration",
            image: illustrationPreview
        }
    ];

    const filteredProjects = activeFilter === "all" 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    const getFilterLabel = (filter) => {
        return t(`projects.filters.${filter}`);
    };

    return (
        <div className="projects-container">
            <div className="projects-section">
                <div className="projects-filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {getFilterLabel(filter)}
                        </button>
                    ))}
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="project-item"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                loading="lazy"
                            />
                            <div className="project-overlay">
                                <span className="project-text">{project.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}