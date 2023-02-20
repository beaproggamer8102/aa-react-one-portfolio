import  NavBar  from "./component/NavBar";
import { Home } from "./component/Home";
import  SocialLinks  from "./component/SocialLinks";
import  About  from "./component/About";
import  Portfolio  from "./component/Portfolio";
import  Experiance  from "./component/Experiance";
import  Contact  from "./component/Contact";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio />
      <Experiance/>
      <Contact/>



      <SocialLinks/>

    </div>
  );
}

export default App;
