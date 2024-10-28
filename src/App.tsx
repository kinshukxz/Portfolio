import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import ProfilePic from './ProfilePic.jpg';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kinshuk Srivastava</h1>
              <br />
              <p className="text-xl mb-7">Motivated and enthusiastic student seeking an opportunity to gain valuable work experience and contribute to a dynamic organization. Eager to learn and apply academic knowledge to practical situations while developing essential skills for future career growth.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/kinshukxz" className="hover:text-gray-200">
                  <Github size={24} />
                </a>
                <a href="http://www.linkedin.com/in/kinshuk-srivastava-57932a241" className="hover:text-gray-200">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-gray-200">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src={ProfilePic}
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">SDE Intern</h3>
                <p className="text-gray-600">AUMHUM</p>
                <p className="text-gray-600">Bangalore , Karnataka, India </p>
              </div>
              <span className="text-gray-500">June 24 - Aug 24</span>
            </div>
           
           <p> Joined as SDE Intern at AUMHUM, I worked on React on their codebase, frameworks
                like tailwind,Bootstrap,worked on flutter,learned new-tech to upgrade my skills.
                Worked on various Routes and fixes the issues and also worked on SEO, also worked
                on GITHUB Action Workflow for build, automation and deployment.</p> 
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Salesforce Developer Program Intern</h3>
                <p className="text-gray-600">SmartInternz</p>
                <p className="text-gray-600">Remote</p>
              </div>
              <span className="text-gray-500">Nov 23 - Jan 24</span>
            </div>
           <p> Learnt Salesforce Fundamentals, Organisational Setup, Relationship & Process
               Automation, Types Of Flows & Security, Apex, Testing & Debugging & VS Code
               Setup & CLI Setup Lightning Web Components (LWC) & API.</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Airline Management System</h3>
              <p className="text-gray-700 mb-4">Developed and deployed an airline management system on Microsoft Azure, implementing scaling and tuning techniques to optimise performance and handle increased demand. Key features include autoscaling, load balancing, and integration with Azure SQL Database for data management. The system provides a user-
friendly interface for managing flights, reservations, and passenger information, and offers real-time flight tracking and notifications.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Azure</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Game Development : Nought & snakes using Java</h3>
              <p className="text-gray-700 mb-4">Game development project using Java, implementing classic game mechanics with modern features.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Graphics</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OPENGL,FreeGLUT</span>
              </div>
            </div>

             <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Healthcare Management System by using Micro-services through Docker.</h3>
              <p className="text-gray-700 mb-4">Developed a scalable, cloud-agnostic healthcare management system using micro-services and Docker containerisation. The system provides healthcare providers with a user-
friendly interface to access patient records, appointments, and other essential information.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Micro-services Architecture</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker Containerisation</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PHP</span>
                 <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">J.P. Morgan Software Engineering Virtual Experience</h3>
              <p className="text-gray-700 mb-4">
                Set up a local dev environment and fixed broken repository files to improve web application output. Used JPMorgan Chase's Perspective library to generate live trading data visualization.
              </p>
              <a 
                href="https://lnkd.in/gnK9A2Z2" 
                className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project Details →
              </a>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Visualization</span>
              </div>
            </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">ISP: Automation System</h3>
              <p className="text-gray-700 mb-4">
                Used Java frameworks like JavaFX or React, front-end developers created user-friendly online                    and mobile app interfaces, incorporate real-time data visualisation, and provide self-service                   capabilities that allow users to manage their accounts, adjust their plans, and fix problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaFx</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">SQL</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Azure</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Foundation in MERN</span>
              
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Git/Github</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Docker/Kubernetes/Swarm</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Swarm</span>
            </div>
          </div>
        </div>
      </div>
       <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Honours and Certifications</h2>
          <ul className="space-y-2">
            <li>AUMHUM SDE Internship Certificate</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>J.P. Morgan - Software Engineering Job Simulation</li>
            <li>Frontend Developer React Certificate </li>
            <li>AWS Academy Cloud Security Foundations </li>
            <li>AWS Academy Cloud Web Application Builder</li>
            <li>AWS Academy Micro-services and CI/CD Pipeline Builder</li>
            <li>Salesforce Developer Internship</li>
            <li>AMCAT Certified Data Processing Specialist</li>
            <li>AWS Academy Cloud Developing</li>
            <li>AWS Academy Cloud Architecting</li>
            <li>Internship Certification - Corizo</li>
            <li>Web Developers Certification - Coursera </li>
            <li>AWS Academy: Introduction to Cloud</li>
            <li>Intro to Graphic Design Certification - Great Learning</li>
            <li>UI/UX Certification - Great Learning</li>
            <li>Google Analytics - Great Learning</li>
            <li>Introduction to DevOps - Great Learning</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Kinshuk Srivastava. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com/kinshukxz" className="hover:text-gray-300">
                <Github size={20} />
              </a>
              <a href="http://www.linkedin.com/in/kinshuk-srivastava-57932a241" className="hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-gray-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;