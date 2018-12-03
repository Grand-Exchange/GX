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
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Grand Exchange</Link>} scroll>
            <Navigation>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/viewall">View All</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/userpage">User Page</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
              <Link to="/">Hello, Username</Link>
              <Link to="/userpage">User Page</Link>
              <Link to="/login">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/viewall">View All</Link>
              <Link to="/">Sign Out</Link>
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