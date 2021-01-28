import React from "react";
import MediaCard from "../media-card/media-card.component";

import styled from "styled-components";

const ProjectBlockOneContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  width: 50%;
  justify-items: center;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    width: 90%;
  } 
`;

const MainProject = () => (
  <ProjectBlockOneContainer>
    <MediaCard
      imageUrl="https://i.ibb.co/RbJSVNR/gogoal-cover.png"
      title="GoGoal Mobile App"
      info="Cross platform (IOS & Android) App that provides simple and advanced mathematical functions to help you track your savings and expenses and make smarter decisions about your financial goals. Packed with tons of goal ideas and tips to help you get the most out of your saving."
      link="https://play.google.com/store/apps/details?id=com.gogoal.app"
      fullScreen
    />
  </ProjectBlockOneContainer>
);

export default MainProject;
