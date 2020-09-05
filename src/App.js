import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, HeaderRow, Navigation, Content,
            Drawer, Footer, FooterSection, FooterLinkList } from 'react-mdl';
// import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import LinkIcon from "@material-ui/icons/Link";
import {Grid, Avatar, Paper} from "@material-ui/core";
import {Link} from 'react-scroll';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root1: {
      display: 'flex',
      width: '80vw',
      height: '50vh',
      marginLeft: '5vw',
    },

    root2: {
        display: 'flex',
        width: '30vw',
        height: '20vh',
        marginLeft: '70vw',
      },

    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      width: '50vw',
      top: '1vh',
    },
    cover: {
      width: '45vw',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    linkIcon: {
      top: '1vh',
      height: 30,
      width: 30,
    },
  }));

  

function App() {

    const classes = useStyles();
    const theme = useTheme();

  return (
    <div>
        <div >
            <Layout fixedHeader style={{height: '10%', position: 'relative'}}>
                {/* <div style={{position: "fixed", top: 0, width: "100vw", margin: "auto", "zIndex": 100}}> */}
                    <Header style={{height: '4vh', position: "fixed", top: 0, width: "100vw", margin: "auto", zIndex: '100', backgroundColor: '#373737'}}>
                        <HeaderRow id="Header" title=" " style={{color: 'white'}}>
                            <Navigation>
                                {/* <Button> */}
                                    <Link to="AboutMe" smooth={true} duration={1000} >About</Link>
                                {/* </Button> */}
                                <Link to="Education" smooth={true} duration={1000} >Education</Link>
                                <Link to="Experience" smooth={true} duration={1000} >Experience</Link>
                                <Link to="Projects" smooth={true} duration={1000} >Projects</Link>
                                <Link to="Contact" smooth={true} duration={1000} >Resume/Contact</Link>
                            </Navigation>
                        </HeaderRow>
                    </Header>
                    <Drawer title="Contents" style={{position: "fixed", top: 0, margin: "auto", "zIndex": 100}}>
                        <Navigation>
                            <Link to="AboutMe" smooth={true} duration={1000} >About</Link>
                            <Link to="Education" smooth={true} duration={1000} >Education</Link>
                            <Link to="Experience" smooth={true} duration={1000} >Experience</Link>
                            <Link to="Projects" smooth={true} duration={1000} >Projects</Link>
                            <a href="https://drive.google.com/file/d/12J9dcTJsAcN8n0QiT8DjwBo-QsV-UPdX/view?usp=sharing">Resume</a>
                            <Link to="Contact" smooth={true} duration={1000} >Resume/Contact</Link>
                        </Navigation>
                    </Drawer>
                {/* </div> */}
                
                {/* Panel 1 */}
                <Content style={{height: '100vh', background: `url(${require('./img/whitesmoke.jpg')}) center / cover`, marginTop: "64px"}}>
                    <div className="page-content">
                        <div id='LandingText' style={{fontSize: '10vh', lineHeight: '0.75' }}>
                            <div>Hi there,</div>
                            <br></br>
                            <div>I'm Phan Anh.</div>
                        </div>


                    </div>
                </Content>

                {/* Panel 2 - About Me */}
                <Content style={{height: '100vh', background: 'Smoke'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Avatar alt="PN Picture" src={`url(${require('./img/profile.jpg')}) center / cover`} style={{background: `url(${require('./img/profile.jpg')}) center / cover`, top: '20vh', left: '5vw', height: '40vh', width: '20vw' }} > </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <div className="page-content" id="AboutMe">
                                <div id='AboutMeText' style={{fontSize: '8vh', lineHeight: '0.75' }}>
                                    <div>About me</div>
                                    <br></br>
                                    <h3 style={{fontSize: '4vh'}}>I'm currently a first year M.S in Computer Science student at Columbia University. My interests involve healthcare, tech, and photography. I previously worked in the San Francisco Bay Area as a Life Sciences Consultant.</h3>
                                </div>
                            </div>
                        </Grid>  
                    </Grid>
                </Content>
                

                {/* Panel 3 - Education */}
                <Content style={{height: '180vh',background: 'DarkGrey'}}>
                    <div className="page-content" id="Education">
                        <div id='EducationText' style={{fontSize: '8vh', lineHeight: '0.75' }}>
                             <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <div>Education</div>
                                    <br></br>
                                    
                                </Grid>
                                <Grid item xs={12}/>

                                {/* Education 1 */}
                                <Grid item xs={4}><h1 style={{fontSize: '4vh'}}>Columbia University</h1></Grid>
                                <Grid item xs={5}/>
                                <Grid item xs={3}><h1 style={{fontSize: '4vh', fontStyle: "italic"}}>Sep 2020  -  May 2022</h1></Grid>

                                <Grid item xs={4}><h2 style={{fontSize: '3vh'}}>M.S in Computer Science</h2></Grid>
                                <Grid item xs={5}/>
                                {/* <Grid item xs={3}><h2 style={{fontSize: '3vh', lineHeight: '0' }}>GPA: TBD</h2></Grid> */}
                                <Grid item xs={12}/>
                                <Grid item xs={12}/>
                                <Grid item xs={12}/>
                                
                                <br></br>
                                
                                {/* Education 2 */}
                                <Grid item xs={7}><h1 style={{fontSize: '4vh'}}>Tufts University</h1></Grid>
                                <Grid item xs={2}/>
                                <Grid item xs={3}><h1 style={{fontSize: '4vh', fontStyle: "italic"}}>Sep 2015  -  May 2019</h1></Grid>

                                <Grid item xs={7}><h2 style={{fontSize: '3vh'}}>B.S in Biology, w. Minor in Computer Science</h2></Grid>
                                <Grid item xs={2}/>
                                <Grid item xs={3}><h2 style={{fontSize: '3vh'}}>GPA: 3.8</h2></Grid>
                                <Grid item xs={12}/>
                                <Grid item xs={12}/>
                                <Grid item xs={12}/>
                                <Grid item xs={12}/>

                                <br></br>

                                <Grid item xs={4}/>
                                <Grid item xs={4}/>
                                {/* <Grid item xs={4} style={{textAlign: 'center', alignContent: 'center'}}>
                                    <a style={{background: `url(${require('./img/profile.jpg')}) center / cover`, top: '20vh', left: '5vw', height: '40vh', width: '20vw' }} ></a>
                                </Grid> */}
                                <Grid item xs={4}/>
                                <Grid item xs={4}/>
                                <Grid item xs={4} style={{textAlign: 'center', fontSize: '8vh'}}><h1>Relevant Coursework</h1></Grid>
                                <Grid item xs={4}/>
                                <Grid item xs={4}/>
                                <Grid item xs={4} style={{textAlign: 'center'}}><h4>Machine Learning | Visualization | Databases | Web Programming | Algorithms | Applied Statistics | Computation Theory | Data Structures</h4></Grid>
                                <Grid item xs={4}/>
                                
                                
                            </Grid>
                        </div>
                    </div>  
                </Content>

                {/* Panel 4 - Experience */}
                <Content style={{height: '320vh',background: 'Grey'}}>
                    <div className="page-content" id="Experience">
                        <div id='ExperienceText' style={{fontSize: '8vh', lineHeight: '0.75' }}>
                            <div>Experience</div>
                            <br></br>
                            <VerticalTimeline >
                                {/* Job 1 */}
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{fontSize:'3vh', background: 'rgb(50, 158, 243)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(50, 158, 243)' }}
                                    date="Sep 2019 - July 2020"
                                    iconStyle={{ background: 'rgb(0, 145, 251)', color: '#fff' }}
                                    icon={<WorkIcon />}
                                >
                                    <h1 className="vertical-timeline-element-title" style={{fontSize: '4vh'}}>Associate Consultant</h1>
                                    <h3 className="vertical-timeline-element-subtitle" style={{left: '1vh', fontSize: '2vh', color: 'smoke'}}>San Francisco, CA</h3>
                                    <h4 style={{fontSize: '1.5vh', color: 'black'}}>
                                    Building and Automating Analyses, Strategy Consulting, Improving Productivity Tools
                                    </h4>
                                </VerticalTimelineElement>

                                {/* Job 2 */}
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{fontSize:'3vh', background: 'rgb(237, 192, 41)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(237, 192, 41)' }}
                                    date="Jun 2018 - Aug 2018"
                                    iconStyle={{ background: 'rgb(237, 192, 41)', color: '#fff' }}
                                    icon={<WorkIcon />}
                                >
                                    <h1 className="vertical-timeline-element-title" style={{fontSize: '4vh'}}>Summer Associate</h1>
                                    <h3 className="vertical-timeline-element-subtitle" style={{left: '1vh', fontSize: '2vh', color: 'smoke'}}>Boston, MA</h3>
                                    <h4 style={{fontSize: '1.5vh', color: 'black'}}>
                                    Developing Market Research Analyses, Strategy Consulting, Research Project on "Blockchains in Healthcare"
                                    </h4>
                                </VerticalTimelineElement>
                                

                                {/* Job 3 */}
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Jan 2018 - May 2018"
                                    contentStyle={{fontSize:'3vh', background: 'rgb(183, 221, 249)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(183, 221, 249)' }}
                                    iconStyle={{background: 'rgb(183, 221, 249)', color: '#fff' }}
                                    icon={<SchoolIcon />}
                                >
                                    <h1 className="vertical-timeline-element-title" style={{fontSize: '4vh'}}>Teaching Assistant, Tufts University</h1>
                                    <h3 className="vertical-timeline-element-subtitle" style={{left: '1vh', fontSize: '2vh', color: 'smoke'}}>San Francisco, CA</h3>
                                    <h4 style={{fontSize: '1.5vh', color: 'black'}}>
                                    Lab Preparations, Office Hours, Grading
                                    </h4>
                                </VerticalTimelineElement>

                                {/* Job 4 */}
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="Jan 2016 - May 2018"
                                    contentStyle={{fontSize:'3vh',  background: 'rgb(202, 249, 183)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(202, 249, 183)' }}
                                    iconStyle={{ background: 'rgb(202, 249, 183)', color: '#fff' }}
                                    icon={<SchoolIcon />}
                                >
                                    <h1 className="vertical-timeline-element-title" style={{fontSize: '4vh',color: 'rgb(82,82,82)'}}>Researcher, Tufts University</h1>
                                    <h3 className="vertical-timeline-element-subtitle" style={{left: '1vh', fontSize: '2vh', color: 'rgb(82,82,82)'}}>Medford, MA</h3>
                                    <h4 style={{fontSize: '1.5vh', color: 'rgb(170,170,170)'}}>
                                    Conducting Primary Research, Data Analysis, Developed Novel Drug-Delivery System
                                    </h4>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                            {/* <h1>Associate Consultant - Putnam Associates</h1>
                            <h1>Summer Associate - Putnam Associates</h1>
                            <h1>Teaching Assistant - Tufts University</h1>
                            <h1>Researcher - Levin Lab</h1> */}
                        </div>
                    </div>
                </Content>

                {/* Panel 5 - Projects */}
                <Content style={{height: '375vh',background: 'Black'}}>
                    <div className="page-content" id="Projects">
                        <div id='ProjectsText' style={{fontSize: '8vh', lineHeight: '0.75' }}>
                            <div>Projects</div>
                            <br></br>
                            <br></br>

                            {/* Card 1 */}
                            <Card className={classes.root1}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h3" variant="h3">
                                        FinAidDB (In Progress)
                                    </Typography>
                                    <br/>
                                    <Typography variant="h6" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {/* <LinkIcon className={classes.linkIcon} onClick={event =>  window.location.href='https://github.com/phananh1096'}> </LinkIcon> */}
                                    </IconButton>
                                    </div>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={require('./img/database-icon.png')}
                                    title="Live from space album cover"
                                    // source: https://pixabay.com/illustrations/database-icon-mobile-technology-2389207/
                                    // credit: https://www.instagram.com/memed.nrh/
                                />
                            </Card>

                            <br></br><br></br>
                            
                            {/* Card 2 */}
                            <Card className={classes.root1}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h3" variant="h3">
                                        InternMaps
                                    </Typography>
                                    <br></br>
                                    <Typography variant="h6" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                    <IconButton aria-label="previous" >
                                        {/* <LinkIcon className={classes.linkIcon} onClick={event =>  window.location.href='https://intern-maps.herokuapp.com/'}> </LinkIcon> */}
                                    </IconButton>
                                    
                                    </div>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={require('./img/map.png')}
                                    title="Live from space album cover"
                                    // source: https://www.flaticon.com/free-icon/map_235861#
                                />
                            </Card>

                            <br></br><br></br>
                            
                            {/* Card 3 */}
                            <Card className={classes.root1}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h3" variant="h3">
                                        God-Jammit
                                    </Typography>
                                    <br></br>
                                    <Typography variant="h6" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        <LinkIcon className={classes.linkIcon} onClick={event =>  window.location.href='http://god-jammit.herokuapp.com/'}> </LinkIcon>
                                    </IconButton>
                                    </div>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={require('./img/gj-2.png')}
                                    title="Live from space album cover"  
                                />
                            </Card>
                            <br></br><br></br>
                            
                            {/* Card 4 */}
                            <Card className={classes.root1}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h3" variant="h3">
                                        Smells Fishy
                                    </Typography>
                                    <br></br>
                                    <Typography variant="h6" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        <LinkIcon className={classes.linkIcon} onClick={event =>  window.location.href='https://jacoma.github.io/smellsfishy.github.io/'}> </LinkIcon>
                                    </IconButton>
                                    </div>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={require('./img/smells-fishy.png')}
                                    title="Live from space album cover"
                                />
                            </Card>

                            <br></br><br></br>

                            {/* Card 5 */}
                            <Card className={classes.root1}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                    <Typography component="h3" variant="h3">
                                        2048
                                    </Typography>
                                    <br></br>
                                    <Typography variant="h6" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    </CardContent>
                                    <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        <LinkIcon className={classes.linkIcon} onClick={event =>  window.location.href='https://github.com/phananh1096/2048'}> </LinkIcon>
                                    </IconButton>
                                    </div>
                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={require('./img/2048_logo.png')}
                                    title="Live from space album cover"
                                />
                            </Card>
                        </div>
                    </div>

                    
                </Content>

                

                {/* Panel 5 - Contact (Use footer) */}
                <Footer size="mini" id="Contact">
                    <FooterSection type="left" logo="Contact">
                        <FooterLinkList>
                            <a href="mailto:pn2363@columbia.edu">Email</a>
                            <a href="https://github.com/phananh1096">Github</a>
                            <a href="https://www.linkedin.com/in/phananh-nguyen/">LinkedIn</a>
                            <a href="https://drive.google.com/file/d/12J9dcTJsAcN8n0QiT8DjwBo-QsV-UPdX/view?usp=sharing">Resume</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
                
            </Layout>
        </div>
    </div>
  );

//   function click () {
//     document.getElementById('html,body').animate({
//         scrollTop: document.getElementById(".second").offset().top},
//         'slow');
//     }
}

export default App;
