import React from 'react';

    const journeyData = {
      title: "Your 90-Day Transformation Journey",
      phases: [
        {
          phase: "Phase I",
          title: "Preparation and Mindset Shift",
          duration: "Steps 1-3",
          description: "In this crucial phase, we'll lay the groundwork for your success. You'll receive your custom-tailored fasting plan, develop the mental resilience needed for your journey, and optimize your environment to support your transformation.",
          features: [
            "Personalized Fasting Plan Creation",
            "Mental and Emotional Readiness",
            "Environment Optimization"
          ],
          emoji: "🩺"
        },
        {
          phase: "Phase II",
          title: "Active Fasting and Detoxification",
          duration: "Steps 4-6",
          description: "This is where the magic happens. As you dive into your personalized juice fasting protocol, you'll experience deep detoxification and a surge in energy and vitality. Our expert support will guide you through any challenges, ensuring you reap maximum benefits.",
          features: [
            "Juice Fasting Initiation",
            "Detoxification Support",
            "Energy and Vitality Boost"
          ],
          emoji: "🍏"
        },
        {
          phase: "Phase III",
          title: "Transition and Lifestyle Integration",
          duration: "Steps 6-9",
          description: "Your transformation doesn't end with the fast. In this final phase, we'll ensure your results last a lifetime. You'll learn how to reintroduce foods mindfully, establish sustainable health habits, and create a long-term plan for continued wellness.",
          features: [
            "Mindful Reintroduction of Solid Foods",
            "Sustainable Healthy Habit Formation",
            "Long-term Health Maintenance Plan"
          ],
          emoji: "🌱"
        }
      ],
      steps: [
        {
          step: 1,
          title: "Health History Analysis",
          description: "Complete assessment of your current health status and personalized protocol design",
          emoji: "🩺",
          phase: "Foundation"
        },
        {
          step: 2,
          title: "Environment Optimization",
          description: "Setting up your space and life for maximum fasting success",
          emoji: "🏡",
          phase: "Foundation"
        },
        {
          step: 3,
          title: "Protocol Preparation",
          description: "Gathering supplies and preparing your body for the journey ahead",
          emoji: "🛒",
          phase: "Foundation"
        },
        {
          step: 4,
          title: "Gentle Entry",
          description: "Skillfully transitioning into your fasting state with expert guidance",
          emoji: "🌅",
          phase: "Deep Transformation"
        },
        {
          step: 5,
          title: "Detoxification Activation",
          description: "Supporting your body's natural cleansing processes",
          emoji: "💧",
          phase: "Deep Transformation"
        },
        {
          step: 6,
          title: "Energy Enhancement",
          description: "Optimizing your protocol for maximum vitality",
          emoji: "⚡",
          phase: "Deep Transformation"
        },
        {
          step: 7,
          title: "Cellular Renewal",
          description: "Deepening the healing process at the cellular level",
          emoji: "🔄",
          phase: "Lasting Integration"
        },
        {
          step: 8,
          title: "Mindful Transition",
          description: "Strategic reintegration while maintaining benefits",
          emoji: "🧘",
          phase: "Lasting Integration"
        },
        {
          step: 9,
          title: "Lifetime Integration",
          description: "Establishing your long-term maintenance plan",
          emoji: "📅",
          phase: "Lasting Integration"
        }
      ]
    };

    const Journey = () => {
      return (
        <section className="journey">
          <div className="container">
            <h2>{journeyData.title}</h2>
            <div className="phases-grid">
              {journeyData.phases.map((phase, index) => (
                <div className="phase" key={index}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-[#2c5530]">{phase.phase}</span>
                    <span className="text-3xl">{phase.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#2c5530]">{phase.title}</h3>
                  <p className="text-sm text-[#2c5530] mb-4">{phase.duration}</p>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="list-none space-y-2">
                    {phase.features.map((feature, idx) => (
                      <li className="flex items-center gap-2 text-gray-600" key={idx}>
                        <span className="text-[#2c5530] font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="steps-grid">
              {journeyData.steps.map((step) => (
                <div className="step" key={step.step}>
                  <span className="step-number">{step.step}.</span>
                  <span className="step-emoji">{step.emoji}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Journey;
