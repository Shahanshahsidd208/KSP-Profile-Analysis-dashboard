import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import './index.css'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Privacy from './components/Privacy.jsx';
import Terms from './components/Terms.jsx';
import Dashboard from './components/Dashboard.jsx';
import DataManagement from './components/DataManagement.jsx';
import Logout from './components/Logout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'kannada' : 'english');
    };

    return (
        <React.StrictMode>
            <ToastContainer />
            <Router>
                <Routes>
                    <Route path="/" element={<Layout language={language} toggleLanguage={toggleLanguage} />}>
                        <Route path="/" element={<Home language={language} />} />
                        <Route path="/about" element={<About language={language} />} />
                        <Route path="/contact" element={<Contact language={language} />} />
                        <Route path="/privacy" element={<Privacy language={language}/>} />
                        <Route path="/terms" element={<Terms language={language} />} />
                        <Route path="/dashboard" element={<Dashboard language={language} />} />
                        <Route path="/data" element={<DataManagement />} />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
            </Router>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
