import React from 'react';

    const journeyData = {
      title: "Your 40-Day Transformation Journey",
      steps: [
        {
          phase: "Foundation",
          step: 1,
          title: "Health History Analysis",
          description: "Complete assessment of your current health status and personalized protocol design"
        },
        {
          phase: "Foundation",
          step: 2,
          title: "Environment Optimization",
          description: "Setting up your space and life for maximum fasting success"
        },
        {
          phase: "Foundation",
          step: 3,
          title: "Protocol Preparation",
          description: "Gathering supplies and preparing your body for the journey ahead"
        },
        {
          phase: "Deep Transformation",
          step: 4,
          title: "Gentle Entry",
          description: "Skillfully transitioning into your fasting state with expert guidance"
        },
        {
          phase: "Deep Transformation",
          step: 5,
          title: "Detoxification Activation",
          description: "Supporting your body's natural cleansing processes"
        },
        {
          phase: "Deep Transformation",
          step: 6,
          title: "Energy Enhancement",
          description: "Optimizing your protocol for maximum vitality"
        },
        {
          phase: "Deep Transformation",
          step: 7,
          title: "Cellular Renewal",
          description: "Deepening the healing process at the cellular level"
        },
        {
          phase: "Lasting Integration",
          step: 8,
          title: "Mindful Transition",
          description: "Strategic reintegration while maintaining benefits"
        },
        {
          phase: "Lasting Integration",
          step: 9,
          title: "Lifetime Integration",
          description: "Establishing your long-term maintenance plan"
        }
      ]
    };

    const Journey = () => {
      return (
        <section className="journey">
          <div className="container">
            <h2>{journeyData.title}</h2>
            {journeyData.steps.map((step, index) => (
              <div key={index}>
                <h3>{step.title} ({step.phase})</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };

    export default Journey;
