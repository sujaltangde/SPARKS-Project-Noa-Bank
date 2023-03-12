import { About } from "./components/About";
import { Customers } from "./components/Customers";
import { Foot } from "./components/Foot";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Transfer } from "./components/Transfer";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <>


      <Router>
      <Nav Link={Link} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/customers" element={ <Customers />} />
          <Route path="/transfer" element={ <Transfer/> } />
          <Route path="/transactions" element={ <Transactions/> } />
          <Route path="/about" element={ <About />} />

        </Routes>

        <Foot />
      </Router>


    </>
  );
}

export default App;
