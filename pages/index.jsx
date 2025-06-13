import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollY = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kft0u9l', 'template_u46vvha', e.target, 'HURJsi1Va6m7xRB-N')
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Abhijit <span>Kumar</span>
        </a>
        <i
          id="menu-icon"
          className={`fa-solid fa-bars${menuActive ? ' fa-times' : ''}`}
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        ></i>
        <nav className={`navbar${menuActive ? ' active' : ''}`}>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>
            Education
          </a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>
            Services
          </a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Abhijit</span>{' '}
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            and Computer Science (Hons.) student at Delhi University with a passion for creating seamless web
            applications. As a full-stack developer, I enjoy working across the stack—building intuitive front-end
            experiences with React.js and crafting robust back-end systems using Node.js, Express, and MongoDB .
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/abhijit-kumar-b73512332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/abhijitrajput103" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/abhijit__rajput_?igsh=anBpNmY1MTNxYnpq" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#contact">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="btn-group">
            <a href="#contact" className="btn">
              Hire
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
        <div className="home-img">
     <Image src="/Portfolio/image.jpg" alt="Home Image" width={400} height={500} />
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2027</div>
            <div className="timeline-content">
              <h3>Bachelor of Computer Science</h3>
              <p>Delhi University</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Senior Secondary (12th Grade)</h3>
              <p>Rajdhani Public School</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Secondary (10th Grade)</h3>
              <p>Rajdhani Public School</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>
                Proficient in building responsive and interactive user interfaces using HTML, CSS, and JavaScript along
                with Bootstrap and Tailwind CSS. Experienced with modern frameworks like React and Next.js to create
                dynamic web applications with a focus on performance and accessibility.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Backend Development</h4>
              <p>
                Skilled in developing robust and scalable server-side applications using Node.js and Express.js.
                Experienced in designing and managing databases with MySQL and MongoDB ensuring efficient data handling
                and security. Capable of building RESTful APIs and integrating third-party services to enhance
                functionality.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Fullstack Development</h4>
              <p>
                Developed multiple full-stack projects, integrating frontend and backend technologies. Skilled in using
                React or Next.js for interactive UIs and Node.js with Express.js for server-side development. Familiar
                with MySQL and MongoDB for database management and API integration to create functional web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-box">
          <h2 className="heading">Projects</h2>
          <div className="wrapper">
            <div className="project-item">
              <Image className="img" src="/Portfolio/chat_app.png" alt="Chat App" width={400} height={300} />
              <h2>Live Chat App</h2>
              <p>
                Built a real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js) and
                Socket.IO. Implemented secure user authentication (JWT), message and media encryption, one-on-one and
                group chats, smart replies via OpenAI API, and typing indicators. Focused on performance, scalability,
                and user experience.
              </p>
              <div className="project-links">
                <a href="https://github.com/abhijitrajput103/MERN_CHAT_APP" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://mern-chat-app-qsez.onrender.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>

            <div className="project-item">
              <Image className="img" src="/Portfolio/NETFLIX.webp" alt="Netflix Clone Project" width={400} height={300} />
              <h2>Netflix Clone</h2>
              <p>
                A Netflix clone built using HTML, CSS, and Javascript. The application features a user interface similar
                to Netflix, with a responsive design and interactive elements.
              </p>
              <div className="project-links">
                <a href="https://github.com/abhijitrajput103/Netflix-Clone" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://abhijitrajput103.github.io/Netflix-Clone/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>

            <div className="project-item">
              <Image className="img" src="/Portfolio/ECOMMERCE.webp" alt="Blog Website Project" width={400} height={300} />
              <h2>Ecommerce Website</h2>
              <p>
                A Ecommerce website built using React.js, Node.js and MongoDB. The website allows admin to create, edit,
                and delete products, and allows users to add product and make a payment from their cart in user
                dashboard.
              </p>
              <div className="project-links">
                <a href="https://github.com/abhijitrajput103/E-Mall" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://github.com/abhijitrajput103/E-Mall" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>

            <div className="project-item">
              <Image className="img" src="/Portfolio/Weather.webp" alt="Weather App Project" width={400} height={300} />
              <h2>Weather App</h2>
              <p>
                A weather application that displays the current weather conditions for a given location. The app uses
                the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.
              </p>
              <div className="project-links">
                <a href="https://github.com/abhijitrajput103/Weather-App" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://weather-app-tau-blush-51.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>

            <div className="project-item">
              <Image className="img" src="/Portfolio/oxytours.webp" alt="Expense Tracker Project" width={400} height={300} />
              <h2>Tours & Travel Website</h2>
              <p>
                Allows users to book tours and travel packages. The website features a responsive design, user-friendly
                interface, and interactive elements. Users can view available tours, select a package, and make a
                booking online. Crated using HTML,CSS, Javas\cript and Bootstrap.
              </p>
              <div className="project-links">
                <a href="https://github.com/abhijitrajput103/oxytours" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
                <a href="https://abhijitrajput103.github.io/oxytours/" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fa-solid fa-globe"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>ME</span>
        </h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-box">
              <input type="text" className="form-control" placeholder="Name" name="user_name" required />
              <input type="email" className="form-control" placeholder="Email" name="user_email" required />
            </div>
            <div className="input-box">
              <input type="number" className="form-control" placeholder="Phone" name="user_phone" />
              <input type="text" className="form-control" placeholder="Subject" name="subject" required />
            </div>
          </div>

          <div className="input-group-2">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Message"
              required
            ></textarea>
            <input type="submit" className="btn" value="Send Message" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/abhijit-kumar-b73512332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/abhijitrajput103" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/abhijit__rajput_?igsh=anBpNmY1MTNxYnpq" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#contact">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="#education">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <p className="copyright">&copy; 2023 Abhijit Kumar. All Rights Reserved.</p>
      </footer>
    </>
  );
}
