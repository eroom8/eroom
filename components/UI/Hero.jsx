import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import heroImg from "../../public/images/prof-img.png";
import classes from "../../styles/hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Eric Muthee</h2>
              <h5>
              <Typewriter
              className="mb-4"
              options={{
                strings: ['Software Engineer', 'Mobile Developer','Web Developer','ICT Support'],
                autoStart: true,
                loop: true,
              }}
              /> 
              </h5>
             </div>
              <div className="mt-5">
                <motion.button className="primary__btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                  <a href="#contact" >Hire me</a>
                  
                </motion.button> 
            </div>
            <div className={`${classes.social__links}`}>

              <Link href="https://github.com/eroom8">
                <i className="ri-github-line"></i>
              </Link>
             
              <Link href="https://www.linkedin.com/in/eric-muthee-697985233">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/eric.muthee/">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="https://twitter.com/EricMuthee11?t=6faKPptEMoHVwtP_4n0MKg&s=03">
                <i className="ri-twitter-line"></i>
              </Link>
              <Link href="https://wa.me/+254706361004">
                <i className="ri-whatsapp-fill"></i>
              </Link>
            
            
              </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <motion.div className={`${classes.hero__img} text-end`}
           animate={{
            y: [-1000,0],
            }}
          transition={{
            delay:1,
             duration:[1],
             type: "spring", bounce: 0.25 ,  
               }}>
              <Image alt="hero-image" src={heroImg} width="400" height="400"/>
              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
            
              <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 Years</h5>
                </div>
              </div>
              </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
