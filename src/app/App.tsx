import './App.scss';
import {Routes, Route} from 'react-router-dom';
// import Register from "./Register/Register";
import Partners from "./Partners/Partners";
// import Partner from "./Partner/Partner";

function App() {
    return (
        <div className="app">
            <Routes>
                {/*<Route path='/' element={<Register/>}/>*/}
                <Route path='/' element={<Partners/>}/>
                {/*<Route path='*' element={<Partner/>}/>*/}
            </Routes>
        </div>
    )
}

export default App;
