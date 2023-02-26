import  NavBar  from "./component/NavBar";
import { Home } from "./component/Home";
import  SocialLinks  from "./component/SocialLinks";
import  About  from "./component/About";
import  Portfolio  from "./component/Portfolio";
import  Experiance  from "./component/Experiance";
import  Contact  from "./component/Contact";
import  Certificate  from "./component/Certificate";
import Coding from "./component/Coding";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio />
      <Certificate/>
      <Coding/>
      <Experiance/>
      <Contact recipientEmail="ankitr1602@gmail.com" />




      <SocialLinks/>

    </div>
  );
}

export default App;
