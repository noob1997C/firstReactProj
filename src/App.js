import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';



function App(props) {
  // debugger;
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/messages' element={<MessagesContainer/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
