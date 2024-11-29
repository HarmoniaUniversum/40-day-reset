import React from 'react';

    const faqData = [
      {
        question: "Is juice fasting safe?",
        answer: "Under proper supervision, juice fasting is both safe and incredibly beneficial. My program provides daily monitoring and expert guidance to ensure your safety and optimal results. Unlike unsupervised fasting, which can be risky, this structured approach includes careful preparation, monitoring, and professional support throughout your journey."
      },
      {
        question: "What exactly happens during the 40 days?",
        answer: "Your transformation unfolds in three distinct phases. We begin with careful preparation and mindset work, move into the supervised fasting period, and conclude with strategic reintegration. Each phase is carefully designed to ensure both immediate results and lasting transformation."
      },
      {
        question: "How much weight can I expect to release?",
        answer: "While results vary, most clients release 20-40 pounds during their reset. However, this program offers far more than weight loss. Clients consistently report improved mental clarity, enhanced energy, better sleep, and a complete transformation in their relationship with food."
      },
      {
        question: "Can I work during this program?",
        answer: "Absolutely. The program is designed for busy professionals. Many clients report increased productivity and mental clarity during their reset. We'll work together to structure your protocol around your specific schedule and responsibilities."
      },
      {
        question: "What kind of support do I receive?",
        answer: "You'll have comprehensive support throughout your journey, including three private coaching sessions, daily messaging support, and complete protocol materials. I'm here to guide you through every step, answer questions, and help you navigate any challenges that arise."
      },
      {
        question: "What if I have health conditions?",
        answer: "While supervised fasting can be beneficial for many health conditions, we'll review your specific situation during our initial consultation. Some conditions may require modifications to the protocol, which is why each program is customized to the individual."
      },
      {
        question: "How is this different from other fasting programs?",
        answer: "This program combines proven fasting protocols with comprehensive support and personalized guidance. Unlike generic programs or apps, you receive individual attention and adjustments based on your unique needs and responses throughout the journey."
      },
      {
        question: "Will the results last?",
        answer: "Yes, when you follow the program as designed. The program includes specific strategies for maintaining your transformation long-term. We focus not just on the fasting period but on building sustainable habits and understanding that support lasting change."
      },
      {
        question: "What if I've tried fasting before and struggled?",
        answer: "Many of my most successful clients had previously attempted fasting on their own without success. The difference lies in the structured support, professional guidance, and proven protocols that make this program effective even for those who have struggled in the past."
      },
      {
        question: "How do I know if I'm ready for this?",
        answer: "If you're feeling called to make a profound change in your health and are willing to commit to the process, you're ready. We begin with careful preparation to ensure you have the tools and mindset needed for success."
      },
      {
        question: "What happens after the 40 days?",
        answer: "You'll receive specific guidance for maintaining your results, including reintegration protocols and long-term strategies. You'll also have lifetime access to the program materials for future reference."
      },
      {
        question: "What if I need more support?",
        answer: "While the program includes comprehensive support, additional coaching sessions are available if needed. My goal is to ensure you have everything you need for success."
      }
    ];

    const FAQ = () => {
      return (
        <section className="faq">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            {faqData.map((item, index) => (
              <div key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };

    export default FAQ;
