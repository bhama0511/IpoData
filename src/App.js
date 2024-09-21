import './App.css';
import ResponsiveAppBar from './components/AppBar';
import ClosedIpo from './components/closedIpo/ClosedIpo';
import ContactUsFooter from './components/contactUs/ContactUs';
import LandingPage from './components/Landingpage';
import OngoingIpo from './components/ongoingIpo/OngoingIpo';
import UpcommingIpo from './components/upcomingIpo/UpcomingIpo';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <LandingPage/>
      <OngoingIpo/>
      <UpcommingIpo/>
      <ClosedIpo/>
      <ContactUsFooter/>
    </div>
  );
}

export default App;
