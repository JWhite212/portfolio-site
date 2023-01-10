import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio Homepage" />
    <section className="hero text-center container" id="hero">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-heavy">Jamie's Portfolio Homepage </h1>
          <p className="lead fw-normal text-muted">
            Welcome to this Bootstrap 5 Gatsby Starter
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/about" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div>
    </section>

    {/* About Section */}

    <section className="about py-5 text-center container" id="about">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Jamie's Portfolio Homepage </h1>
          <p className="lead text-muted">
            Welcome to this Bootstrap 5 Gatsby Starter
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/about" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div>
    </section>

    {/* Skills Section */}

    <section className="projects py-5 text-center container" id="skills">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Jamie's Portfolio Homepage </h1>
          <p className="lead text-muted">
            Welcome to this Bootstrap 5 Gatsby Starter
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/about" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div>
    </section>

    {/* Projects Section */}

    <section className="projects py-5 text-center container" id="projects">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Jamie's Portfolio Homepage </h1>
          <p className="lead text-muted">
            Welcome to this Bootstrap 5 Gatsby Starter
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/about" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div>
    </section>

    {/* Contact Me Section */}

    <section className="contact py-5 text-center container" id="contact">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Jamie's Portfolio Homepage </h1>
          <p className="lead text-muted">
            Welcome to this Bootstrap 5 Gatsby Starter
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/about" className="btn btn-primary my-2">
          About
        </Link>
        <Link to="/page-2" className="btn btn-secondary my-2">
          Go to page 2
        </Link>
      </div>
    </section>

    
  </Layout>
)

export default IndexPage
