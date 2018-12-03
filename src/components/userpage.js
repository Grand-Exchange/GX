import React, { Component } from 'react';
import {Grid, Cell,List, ListItem, ListItemContent, Card, CardText, CardActions, Button} from 'react-mdl';
import tempLogo from './images/basedweebgirl1.jpg'
import tempNier from './images/basednier.jpg';
import tempOverwatch from './images/basedoverwatch.jpg';
import tempFatego from './images/basedfatego.jpg';
import tempDokidoki from './images/baseddokidoki.jpg';
import tempSmash from './images/basedsmash.jpg';
import tempTekken from './images/basedtekken.jpg';
import tempFortnite from './images/basedfortnite.png';
import tempKh from './images/basedkingdomhearts.png';


class UserPage extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>Profile</h1>
        </Cell>
          <Cell col={6}>
            <h2>Sunny L</h2>
            <img
              src={tempLogo}
              alt="avatar"
              style={{height: '330px', width: '330px'}}
               />

             <p style={{ width: '80%', margin: 'auto', paddingTop: '25px'}}>Weaboo: A Big Fan Of Japanese Games And Animation</p>

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
              height = '400px'
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
              height = '400px'
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
              src = {tempDokidoki}
              height = '400px'
              width = '330px'
              />
            <CardText>
              <h6>Doki Doki Literature Club! Is A 2017 American Visual Novel Developed By Team Salvato For Microsoft.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFatego}
              height = '400px'
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


          <Cell col = {12}>
          <h2>Currently Have</h2>
          </Cell>
          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFortnite}
              height = '400px'
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
              height = '400px'
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
              height = '400px'
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
              src = {tempSmash}
              height = '400px'
              width = '330px'
              />
            <CardText>
              <h6>Super Smash Bros. Ultimate Is A Crossover Fighting Game Published By Nintendo.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>




        </Grid>


      </div>

    )
  }
}

export default UserPage;
