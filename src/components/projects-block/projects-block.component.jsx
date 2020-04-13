import React from "react";
import MediaCard from "../media-card/media-card.component";

import styled from "styled-components";

const ProjectBlockOneContainer = styled.div`
  display: grid;
  grid-template-columns: ${window.innerWidth < 960 ? "1fr" : "1fr 1fr 1fr"};
  grid-gap: 40px;
  width: 90%;
  justify-items: center;
  margin-top: 20px;
`;

const ProjectsBlockone = () => (
  <ProjectBlockOneContainer>
    <MediaCard
      imageUrl="https://i.ibb.co/cF3Lbt0/crownclothing.png"
      title="Crown Clothing"
      info="E-commerce responsive shop created using React, Redux, HOC and styled-components library and configured to fetch data from a real time database"
      link="https://crown-clothing-martinalfonso.herokuapp.com/"
    />
    <MediaCard
      imageUrl="https://i.ibb.co/BnT3cb7/activecoronavirus.jpg"
      title="Active Corona Virus"
      info="API powered website created to display current data about the coronavirus emergency"
      link="https://martinivanalfonso.github.io/ActiveCoronaVirus/"
    />
    <MediaCard
      imageUrl="https://i.ibb.co/LQN4hVs/monstersrolodex.png"
      title="Monsters Rolodex"
      info="Creative feature implementing a real time search functional component."
      link="https://martinivanalfonso.github.io/MonstersRolodex/"
    />
    {window.innerWidth < 960 ? (
      ""
    ) : (
      <MediaCard
        imageUrl="https://i.ibb.co/tLct13h/spu-ea68c8-ogi2-3cwn3bmfojjlb56e.jpg"
        title="Vitality Shot"
        info="Modern website created to introduce a product through user interactive animations"
        link="https://martinivanalfonso.github.io/ProductPage/"
      />
    )}
    {window.innerWidth < 960 ? (
      ""
    ) : (
      <MediaCard
        imageUrl="https://i.ibb.co/N3j6DGG/myproblemcloud.png"
        title="My Problem Cloud"
        info="Interactive website used to store logic problems and their solution through CRUD operations"
        link="https://martinivanalfonso.github.io/MyProblemCloud/"
      />
    )}
    {window.innerWidth < 960 ? (
      ""
    ) : (
      <MediaCard
        imageUrl="https://i.ibb.co/0J2VYTf/calculatorapp.jpg"
        title="JS Calculator"
        info="Functional calculator that allows you to perform clean and basic mathematical operations"
        link="https://martinivanalfonso.github.io/CalculatorApp/"
      />
    )}
  </ProjectBlockOneContainer>
);

export default ProjectsBlockone;
