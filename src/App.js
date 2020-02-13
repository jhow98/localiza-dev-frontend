import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          const {latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  useEffect(() =>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername('');
    setTechs('')
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" required
                        value={github_username}
                        onChange={e => setGithubUsername(e.target.value)}
                        />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologia</label>
            <input type="text" name="techs" id="techs" required
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
              onChange={e => setLatitude(e.target.value)}
              type="number" name="latitude" id="latitude" required value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
              onChange={e => setLongitude(e.target.value)}
              type="number" name="longitude" id="longitude" required value={longitude}/>
            </div>
          </div>
         
         <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
      <ul>
      <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/12552485?s=460&v=4" alt="Jhonatan Lopes"/>
            <div className="user-info">
              <strong>Jhonatan Lopes</strong>
              <span>React JS, React Native, Node.js</span>
            </div>
          </header>
          <p>Desenvolvedor FullStack, Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          <a href="https://github.com/jhow98">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/12552485?s=460&v=4" alt="Jhonatan Lopes"/>
            <div className="user-info">
              <strong>Jhonatan Lopes</strong>
              <span>React JS, React Native, Node.js</span>
            </div>
          </header>
          <p>Desenvolvedor FullStack, Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          <a href="https://github.com/jhow98">Acessar perfil no Github</a>
        </li>
        
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/12552485?s=460&v=4" alt="Jhonatan Lopes"/>
            <div className="user-info">
              <strong>Jhonatan Lopes</strong>
              <span>React JS, React Native, Node.js</span>
            </div>
          </header>
          <p>Desenvolvedor FullStack, Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          <a href="https://github.com/jhow98">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/12552485?s=460&v=4" alt="Jhonatan Lopes"/>
            <div className="user-info">
              <strong>Jhonatan Lopes</strong>
              <span>React JS, React Native, Node.js</span>
            </div>
          </header>
          <p>Desenvolvedor FullStack, Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
          <a href="https://github.com/jhow98">Acessar perfil no Github</a>
        </li>
      </ul>
      </main>
    </div>
  );
}

export default App;
