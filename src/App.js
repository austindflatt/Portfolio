import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { HeaderNav, Main, Login, Register, Contact, AboutPage, ProjectsCollection, PageNotFound, Footer, GlobalStyle, AdminDashboard } from './components';
import { AuthContext } from './context/authContext/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

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
          <Route path='/login'>
            {user ? <Redirect to='/admin'/> : <Login />}
          </Route>
          
          <Route path='/register'>
            {user ? <Redirect to='/'/> : <Register />}
          </Route>

          <Route path='/admin'>
            {user ? <AdminDashboard /> : <Main />}
          </Route>

          <Route path='/contact' component={Contact} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/projects' component={ProjectsCollection} />
          <Route path='/contact' component={Contact} />
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