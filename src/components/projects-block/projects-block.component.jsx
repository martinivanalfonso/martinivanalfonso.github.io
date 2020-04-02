import React from "react";
import MediaCard from "../media-card/media-card.component";

import styled from 'styled-components'

const ProjectBlockOneContainer = styled.div`
display: grid;
grid-template-columns: ${window.innerWidth < 960 ? "1fr" : "1fr 1fr"};
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
      info="E-commerce responsive clothing shop created using React, Redux and styled-components library and configured to fetch data from a real time database."
      link="https://martinivanalfonso.github.io/CrownClothing/"
/>
    <MediaCard
      imageUrl="https://i.ibb.co/N3j6DGG/myproblemcloud.png"
      title="My Problem Cloud"
      info="Interactive website created to store logic problems and their solution"
      link="https://martinivanalfonso.github.io/MyProblemCloud/"
    />
        <MediaCard
      imageUrl="https://i.ibb.co/LQN4hVs/monstersrolodex.png"
      title="Monsters Rolodex"
      info="Creative feature implementing a search functional component."
      link="https://martinivanalfonso.github.io/MonstersRolodex/"
    />
    {
      window.innerWidth < 960 ?
      ''
      :
    <MediaCard
      imageUrl="https://i.ibb.co/tLct13h/spu-ea68c8-ogi2-3cwn3bmfojjlb56e.jpg"
      title="Vitality Shot"
      info="Modern website created to introduce a product using  user friendly animation"
      link="https://martinivanalfonso.github.io/ProductPage/"
    />
    }
  </ProjectBlockOneContainer>
);

export default ProjectsBlockone;
