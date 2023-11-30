import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Register from "./Register/Register";
import Team from "./Team/Team";
import Partner from "./Partner/Partner";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/partner/:id' element={<Partner/>}/>
            </Routes>
        </div>
    )
}

export default App;
