import React, { Component } from 'react';
import {Grid, Cell,List, ListItem, ListItemContent, Card, CardText, CardActions, Button} from 'react-mdl';
import { Link } from 'react-router-dom';

import tempLogo from './images/basedweebgirl1.jpg';
import tempUser from './images/user1.jpg';
import tempMap from './images/staticmap.png';

class Exchange extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>Profiles</h1>
          </Cell>
          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempLogo}
              height = '300px'
              width = '350px'
              />
            <CardActions border>
              <Button colored>Details</Button>
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '500', margin: 'auto'}}>
            <img
              src = {tempLogo}
              height = '300px'
              width = '350px'
              />
            <CardActions border>
              <Button colored>Details</Button>
            </CardActions>
          </Card>

          <Cell col = {12}>
        </Cell>



    <Cell col ={12}>
          <h1>Map</h1>
          </Cell>



          <Cell col = {12}>
            <img
              src = {tempMap}
              height = '600px'
              width = '600px'
            />
        </Cell>

        </Grid>


      </div>


    )
  }
}

export default Exchange;
