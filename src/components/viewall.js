import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,List, ListItem, ListItemContent} from 'react-mdl';
import game1 from './images/basedmushroom.png';
import tempNier from './images/basednier.jpg';
import tempOverwatch from './images/basedoverwatch.jpg';
import tempFatego from './images/basedfatego.jpg';
import tempDokidoki from './images/baseddokidoki.jpg';
import tempSmash from './images/basedsmash.jpg';
import tempTekken from './images/basedtekken.jpg';
import tempFortnite from './images/basedfortnite.png';
import tempKh from './images/basedkingdomhearts.png';



class ViewAll extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="viewall-grid">
          <Grid className="aboutus-grid">

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempTekken}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Tekken 7 Is A Fighting Game Developed And Published By Bandai Namco Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFatego}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Fate/Grand Order Is A Role-Playing Game Based On The Fate/Stay Night Visual Novel By Type-Moon.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>



          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempOverwatch}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Overwatch Is A Team-Based Multiplayer First-Person Shooter Developed By Blizzard Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>



          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempNier}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Nier: Automata Is A Japanese Action Role-Playing Game Developed By PlatinumGames And Square Enix.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>



          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDokidoki}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Doki Doki Literature Club! Is A 2017 American Visual Novel Developed By Team Salvato For Microsoft.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>




          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSmash}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Super Smash Bros. Ultimate Is A Crossover Fighting Game Published By Nintendo.</h6>
            </CardText>
            <CardActions border>
            <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>




          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFortnite}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Fortnite Is A Online Battle-Royale Video Game First Released In 2017 And Developed By Epic Games.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>



          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempKh}
              height = '415px'
              width = '330px'
              />
            <CardText>
              <h6>Kingdom Hearts Is A Series Of Role-Playing Games Owned By Disney And Developed By Square Enix.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <Button colored>Details</Button>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>
          </Grid>
          </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1></div>
      )
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><h6>Gaming</h6></Tab>
          <Tab><h6>Textbooks</h6></Tab>
          <Tab><h6>Fashion</h6></Tab>
          <Tab><h6>Devices</h6></Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

    </div>
    )
  }
}

export default ViewAll;
