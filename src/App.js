import React from 'react';
import './App.css';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import ProjectsBlock from './components/projects-block/projects-block.component'
import HeaderIcons from './components/header-icons/header-icons.component'
import HeaderBackground from './components/header-background/header-background.component'

import { ReactComponent as Sun} from './assets/sun.svg'
import { ReactComponent as ProcessBuilding} from './assets/process_building.svg'
import { ReactComponent as Mountain} from './assets/mountain.svg'
import { ReactComponent as DataProcess} from './assets/data_process.svg'
import { ReactComponent as DataAnalytics} from './assets/data_analytics_.svg'
import { ReactComponent as Cloud} from './assets/cloud.svg'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class App extends React.Component {
  render() {
    return(
    <Parallax ref={ ref => (this.parallax = ref)} pages={4} >
       <ParallaxLayer offset={0} speed={0}  style={{ backgroundColor: '#702632' }} />
       <ParallaxLayer offset={1} speed={0}  style={{ backgroundColor: '#40434E' }} />
       <ParallaxLayer offset={2} speed={0}  style={{ backgroundColor: '#40434E' }} />
       <ParallaxLayer offset={3} speed={0}  style={{ backgroundColor: '#381460' }} />

       <ParallaxLayer offset={0} speed={0}>
        <HeaderBackground />
       </ParallaxLayer>
       <ParallaxLayer offset={0} speed={0.3}>
        <HeaderIcons />
       </ParallaxLayer>

       <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.4 }}>
          <Cloud style={{ display: 'block', width: '20%', marginLeft: '25%' }} />
          <Cloud style={{ display: 'block', width: '10%', marginLeft: '45%' }} />
        </ParallaxLayer>
       <ParallaxLayer offset={1} speed={-0.2} style={{ opacity: 0.7 }}>
          <Cloud style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <Cloud style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

       <ParallaxLayer offset={0.25} speed={0.3}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <DataAnalytics style={{ width: `${ window.innerWidth < 960 ? '40%' :'20%'}`, marginLeft: '60%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={1.15} speed={0.7}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Sun style={{ width: '20%', marginLeft: '20%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={2.25} speed={0.9}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <DataProcess style={{ width: '70%', marginRight: '10%', opacity: '0.7'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={3.25} speed={0.9}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <ProcessBuilding style={{ width: '20%', marginRight: '60%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={3} speed={-0.2}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Mountain style={{ width: '20%', marginLeft: '60%'}}/>
       </ParallaxLayer>

       <ParallaxLayer offset={0} speed={-0.2} onClick={() => this.parallax.scrollTo(1)} style={{ display: 'flex', alignItems: 'center', marginLeft: '10%', cursor: 'pointer' }}>
        <h1 style={{width: `${ window.innerWidth < 960 ? '80%' :'60%'}`}}>Hello there!<br />I'm a front-end developer, this is my portfolio website</h1>
       </ParallaxLayer>
       <ParallaxLayer offset={1} speed={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{width: '80%'}}>And these are my projects!</h1>
        <p style={{width: '80%'}}>Most of them involve Javacript, specifically ReactJS which I find quite an exciting and powerful library</p>
        <ProjectsBlock />
       </ParallaxLayer>
       <ParallaxLayer offset={3} speed={0.3} style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10%' }}>
        <h1 style={{width: '80%'}}>Feel free to contact me here:</h1>
        <h4 style={{width: '80%'}}>martinivanalfonso@gmail.com</h4>
        <div>
          <a href="https://github.com/martinivanalfonso" style={{padding: '10px 0px', color: 'black'}}>
            <GitHubIcon />
         </a>
          <a href="https://linkedin.com/in/martinivanalfonso" style={{padding: '10px', color: 'black'}}>
            <LinkedInIcon />
         </a>
        </div>
       </ParallaxLayer>
    </Parallax>
  );
}}

export default App;
