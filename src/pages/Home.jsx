import React, { useState, useEffect } from 'react';

// components
import { Navbar, Hero, About, Community, Services, JoinUs, Footer, Objective, HowItWorks, Team, FAQs, Blog, Contact, Location } from '../components'
import AllServices from "../components/Services/AllServices";

import '../App.css'
export default function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="bg-white body">
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Community />
                    <Services />
                    <JoinUs />
                    <Footer />
                </>
            )}
        </div>
    );
}