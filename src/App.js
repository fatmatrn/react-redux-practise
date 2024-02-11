import { Button } from "react-bootstrap";
import "./App.css"
import HelloWorld from "./component/hello-world/HelloWorld";
import Map2 from "./component/map/Map2";
import Parent from "./component/props/Parent";
import Image2 from "./component/image/Image2";
import UseState from "./component/useState/UseState";
import Counter from "./component/useState/Counter";
import Fetch from "./component/useeffect/Fetch";
import Useref from "./component/useref/Useref";
import DarkMode from "./component/dark-mode/DarkMode";
import { useSelector } from "react-redux";





function App() {
  const darkMode =  useSelector((state)=>state.theme.darkMode);


  return (
   <div style={{margin:"100px",height:"500px"}}  className={darkMode ? "dark"  : ""}>
{/* <HelloWorld/>
<Map2/> 

<Parent/>
<Image2/>
<UseState/>
<Counter/>


<Fetch/>
<Useref/>*/}

<DarkMode/>
    </div>
  );
}

export default App;
