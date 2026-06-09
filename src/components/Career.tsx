import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Manager & Design Lead</h4>
                <h5>Team Inferno - DTU</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
            Leading branding, digital experiences, and cross-functional collaboration
            for an international award-winning rover team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Intern</h4>
                <h5>Agnirva Space Community (AICTE / ISRO Initiative)</h5>
              </div>
              <h3>2026–NOW</h3>
            </div>
            <p>
            Designed user-centric visuals and digital assets for
            space-tech education and innovation initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Intern</h4>
                <h5>Technical Craftsmen (Saudi Arabia) </h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
            Developed brand identity systems and designed
            visual assets for the company and its flagship café.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founding Member & Design Lead</h4>
                <h5>Panha</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
            Shaping product vision, brand identity, and user experience
            for a DTU-based startup from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
