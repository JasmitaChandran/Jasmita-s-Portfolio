import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        {/* <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2> */}

        {/* --- Description --- */}
        {/* <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Jasmita Chandran</strong> — an associate developer at SAP Labs India. I have been passionate about technology and development for years, and my journey with SAP began as a scholar@SAP, where I boosted my skills and gained invaluable experience.

I specialize in Java, Springboot, Angular,React, JavaScript, NodeJS, SAP UI5, and SAP BTP. My background as a scholar@SAP has equipped me with a solid foundation in both back-end and front-end technologies, enabling me to deliver high-quality, scalable solutions.

I'm always eager to connect with fellow professionals and explore new opportunities in the tech industry. If you're interested in collaborating, networking, or discussing potential opportunities, feel free to reach out. Let's connect!
        </p> */}

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Work Experience
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginLeft: "2rem",
              paddingLeft: "1rem",
              borderLeft: "2px dashed rgba(255,255,255,0.2)",
            }}
          >
            {/* --- Timeline Item 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem", // Adjusted to align the dot center with the line
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
               SAP Ariba Procurement
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
                <i>Associate Developer</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
            
                  <ul>
                    <li>
                    Developed 16 Inbound Entities in MDCS by implementing JSON schema validations, transformation mappings (MDI - MDNI - ODM), and CDS schemas across publish-service, search-service, cap-mdcs, and mdcs-client.
                    </li>
                    <li>
                    Implemented file upload functionality for 7 entities, supporting Excel-to-JSON parsing and automated data publishing into SAP MDCS.
                    </li>
                    <li>
                    Migrated Angular framework from v11 to v18.2 to enhance application performance.
                    </li>
                    <li>
                    Worked on SAP Fiori (UI5) enhancements for Master Data application - implemented search, filtering, layout persistence, file upload enhancements, and cross-browser defect fixes to improve user experience.
                    </li>
                    <li>
                    Made instruction sheet generation dynamic by integrating APIs across two repositories, enabling automated data fetching, and eliminating manual intervention.
                    </li>
                    <li>
                    Resolved over 20 UI defects and 10 backend defects to improve overall system reliability.
                    </li>
                    <li>
                    Increased JUnit test coverage by 5% through writing over 10,000 lines of test code.
                    </li>
                    </ul>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}> Jul 2024 – Present</p>
            </motion.div>

            {/* --- Timeline Item 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem", // Adjusted to align the dot center with the line
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                Success Factors Next Gen Payroll
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
            <i>Scholar@SAP</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
               <ul>

             <li>Worked on backend (Java, SpringBoot), Frontend (Freestyle Fiori) and Microservices (Eureka).</li>
             <li>Solved 10+ UI Accessibility defects.</li>
             <li>Worked on verification of status and scope using Java, and tested through JUnits and Mockito.</li>

               </ul>
                
                </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>Jan 2024- Jun 2024</p>
            </motion.div>

            {/* --- Timeline Item 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem", // Adjusted to align the dot center with the line
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                UX Engineering- SAP FIORI V2
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
                <i>Scholar@SAP</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
               <ul>
                <li>Worked on 40+ incidents (internal and customer) on BCP/IMS tool and Service now.</li>
                <li>Developed understanding on working of Fiori Elements Framework, tech apps, XML templating, Message Handling, Side Effects, IAppState Handling, MVC Protocol and various Annotations.</li>
                <li>Connected various customers of Germany, USA, China via teams call.</li>
               </ul>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>Jun 2023- Dec 2023</p>
            </motion.div>

            {/* --- Timeline Item 4 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem",
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                Digital Vehicle Operations
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
                <i>Scholar@SAP</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                <ul>
                  <li>Implemented and deployed Bookshop application and a Quotation application on HANA Trial with CRUD operations using CAP JAVA, including object page implementation with Fiori annotations.</li>
                  <li>Designed object page using Fiori annotations for sales order entity, and deployed it in SQLite database.</li>
                  <li>Explored and implemented audit logging, including analysis and understanding of model, auditlogger, and service file.</li>
                  <li>Implementing Validations using Java, and tested through Junits and Mockito.</li>
                </ul>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Sept 2022- May 2023
              </p>
            </motion.div>

            {/* --- Timeline Item 5 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem",
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                Shriram Pistons & Rings Ltd 
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
                <i>Internship -Business Applications in Java</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
              <ul>
                <li>Developed backend functionalities using Java and JDBC for seamless database connectivity and interaction.</li>
                <li>Designed and implemented database schemas, ensuring efficiency and reliability in data management.
                </li>
              </ul>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Jul 2021- Sep 2021
              </p>
            </motion.div>

            {/* --- Timeline Item 6 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 15px rgba(0,255,200,0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                marginBottom: "2rem",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-1.6rem",
                  top: "0.5rem",
                  width: "1rem",
                  height: "1rem",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(0,255,200,0.5)",
                }}
              ></div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.4rem",
                  fontSize: "1.25rem",
                }}
              >
                QA-Solvers
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.2rem",
                }}
              >
                <i>Internship -Subject Matter Expert</i>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
              <ul>
                <li>Created 90+ doubt solving videos on Web Development, Python, Java, MySQL (For bartleby).
                </li>
                <li>Created 10+ doubt solving videos for class 9th and 10th Maths (For Vedantu)</li>
              </ul>
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Jul 2020- Oct 2020
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
