import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import tempLogo from './images/basedrikka.jpg';
import tempLogo2 from './images/basedakane.jpg';
import tempLogo3 from './images/basedmushroom.png';


class AboutUs extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>The Squad</h1>
        </Cell>
          <Cell col={6}>
            <h2>Ken L.</h2>
            <img
              src={tempLogo}
              alt="avatar"
              style={{height: '250px'}}
               />

             <p style={{ width: '80%', margin: 'auto', paddingTop: '25px'}}>Developed The Front-End. Double Majoring In Computer Science And Mathematics With A Specialization In Mathematical Finance. Currently Have Research Interests In Information Theory And The Applications Of Artificial Intelligence And Machine Learning In Quantitative Finance.</p>

          </Cell>
          <Cell col={6}>
            <hr/>

            <div className="aboutus-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    000-000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <e className="fa fa-envelope" aria-hidden="true"/>
                    Email@Email.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <g className="fa fa-github" aria-hidden="true"/>
                    GitHub.com/Example
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <l className="fa fa-linkedin" aria-hidden="true"/>
                    LinkedIn.com/Example
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>


          <Cell col={6}>
            <h2>Sunny L.</h2>
            <img
              src={tempLogo3}
              alt="avatar"
              style={{height: '250px'}}
               />

             <p style={{ width: '75%', margin: 'auto', paddingTop: '25px'}}>I Think He Developed The Back-End. Professional Maplestory Player. Legendary Chaos Raider. Current Interests Are In Computer And Network Security.</p>

          </Cell>
          <Cell col={6}>
            <hr/>

            <div className="aboutus-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    000-000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <e className="fa fa-envelope" aria-hidden="true"/>
                    Email@Email.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <g className="fa fa-github" aria-hidden="true"/>
                     GitHub.com/Example
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <l className="fa fa-linkedin" aria-hidden="true"/>
                    LinkedIn.com/Example
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>



          <Cell col={6}>
            <h2>Gary L.</h2>
            <img
              src={tempLogo2}
              alt="avatar"
              style={{height: '250px'}}
               />

             <p style={{ width: '75%', margin: 'auto', paddingTop: '25px'}}>QA Dude. The Computer Engineer Major Guy. I Don't Know About This One.</p>

          </Cell>

          <Cell col={6}>
            <hr/>

            <div className="aboutus-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    000-000-0000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <e className="fa fa-envelope" aria-hidden="true"/>
                    Email@Email.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <g className="fa fa-github" aria-hidden="true"/>
                    GitHub.com/Example
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Consolas'}}>
                    <l className="fa fa-linkedin" aria-hidden="true"/>
                    LinkedIn.com/Example
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default AboutUs;
