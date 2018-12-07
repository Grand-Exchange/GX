import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import tempLogo from './images/basedmesos.png';
import tempDeku from './images/deku.gif';
import { Link } from 'react-router-dom';


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
          <h8> Where The Trading Magic Begins</h8>
          <div class = "bottomright"><Link to ="./aboutus" style = {{textDecoration:'none', color: 'white'}}>About Us</Link></div>
          <div class = "bottomright2"><Link to ="./terms" style = {{textDecoration:'none', color: 'white'}}>Terms Of Use</Link></div>
          <div class = "bottomright3"><Link to ="./privacypol" style = {{textDecoration:'none', color: 'white'}}>Privacy Policy</Link></div>
          </div>
          </Cell>
        </Grid>
      </div>


    )
  }
}

export default Landing;
