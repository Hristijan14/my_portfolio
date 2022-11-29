import "./Projects.css";
import ProjectsCard from "../projectsCard/ProjectsCard";
import Star from "../star/Star";
import DBDLogo from "../../assets/images/DBDLogo.jpg";
import NoteBook from "../../assets/images/NoteBook.png";
import StreetStore from "../../assets/images/StreetStore.png";
import RickAndMorty from "../../assets/images/RickAndMortyLogo.png";
import ProgAdvice from "../../assets/images/ProgAdvice.png";
import Hangman from "../../assets/images/Hangman.png";
import Bliss from "../../assets/images/Bliss.png";

const Projects = () => {
  return (
    <div>
      <h3 className="Title">Projects:</h3>
      <div className="project-container">
        <div>
          <a
            href="https://rickandmortyprojectapiapp.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={RickAndMorty} title="Rick And Morty" />
          </a>
        </div>
        <div>
          <a
            href="https://project3-e-comm-app.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={StreetStore} title="Street Shop" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Hristijan14/HangmanGame"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={Hangman} title="Hangman" />
          </a>
        </div>

        <div>
          <a
            href="https://github.com/Hristijan14/Bliss"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={Bliss} title="Bliss" />
          </a>
        </div>

        <div>
          <a
            href="https://programmingadvice.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={ProgAdvice} title="Advice" />
          </a>
        </div>

        <div>
          <a
            href="https://project1-dead-by-daylight.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={DBDLogo} title="Dead By Daylight" />
          </a>
        </div>
        <div>
          <a
            href="https://project2-note-book.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectsCard img={NoteBook} title="Note-Book" />
          </a>
        </div>
      </div>
      <Star />
    </div>
  );
};

export default Projects;
