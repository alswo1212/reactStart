import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
// Routes는 한번에 하나의 Route만 랜더링 하기 위한 태그이다. 
function App() {
  return (<Router>
            <Routes> 
              <Route path={`${process.env.PUBLIC_URL}`} element={<Home />}></Route>
              <Route path="/movie/:id" element ={<Detail/>}></Route>
            </Routes>
        </Router>
  );
}
export default App;