import SkillsCard from "../skillsCard/SkillsCard";
import Html from "../../assets/images/html.png";
import Css from "../../assets/images/css.png";
import Js from "../../assets/images/javascript.png";
import reactLogo from "../../assets/images/reactLogo.png";
import Redux from "../../assets/images/redux.png";
import BootStrap from "../../assets/images/bootstrap.png";
import Figma from "../../assets/images/figma.png";
import Communication from "../../assets/images/communication.png";
import ProblemSolving from "../../assets/images/problemSolving.png";
import TeamWork from "../../assets/images/teamWork.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h3 className="Title">Skills:</h3>
      <Slider {...settings}>
        <div>
          <SkillsCard img={Html} title="HTML" />
        </div>
        <div>
          <SkillsCard img={Css} title="CSS" />
        </div>
        <div>
          <SkillsCard img={Js} title="JAVASCRIPT" />
        </div>
        <div>
          <SkillsCard img={reactLogo} title="REACT" />
        </div>
        <div>
          <SkillsCard img={Redux} title="REDUX" />
        </div>
        <div>
          <SkillsCard img={BootStrap} title="BOOTSTRAP" />
        </div>
        <div>
          <SkillsCard img={Figma} title="FIGMA" />
        </div>
        <div>
          <SkillsCard img={Communication} title="COMMUNICATION" />
        </div>
        <div>
          <SkillsCard img={ProblemSolving} title="PROBLEM SOLVING" />
        </div>
        <div>
          <SkillsCard img={TeamWork} title="TEAM WORK" />
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
