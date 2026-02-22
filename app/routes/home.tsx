import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { ArrowRight, ArrowUpRight, Clock, Layers, Square } from "lucide-react";
import { Button } from "components/ui/Button";
import TiltedCard from './TiltedCard';
import ProjectCard from "components/Projectcard";






export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <div className="home">
      <Navbar />
      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>
          <p>Introducing Structify 2.0</p>
        </div>
        <h1>Build Beautiful spaces at a speed of thought with Structify</h1>

        <p className="subtitle">
          Structify is an AI first design Environment that helps you visualize and ship artechetural projects faster than ever
        </p>
        <div className="actions">
          <a href="#upload" className="cta">
            Start Building <ArrowRight className="icon" />
          </a>
          <Button variant="outline" size="lg" className="demo">
            Watch Demo
          </Button>
        </div>


        <div id="upload" className="upload-shell">
          <div className="grid-overlay" />




          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>
              <h3>Upload your floor plan</h3>
              <p>Suports JPG,PNG formats upto 10 mb</p>
            </div>
            <p>Upload Imaeges</p>
          </div>

        </div>

      </section>
      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>Your Latest work and share community projects all in one place</p>
            </div>
          </div>

          <div className="project-grid">
            <div className="porject-card group">
              <div className="preview">
                {/* <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="project" /> */}

                <ProjectCard
                src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png"
                alt="Project-1"
                caption="Project Mannhaton"
                />

                <div className="badge">
                  <span></span>
                </div>
                <div className="card-body">
                  <div>
                    <h3>Project Manhattan</h3>
                  </div>
                  <div className="meta">
                    <Clock size={12}/>
                    <span>{new Date('01.01.2027')
                    .toLocaleDateString()
                      }</span>
                      <span><br/>By Aarav Singh</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUpRight className=" flex flex-row bg-amber-500 cursor-pointer rounded-full size-8" size={18}/> 
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}
