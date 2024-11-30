import React from 'react';

    const benefitsData = [
      {
        title: "Profound Physical Transformation",
        description: "Release 20-40 pounds while your skin glows, your eyes brighten, and your body naturally returns to its optimal state"
      },
      {
        title: "Extraordinary Mental Clarity",
        description: "Experience what clients call 'the fog lifting' - razor-sharp focus, enhanced memory, and a level of clarity you haven't felt in years"
      },
      {
        title: "Freedom From Food Addiction",
        description: "Break free from emotional eating, sugar cravings, and destructive food patterns that have held you back"
      },
      {
        title: "Renewed Cellular Vitality",
        description: "Watch chronic health issues fade as your body activates its natural healing abilities through deep cellular cleansing"
      },
      {
        title: "Sustained Peak Energy",
        description: "Move from afternoon crashes to consistent, all-day energy that doesn't require caffeine or stimulants"
      },
      {
        title: "Emotional Liberation",
        description: "Discover a new sense of calm and emotional balance that transforms how you handle life's challenges"
      }
    ];

    const Benefits = () => {
      return (
        <section className="benefits">
          <div className="container">
            <h2>Core Benefits</h2>
            <div className="benefits-grid">
              {benefitsData.map((benefit, index) => (
                <div className="benefit" key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Benefits;
