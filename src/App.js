import './App.css';
import Banner from './Compountant/Banner';
import NavBar from './Compountant/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Compountant/Skills';
import Projects from './Compountant/Projects';
import Contact from './Compountant/Contact';
import Footer from './Compountant/Footer';
import MailchimpForm from './Compountant/MailchimpForm';

function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <MailchimpForm />
    <Footer />
    </>
  );
}

export default App;
