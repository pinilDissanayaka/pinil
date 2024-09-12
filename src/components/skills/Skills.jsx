import React from 'react'
import './skills.css';
import Language from './Language';
import Databases from './Database';
import Library from './Library';
import Framework from './Framework';
import Tool from './Tool';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills_container container grid">
          <Language />
          <Framework />
          <Library />
          <Databases />
          <Tool />
        </div>
    </section>
  )
}

export default Skills