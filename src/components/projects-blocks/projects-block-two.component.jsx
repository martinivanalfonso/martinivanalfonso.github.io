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
      imageUrl="https://i.ibb.co/cF3Lbt0/crownclothing.png"
      title="Crown Clothing"
      info="E-commerce responsive clothing shop created using React, Redux and styled-components library and configured to fetch data from a real time database."
    />
    <MediaCard
      imageUrl="https://i.ibb.co/N3j6DGG/myproblemcloud.png"
      title="My Problem Cloud"
      info="Interactive website created to store logic problems and their solution"
    />
  </ProjectBlockTwoContainer>
);

export default ProjectsBlockTwo;
