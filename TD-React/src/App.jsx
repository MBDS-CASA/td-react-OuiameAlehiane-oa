import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import image from './assets/vignette_par_defaut.jpg';
import data from './data.json';

// Composant pour les informations aléatoires
const RandomInfo = () => {
    const [item, setItem] = useState(getRandomItem(data));

    const handleRandomize = () => {
        const randomItem = getRandomItem(data);
        setItem(randomItem);
    };

    return (
        <div className="random-info-section">
            <h4>Les Information Aléatoire</h4>
            <p>
                <strong>Course :</strong> {item.course}
            </p>
            <p>
                <strong>Student :</strong> {item.student.firstname} {item.student.lastname}
            </p>
            <p>
                <strong>Date :</strong> {item.date}
            </p>
            <p>
                <strong>Grade :</strong> {item.grade}
            </p>
            <button onClick={handleRandomize} className="randomize-button">
                Un autre élément
            </button>
        </div>
    );
};

// Composants simples pour chaque section du menu
const Notes = () => (
    <div>
        <h3>Section Notes</h3>
        <p>Contenu de la section Notes</p>
    </div>
);

const Etudiants = () => (
    <div>
        <h3>Liste des Étudiants</h3>
        <p>Section en construction...</p>
    </div>
);

const Matieres = () => (
    <div>
        <h3>Liste des Matières</h3>
        <p>Section en construction...</p>
    </div>
);

const APropos = () => (
    <div>
        <h3>À Propos</h3>
        <p>Cette application est un exemple d'utilisation de React.</p>
    </div>
);

function Header() {
    return (
        <header>
            <img src={image} alt="Default vignette"/>
            <h1>Introduction à React</h1>
            <h2>A la découverte des premières notions de React</h2>
        </header>
    );
}

function MainContent() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('fr-FR', { month: 'long' });
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    return (
        <div className="main-content">
            <p>Ici, nous afficherons des informations intéressantes :)</p>
            <p>Bonjour, on est le {day} {month} {year} et il est {hour}:{minute}:{second}</p>
        </div>
    );
}

function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    return (
        <footer>
            <p>{year} - Alehiane Ouiame, Tous droits réservés.</p>
        </footer>
    );
}

function getRandomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function Menu() {
    const [activeItem, setActiveItem] = useState('Notes');

    const menuItems = [
        { id: 'Notes', component: <Notes /> },
        { id: 'Etudiants', component: <Etudiants /> },
        { id: 'Matières', component: <Matieres /> },
        { id: 'A propos', component: <APropos /> }
    ];

    return (
        <div className="menu-container">
            <div className="menu-buttons">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        className={`menu-button ${activeItem === item.id ? 'active' : ''}`}
                    >
                        {item.id}
                    </button>
                ))}
            </div>
            <div className="content-section">
                {menuItems.find(item => item.id === activeItem)?.component}
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <Header/>
            <Menu/>
            <RandomInfo/>
            <MainContent/>
            <div className="logo-section">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <Footer/>
        </>
    );
}

export default App;