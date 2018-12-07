import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import tempWeeb from './images/basedweebgirl5.jpg';
import { Link } from 'react-router-dom';


class Terms extends Component {
  render() {
    return(
      <div className="aboutus-body">
        <Grid className="aboutus-grid">
        <Cell col ={12}>
          <h1>Privacy Policy</h1>
        </Cell>
               <h3>We Will Not Sell Or Distribute Your Private Data Unless For Monetary Gain.</h3>
        <Cell col={12}>
            <img
                 src={tempWeeb}
                 alt="avatar"
                style={{height: '500px',width:'500px'}}
            />
          </Cell>


        </Grid>
      </div>

    )
  }
}

export default Terms;
