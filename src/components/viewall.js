import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,List, ListItem, ListItemContent} from 'react-mdl';
import { Link } from 'react-router-dom';

import tempWeeb from './images/basedweebgirl2.jpg';
import tempNier from './images/basednier.jpg';
import tempOverwatch from './images/basedoverwatch.jpg';
import tempFatego from './images/basedfatego.jpg';
import tempDokidoki from './images/baseddokidoki.jpg';
import tempDeus from './images/baseddeus.jpg';
import tempTekken from './images/basedtekken.jpg';
import tempFortnite from './images/basedfortnite.jpg';
import tempKh from './images/basedkingdomhearts.jpg';
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
import tempZelda from './images/basedzelda.jpg';
import tempBf5 from './images/basedbattle.jpg';
import tempStardew from'./images/basedstardew.jpg';
import tempRedDead from './images/basedred.jpg';
import tempSmash from './images/basedsmash.jpg';
import tempKh2 from './images/basedkingdomhearts.png';
import tempFall from './images/basedfallout.jpg';
import tempSea from './images/basedsea.jpg';
import tempWeeb2 from './images/basedweebgirl4.jpg';




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
              src = {tempForza}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Forza Motorsport 7 Is A Racing Video Game Developed By Turn 10 Studios And Published By Microsoft Studios</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=QITXLdS3eW0" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempMonster}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Monster Hunter: World Is An Action Role-Playing Game Developed And Published By Capcom.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=OotQrKEqe94" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSkyrim}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>The Elder Scrolls V: Skyrim Is An Action Role-Playing Video Game Developed By Bethesda Game Studios</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=JSRtYpNRoN0" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempGod}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>God Of War Is An Action-Adventure Video Game Developed By Santa Monica Studios</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=K0u_kAWLJOA" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          <Card shadow={5} style={{Width: '400', margin: 'auto'}}>
            <img
              src = {tempTekken}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Tekken 7 Is A Fighting Game Developed And Published By Bandai Namco Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=WmMOE5oC3_g" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=7DvRo4o6rpw" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
              <Button colored>Buy</Button>
               <a href="https://www.youtube.com/watch?v=kB1663FTpzU" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Link to="/userpage">  <Button colored>Exchange</Button> </Link>
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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=FqnKB22pOC0" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>


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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=4bx02CEISLI" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
            <Button colored>Buy</Button>
            <a href="https://www.youtube.com/watch?v=Kq5KWLqUewc" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
            </a>
            <Button colored>Exchange</Button>
            </CardActions>
          </Card>

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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=2gUtfBmw86Y" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=LTCry58NSf8" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempCodb}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>COD: Black Ops 4 Is A Multiplayer First-Person Shooter Developed By Treyarch And Published By Activision.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=6kqe2ICmTxc" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
              <h6>Street Fighter V Is A Fighting Video Game Developed By Capcom And Dimps.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=EUWmpAjO0iw" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempCsgo}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Counter-Strike: Global Offensive Is A Multiplayer First-Person Shooter Video Game Developed By Valve.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=edYCtaNueQY" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDishonor}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Dishonored Is A 2012 Stealth Action-Adventure Video Game Developed By Arkane Studios.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=VeIn3WjbVbw" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempPubg}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>PlayerUnknown's Battlegrounds Is An Online Multiplayer Battle Royale Game Developed By PUBG Corporation.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=4rG9noTfb4A" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSc2}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Starcraft II Is A Military Science Fiction Real-Time Strategy Video Game Developed By Blizzard.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=M_XwzBMTJaM" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempNeptunia}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Megadimension Neptunia VIIR Is A Japanese Role-Playing Game In The HyperDimension Neptunia Series.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=KeUG3nLiHp8" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempLast}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>The Last Of Us Is An Action-Adventure Survival Horror Video Game Developed By Naughty Dog. </h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=46ohP30YA_Y" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=oBI0MU73nlc" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempGta}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Grand Theft Auto V Is An Action-Adventure Video Game Developed By Rockstar.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=hBvMSP7cI-Q" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempDiablo}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Diablo III Is A Dungeon Crawler Action Role-Playing Video Game Developed By Blizzard Entertainment.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=M2TpNQhfkp4" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
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
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=MmB9b5njVbA" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempZelda}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>The Legend of Zelda: Breath of the Wild Is An Action-Adventure Game Published By Nintendo.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=1rPxiXXxftE" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempRedDead}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Red Dead Redemption Is A Western-Themed Action-Adventure Game Developed And Published By Rockstar.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=-o7rES_3ymA" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempBf5}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Battlefield V Is A First-Person Shooter Video Game Developed And Published By Electronic Arts.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=a7ZpQadiyqs" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempStardew}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Stardew Valley Is An Indie Farming Simulation Role-Playing Video Game Published By ChuckleFish.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=ot7uXNQskhs" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempFall}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Fallout 76 Is An Online Action Role-Playing Game Developed And Published By Bethesda.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=M9FGaan35s0" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempKh2}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Kingdom Hearts HD 1.5 Remix Is An HD Remastered Collection Of Original Series Developed By Square Enix.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=5UnnJlGNBTg" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSmash}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Super Smash Bros. Ultimate Is A Crossover Fighting Game Developed By Bandai And Published By Nintendo.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=BnpmjTMI12c" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempSea}
              height = '480px'
              width = '330px'
              />
            <CardText>
              <h6>Sea Of Thieves Is An Action-Adventure Video Game Developed By Rare And Published By Microsoft Studios.</h6>
            </CardText>
            <CardActions border>
              <Button colored>Buy</Button>
              <a href="https://www.youtube.com/watch?v=r5JIBaasuE8" rel="noopener noreferrer" target="_blank">
              <Button colored>Trailer</Button>
              </a>
              <Button colored>Exchange</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
          </Cell>



          </Grid>
          </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {tempWeeb2}
          height = '500px'
          width = '500px'
          /></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {tempWeeb2}
          height = '500px'
          width = '500px'
          /></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {tempWeeb2}
          height = '500px'
          width = '500px'
          alighn
          /></div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {tempWeeb2}
          height = '500px'
          width = '500px'
          /></div>
      )
    } else if(this.state.activeTab === 5) {
      return (
        <div><h1>TO BE IMPLEMENTED IN THE FUTURE</h1>
        <img
          src = {tempWeeb2}
          height = '500px'
          width = '500px'
          />
        </div>
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
          <Tab><h6>Android</h6></Tab>
          <Tab><h6>Apple</h6></Tab>
          <Tab><h6>Art</h6></Tab>
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
