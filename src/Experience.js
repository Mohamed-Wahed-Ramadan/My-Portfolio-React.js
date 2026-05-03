import './Experience.css';

function Experience() {
  return (
    <div name="Experience" className="experience-section">
      <div className="head">
        <h3>EXPERIENCE</h3>
        <span></span>
      </div>
      <div className="experience-list ">
        <div className="v">
            <div className="v2 v3">
                <div className="v1"></div>
                <h4>FullStack Developer – E-VAS Telecom</h4>
                <span className="exp-date">Jan 2026 – Present | Full Time</span>
                <ul>
                    <li>Built real-time telecom monitoring dashboards using React.js, SignalR, and EChart.js to handle high-volume data with optimized UI/UX.</li>
                    <li>Developed secure REST APIs with ASP.NET Core Web API, implementing JWT authentication and role-based access control (RBAC) using ASP.NET Core Identity.</li>
                    <li>Integrated Redis caching, Entity Framework Core, SQL Server and stored procedures to improve performance and reduce database load.</li>
                    <li>Designed scalable frontend architecture with efficient state management (Zustand) and performance optimizations to minimize unnecessary re-renders.</li>
                </ul>
                
            </div>                
        </div>
        <div className="v">
            <div className="v2 v3">
                <div className="v1"></div>
                <div className="exp-card">
          <h4>Frontend Developer – Service AMX</h4>
          <span className="exp-date">April 2025 – Mar 2026 | Part Time</span>
          <ul>
            <li>Built cross-platform mobile apps using Flutter for student and instructor dashboards with real-time course progress tracking.</li>
            <li>Developed admin dashboard using Next.js for managing users, courses, and payments with dynamic CRUD operations and server-side rendering (SSR).</li>
            <li>Created official marketing website using React.js showcasing platform features and user journey</li>
            <li>Implemented state management (Context API / Redux), and real-time notifications (Firebase / WebSocket) across web and mobile platforms.</li>
            <li>Improved user experience and UI scalability using reusable component architecture and responsive design principles.</li>
          </ul>
        </div>
            </div>
        </div>
        <div className="v">
            <div className="v2 v3">
                <div className="v1"></div>
                <div className="exp-card">
          <h4>Freelance Web Developer (Full Stack)</h4>
          <span className="exp-date">March 2025 – Present</span>
          <ul>
            <li>Delivered end-to-end full-stack applications using React.js / Next.js, ASP.NET Core Web API, Entity Framework Core, and SQL Server.</li>
            <li>Worked directly with clients to gather requirements, propose technical solutions, and deliver production-ready systems.</li>
            <li>Built secure RESTful APIs, JWT-based authentication, and responsive UIs tailored to business needs.</li>
            <li>Achieved high client satisfaction through on-time delivery, clear communication, and quality work.</li>
            <li>ItsQahwa Platform – Coffee farm supply & equipment manufacturing management system.</li>
            <li>LegalAhmed Platform – Law firm case management system.</li>
          </ul>
        </div>
            </div>
        </div>  
      </div>
    </div>
  );
}

export default Experience;
