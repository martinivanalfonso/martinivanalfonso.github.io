import React from 'react';
import './App.css';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { ReactComponent as Sun} from './assets/sun.svg'
import { ReactComponent as ProcessBuilding} from './assets/process_building.svg'

class App extends React.Component {
  render() {
    return(
    <Parallax ref={ ref => (this.parallax = ref)} pages={3} >
       <ParallaxLayer offset={0} speed={0}  style={{ backgroundColor: '#702632' }} />
       <ParallaxLayer offset={1} speed={0}  style={{ backgroundColor: '#40434E' }} />
       <ParallaxLayer offset={2} speed={0}  style={{ backgroundColor: '#381460' }} />

       <ParallaxLayer offset={1.15} speed={0.7}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Sun style={{ width: '20%', marginLeft: '20%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={0.15} speed={0.3}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <ProcessBuilding style={{ width: '20%', marginLeft: '70%'}}/>
       </ParallaxLayer>


       <ParallaxLayer offset={0} speed={-0.3} onClick={() => this.parallax.scrollTo(1)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{width: '80%'}}>Hello there! this is my portfolio website</h1>
       </ParallaxLayer>
       <ParallaxLayer offset={1} speed={0.3} onClick={() => this.parallax.scrollTo(2)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{width: '80%'}}>And these are my projects!</h1>
        <p style={{width: '80%'}}>Most of them involve Javacript, specifically ReactJS which I find quite an exciting and powerful library</p>
       </ParallaxLayer>
       <ParallaxLayer offset={2} speed={0.3} onClick={() => this.parallax.scrollTo(0)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{width: '80%'}}>Feel free to contact me here:</h1>
       </ParallaxLayer>
    </Parallax>
  );
}}

export default App;
