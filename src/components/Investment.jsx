import React from 'react';

    const investmentData = {
      title: "The Complete 40-Day Reset Program",
      price: {
        original: 1997,
        current: 997,
        note: "Limited Beta Pricing"
      },
      features: [
        {
          title: "Three Private Coaching Sessions",
          items: [
            "Initial Deep-Dive Strategy Session",
            "Mid-Journey Optimization Call",
            "Integration & Long-Term Success Planning"
          ]
        },
        {
          title: "Continuous Support When You Need It Most",
          items: [
            "Priority access via WhatsApp/Voxer for 40 days",
            "Expert guidance through every phase",
            "Quick responses to keep you on track"
          ]
        },
        {
          title: "Complete Digital Success Kit",
          items: [
            "Custom Fasting Protocol",
            "Progress Tracking Tools",
            "Mindset Reset Audio Series"
          ]
        },
        {
          title: "Post-Reset Success Materials",
          items: [
            "Strategic Reintegration Guide",
            "Custom Recipe Collection",
            "Lifetime Access to Program Materials"
          ]
        }
      ]
    };

    const Investment = () => {
      return (
        <section className="investment">
          <div className="container">
            <h2>{investmentData.title}</h2>
            <p>Original Price: <del>${investmentData.price.original}</del></p>
            <p>Current Price: <strong>${investmentData.price.current}</strong> ({investmentData.price.note})</p>
            <h3>What's Included:</h3>
            {investmentData.features.map((feature, index) => (
              <div key={index}>
                <h4>{feature.title}</h4>
                <ul>
                  {feature.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );
    };

    export default Investment;
