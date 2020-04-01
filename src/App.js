import React from 'react';
import './App.css';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import MediaCard from './components/project-view/project-view.component'

import { ReactComponent as Sun} from './assets/sun.svg'
import { ReactComponent as ProcessBuilding} from './assets/process_building.svg'
import { ReactComponent as PieChart} from './assets/pie_chart.svg'

import CropSquareIcon from '@material-ui/icons/CropSquare';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import BugReportIcon from '@material-ui/icons/BugReport';

class App extends React.Component {
  render() {
    const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

    return(
    <Parallax ref={ ref => (this.parallax = ref)} pages={4} >
       <ParallaxLayer offset={0} speed={0}  style={{ backgroundColor: '#702632' }} />
       <ParallaxLayer offset={1} speed={0}  style={{ backgroundColor: '#40434E' }} />
       <ParallaxLayer offset={2} speed={0}  style={{ backgroundColor: '#40434E' }} />
       <ParallaxLayer offset={3} speed={0}  style={{ backgroundColor: '#381460' }} />

       <ParallaxLayer offset={0} speed={0.3}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ width: '90%', height: '90%'}}>
         <CropSquareIcon style={{ width: '40%', marginRight: '60%', fontSize:'4rem'}}/>
         <ChangeHistoryIcon style={{ width: '60%', marginLeft: '60%', fontSize:'8rem'}}/>
         <Yellow>
           <BugReportIcon style={{ width: '10%', marginLeft: '10%', marginTop:'20%'}}/>
         </Yellow>
         </div>
       </ParallaxLayer>


       <ParallaxLayer offset={0.2} speed={0.3}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <PieChart style={{ width: '20%', marginLeft: '60%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={3.25} speed={0.9}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <ProcessBuilding style={{ width: '20%', marginRight: '60%'}}/>
       </ParallaxLayer>
       <ParallaxLayer offset={1.15} speed={0.7}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Sun style={{ width: '20%', marginLeft: '20%'}}/>
       </ParallaxLayer>


       <ParallaxLayer offset={0} speed={-0.3} onClick={() => this.parallax.scrollTo(1)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{width: '80%'}}>Hello there! this is my portfolio website</h1>
       </ParallaxLayer>
       <ParallaxLayer offset={1} speed={0.3} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{width: '80%'}}>And these are my projects!</h1>
        <p style={{width: '80%'}}>Most of them involve Javacript, specifically ReactJS which I find quite an exciting and powerful library</p>
       </ParallaxLayer>
       <ParallaxLayer offset={`${window.innerWidth < 960 ?  '1.7' : '1.3' }`} speed={0.3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{display: 'grid', gridTemplateColumns: `${window.innerWidth < 960 ? '1fr' : '1fr 1fr' }`, gridGap: '10vw', width: '90%', justifyItems: 'center'}}>
        <MediaCard />
        <MediaCard />
        </div>
       </ParallaxLayer>
       <ParallaxLayer offset={3} speed={0.3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{width: '80%'}}>Feel free to contact me here:</h1>
       </ParallaxLayer>
    </Parallax>
  );
}}

export default App;
