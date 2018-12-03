import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import tempLogo from './images/basedmesos.png';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= {tempLogo}
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Grand Exchange</h1>
            <hr/>
          <h3>The Premier Exchange Network</h3>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
