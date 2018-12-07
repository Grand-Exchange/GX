import React, { Component } from 'react';
import {Grid, Cell,List, ListItem, ListItemContent, Card, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom';

import tempLogo from './images/basedweebgirl1.jpg';
import tempNier from './images/basednier.jpg';
import tempOverwatch from './images/basedoverwatch.jpg';
import tempFatego from './images/basedfatego.jpg';
import tempDokidoki from './images/baseddokidoki.jpg';
import tempDeus from './images/baseddeus.jpg';
import tempTekken from './images/basedtekken.jpg';
import tempFortnite from './images/basedfortnite.jpg';
import tempKh from './images/basedkingdomhearts.png';
import tempForza from './images/basedforza.jpg';
import tempDbz from './images/baseddragonball.jpg';
import tempLast from './images/basedlastofus.jpg';
import tempCodb from './images/basedcodblack.jpg';
import tempGod from './images/basedgow.jpg';
import tempMonster from './images/basedmonster.jpg';
import tempSf5 from './images/basedsf5.jpg';
import tempSkyrim from './images/basedskyrim.png';
import tempHitman from './images/basedhitman.jpg';
import tempCsgo from './images/basedcsgo.jpg';
import tempPubg from './images/basedpubg.jpg';
import tempSc2 from './images/basedsc.jpg';
import tempDiablo from './images/baseddiablo.jpg';
import tempDishonor from './images/baseddishonor.jpg';
import tempNeptunia from './images/basedneptunia.jpg';
import tempGta from './images/basedgta.jpg';
import tempMine from './images/basedminecraft.jpg';


class UserPage extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>Profile</h1>
        </Cell>
          <Cell col={6}>
            <h2>Sunny Memes L</h2>
            <img
              src={tempLogo}
              alt="avatar"
              style={{height: '400px', width: '400px'}}
               />

             <p style={{ width: '80%', margin: 'auto', paddingTop: '25px'}}>Konichihi. I Am A Big Fan Of East Asian Culture - Specifically Japanese. I Like Japanese Games And Stuff!</p>

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

              </List>
            </div>
          </Cell>

          <Cell col = {12}>
          <h2>Wish List</h2>
          </Cell>
          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempTekken}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Tekken 7 Is A Fighting Game Developed And Published By Bandai Namco Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempOverwatch}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Overwatch Is A Team-Based Multiplayer First-Person Shooter Developed By Blizzard Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDeus}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Deus Ex: Human Revolution Is An Action Role-Playing Video Game Developed By Eidos Montréal.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>


          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFatego}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Fate/Grand Order Is A Role-Playing Game Based On The Fate/Stay Night Visual Novel By Type-Moon.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col ={12}
          />

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempNeptunia}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Megadimension Neptunia VII Is A Japanese Role-Playing Game In The HyperDimension Neptunia Series.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempMine}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Minecraft Is A 2011 Sandbox Video Game Created By Swedish Game Developer Markus Persson.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSf5}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Fate/Grand Order Is A Role-Playing Game Based On The Fate/Stay Night Visual Novel By Type-Moon.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDbz}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Dragon Ball FighterZ Is A 2D Fighting Game Developed By Arc System Works.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>


          <Cell col = {12}>
          <h2>Currently Have</h2>
          </Cell>
          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFortnite}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Fortnite Is A Online Battle-Royale Video Game First Released In 2017 And Developed By Epic Games.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempKh}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Kingdom Hearts Is A Series Of Role-Playing Games Owned By Disney And Developed By Square Enix.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempNier}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Nier: Automata Is A Japanese Action Role-Playing Game Developed By PlatinumGames And Square Enix.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>


          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDokidoki}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Doki Doki Literature Club! Is A 2017 American Visual Novel Developed By Team Salvato For Microsoft Windows.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
            <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

        </Grid>


      </div>

    )
  }
}

export default UserPage;
