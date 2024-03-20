import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from './pages/ButtonPage';
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App(){
  return(
    <div className="container mx-auto mt-10">
      <Sidebar />
      <div className="mt-10">
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage initialCount={5}/>
        </Route>
        
      </div>
    </div>

  )
}

export default App;