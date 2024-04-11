import React, { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

const servicesData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setTestimonials(data);
      });
  });
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      {/* services */}
      <section className="service">
        <h2 className="h3 service title">What I'm doing</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* Testimonials section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* clients logo */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
