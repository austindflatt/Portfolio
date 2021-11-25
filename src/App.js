import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeaderNav from './components/Header/Header';
import Main from './components/Main/Main';
import ProjectsCollection from './components/ProjectsCollection/ProjectsCollection';
import AboutPage from './components/AboutPage/AboutPage';
import Uses from './components/Uses/Uses';
import Contact from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/404/404';
import GlobalStyle from './components/styles/GlobalStyle';


const App = () => {


  return (
    <div>
      <BrowserRouter>
      <HeaderNav />
      <Helmet>
        <title>Austin Flatt | Software Engineer</title>
        <meta name='description' content='Personal portfolio of Austin Flatt, Software Engineer based in Louisville, Kentucky.' />
        <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, ui/ux designer, mern, react, python, django, html, css, javascript, programmer, coder, seo' />
        <meta property="og:image" content='%PUBLIC_URL%/AustinFlatt.jpg' />
        <meta property="og:description" content='Personal portfolio website of Austin Flatt, Software Engineer and UI/UX Designer.' />
      </Helmet>
      <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={AboutPage} />
      <Route exact path='/projects' component={ProjectsCollection} />
      <Route path='/uses' component={Uses} />
      <Route path='/contact' component={Contact} />
      <Route component={PageNotFound} />
      </Switch>
      <GlobalStyle />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
