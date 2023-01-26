import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HeaderNav, Main, AboutPage, ProjectsCollection, PageNotFound, Footer, GlobalStyle } from './components';
import Uses from './pages/Uses';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Helmet>
          <title>Austin Flatt | Software Engineer</title>
          <meta name='title' content='Austin Flatt - Software Engineer.' />
          <meta name='description' content='Personal portfolio of Austin Flatt, Software Engineer based in Louisville, Kentucky.' />
          <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, mern, react, html, css, javascript, programmer, coder' />
          <meta property="og:title" content='Austin Flatt - Software Engineer.' />
          <meta property="og:description" content='Personal portfolio website of Austin Flatt, Software Engineer based in Louisville, Kentucky.' />
          <meta property="og:image" content='%PUBLIC_URL%/preview.png' />
        </Helmet>
        <HeaderNav />
        <Switch>

          <Route exact path='/' component={Main} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/projects' component={ProjectsCollection} />
          <Route exact path='/uses' component={Uses} />
          <Route path='/404' component={PageNotFound} />
          <Route path='/*' component={PageNotFound} />
          
        </Switch>
        <GlobalStyle />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;