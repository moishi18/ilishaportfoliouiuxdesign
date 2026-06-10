import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ORIVELLE",
    category: "AI & AR Skincare App",
    tools: "UI/UX Design, AI Skin Analysis, AR Try-On, Mobile App Design",
    image: "/images/orivelle.png",
    link: "https://www.behance.net/gallery/246016865/ORIVELLE-AI-AR-Skincare-App",
  },
  {
    title: "ATM Redesign",
    category: "Human-Centered Interface Redesign",
    tools: "User Research, Interaction Design, Biometric Flow, Accessibility",
    image: "/images/atm.png",
    link: "https://www.behance.net/gallery/248627367/ATM-Redesign",
  },
  {
    title: "INFERNO",
    category: "Space-Tech Brand Identity",
    tools: "Brand Identity, Logo Design, Visual System, Team Rebranding",
    image: "/images/inferno.png",
    link: "https://www.behance.net/gallery/244717517/INFERNO-Rebranding",
  },
  {
    title: "The Drip Theory",
    category: "Coffee Education Website",
    tools: "Web Design, UI/UX, Visual Hierarchy, Café Branding",
    image: "/images/driptheory.png",
    link: "https://www.behance.net/gallery/240449475/The-Drip-Theory",
  },
  {
    title: "Darshana",
    category: "Indian Art Archive Website",
    tools: "UI/UX Design, Web Design, Visual Identity, Cultural Storytelling",
    image: "/images/darshana.png",
    link: "https://www.behance.net/gallery/231425081/Darshana",
  },
  {
    title: "Ànemos",
    category: "Aerodynamic Electric Vehicle Concept",
    tools: "Product Design, CAD, Fusion 360, 3D Modeling, Product Visualization",
    image: "/images/anemos.png",
    link: "https://www.behance.net/gallery/228760861/Anemos",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
