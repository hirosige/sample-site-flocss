import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import News from './components/news/News';
import Topics from './components/topics/Topics';
import Docs from './components/docs/Docs';
import Blog from './components/blog/Blog';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Layout>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/news" component={News} />
              <Route exact path="/topics" component={Topics} />
              <Route exact path="/docs" component={Docs} />
              <Route exact path="/blog" component={Blog} />
            </Layout>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
