import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import image from './assets/vignette_par_defaut.jpg';
import data from 'C:/Users/PC/Desktop/dossier/td-react-OuiameAlehiane-oa/TD-React/src/data.json';

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
        <>
            <p>Ici, nous afficherons des informations intéressantes :)</p>
            <p>Bonjour, on est le {day} {month} {year} et il est {hour}:{minute}:{second}</p>
        </>
    );
}

function Footer() {
    const now = new Date();
    const year = now.getFullYear();
    return (
        <p>© {year} - Alehiane Ouiame, Tous droits réservés.</p>
    );
}

function getRandomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function Item() {
    const [item, setItem] = useState(getRandomItem(data));

    const handleRandomize = () => {
        const randomItem = getRandomItem(data);
        setItem(randomItem);
    };

    return (
        <div>
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
            <button onClick={handleRandomize}>
                Un autre élément
            </button>
        </div>
    );
}

function Button() {
    const menuItems = [
        'Notes',
        'Etudiants',
        'Matières',
        'A propos'
    ];

    const handleClick = (item) => {
        alert(`Vous avez cliqué sur ${item}`);
    };

    return (
        <div className="flex flex-row justify-around mt-4">
            {menuItems.map((item) => (
                <button
                    key={item}
                    onClick={() => handleClick(item)}
                    className="w-48 px-6 py-3 text-white bg-purple-800 hover:bg-purple-900 rounded-lg
                    shadow-lg transition-all duration-200 font-semibold text-center transform
                    hover:scale-105 hover:translate-x-2"
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

function App() {
    const [count, setCount] = useState(50);

    return (
        <>
            <Header/>
            <Button/>
            <MainContent/>
            <Item/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <Footer/>
        </>
    );
}

export default App;