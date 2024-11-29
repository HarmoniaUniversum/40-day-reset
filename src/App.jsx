import React from 'react';
    import Hero from './components/Hero.jsx';
    import Benefits from './components/Benefits.jsx';
    import Journey from './components/Journey.jsx';
    import Investment from './components/Investment.jsx';
    import About from './components/About.jsx';
    import Testimonials from './components/Testimonials.jsx';
    import FAQ from './components/FAQ.jsx';
    import Guarantee from './components/Guarantee.jsx';
    import CTA from './components/CTA.jsx';

    const App = () => {
      return (
        <div>
          <Hero />
          <Benefits />
          <Journey />
          <Investment />
          <About />
          <Testimonials />
          <FAQ />
          <Guarantee />
          <CTA />
        </div>
      );
    };

    export default App;
