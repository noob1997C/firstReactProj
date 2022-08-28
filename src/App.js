import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Messages from './components/Messages/Messages';
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
              <Route path='/messages' element={<Messages messages={props.state.messagesPage}/>}/>
              <Route path='/profile' element={<Profile posts={props.state.profilePage} addPost={props.addPost}/>}/>
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
