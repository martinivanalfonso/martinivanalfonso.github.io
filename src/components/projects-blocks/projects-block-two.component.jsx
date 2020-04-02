import React from "react";
import MediaCard from "../media-card/media-card.component";

import styled from 'styled-components'

const ProjectBlockTwoContainer = styled.div`
display: ${window.innerWidth < 960 ? 'none' : 'grid'};
grid-template-columns: 1fr 1fr;
grid-gap: 10vw;
width: 90%;
justify-items: center;
`;

const ProjectsBlockTwo = () => (
  <ProjectBlockTwoContainer>
    <MediaCard
      imageUrl="https://i.ibb.co/LQN4hVs/monstersrolodex.png"
      title="Monsters Rolodex"
      info="Creative feature implementing a search functional component."
      link="https://martinivanalfonso.github.io/MonstersRolodex/"
    />
    <MediaCard
      imageUrl="https://i.ibb.co/tLct13h/spu-ea68c8-ogi2-3cwn3bmfojjlb56e.jpg"
      title="Vitality Shot"
      info="Modern website created to introduce a product using  user friendly animation"
      link="https://martinivanalfonso.github.io/ProductPage/"
    />
  </ProjectBlockTwoContainer>
);

export default ProjectsBlockTwo;
