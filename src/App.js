import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"><div className ="bannertextsize">Grand Exchange</div></Link>} scroll>
            <Navigation>
                <Link to="/login"><div className ="bannertextsize">Sign In</div></Link>
                <Link to="/signup"><div className ="bannertextsize">Sign Up</div></Link> 
                <Link to="/viewall"><div className ="bannertextsize">Browse</div></Link>
              {/*}<Link to="/userpage"><div className ="bannertextsize">User Page</div></Link> */}
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
              <Link to="/"><div className ="bannertextsize2">Home</div></Link>
              <Link to="/userpage"><div className ="bannertextsize2">User Page</div></Link>
            {/*  <Link to="/login"><div className ="bannertextsize2">Sign In</div></Link> */}
            {/*  <Link to="/signup"><div className ="bannertextsize2">Sign Up</div></Link> */}
              <Link to="/viewall"><div className ="bannertextsize2">Browse</div></Link>
              <Link to="/"><div className ="bannertextsize2">Sign Out</div></Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
