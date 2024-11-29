import React from 'react';

    const testimonialsData = [
      {
        quote: "The death-in-life of shame and hopelessness is gone. I received a technique which I can employ for a lifetime. This fast made me stop drinking, which I needed, made me stop eating bad foods, which I needed, and allowed me to see my food addictions for what they were.",
        author: "J.C.",
        role: "University Senior"
      },
      {
        quote: "Over a year ago, I completed my first program. Today, I feel so much more knowledgeable about how my body functions. This was a pleasurable journey and truly has been an awesome experience.",
        author: "E.L., Ph.D.",
        role: "Professor"
      },
      {
        quote: "My blood sugar and cholesterol were normal, and my blood pressure was low. By this point, the fast was such a pleasant routine and the results so spectacular that I decided to extend. I lost 74 lbs total.",
        author: "A.C.",
        role: "Attorney"
      },
      {
        quote: "The clarity this cleansing process provides for me is unmatched throughout my existence. I am more compassionate, not only with others, but importantly, with myself.",
        author: "L.S.",
        role: "Media Executive"
      },
      {
        quote: "I have found a strength and a purpose I'm not about to let go. I am LIVING! Do you know how absolutely freeing it is not to be weighed down by my previous food obsession?!",
        author: "V.B.",
        role: "Physician"
      },
      {
        quote: "You have truly saved my life, and probably my soul! I've never felt so good, and I really didn't want the fast to end. The weight loss and good physical shape are a plus, but the spiritual and emotional gains are even larger.",
        author: "D.B.",
        role: "Surgeon"
      },
      {
        quote: "It felt like my body was sculpting itself into the form it should be. Overall, it is like my whole being has had a giant reset button pushed--Body, Mind, Soul and Spirit.",
        author: "S.C.",
        role: "University Student"
      },
      {
        quote: "This program completely transformed my relationship with food and health. Having now been a chef for more than 21 years, I'd long been in the habit of eating everything! Now, I feel better in the last year and a half than I ever had in the ten years before it.",
        author: "O.B.",
        role: "Restaurant Owner"
      }
    ];

    const Testimonials = () => {
      return (
        <section className="testimonials">
          <div className="container">
            <h2>Client Transformations</h2>
            {testimonialsData.map((testimonial, index) => (
              <blockquote key={index}>
                <p>"{testimonial.quote}"</p>
                <footer>
                  <cite>{testimonial.author}, {testimonial.role}</cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      );
    };

    export default Testimonials;
