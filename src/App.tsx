import React, { useState } from 'react';
import { Heart, HeartCrack, Calendar, Car, Briefcase, Sailboat, PawPrint, Gem, MapPin, Camera, Music, Plane, Sparkles, PartyPopper, Tent, Flame } from 'lucide-react';
import signature1 from './assets/signature_1.png';
import signature2 from './assets/signature_2.png';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  note: string;
}

function App() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [showSignature1, setShowSignature1] = useState<string | null>(null);
  const [showSignature2, setShowSignature2] = useState<string | null>(null);
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [fade, setFade] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleCardClick = (eventId: number) => {
    setFlippedCard(flippedCard === eventId ? null : eventId);
  };

  const handleShowSignature1 = () => {
    setShowSignature1("signature1");
  };

  const handleShowSignature2 = () => {
    setShowSignature2("signature2");
  };

  const questions = [
    {
      question: "Our couple song is...",
      options: ["Perfect by Ed Sheeran", "Can't Help Falling in Love by Elvis Presley", "You'll Be In My Heart by Phil Collins", "All of Me by John Legend"],
      answer: "You'll Be In My Heart by Phil Collins"
    },
    {
      question: "Our favorite movie that we watched together was...",
      options: ["Elemental", "Coco", "One Day", "Me Before You"],
      answer: "Elemental"
    },
    {
      question: "Our favorite restaurant to go on dates is...",
      options: ["A cozy Italian place", "A fancy rooftop restaurant", "A small sushi bar", "A fast food drive-thru"],
      answer: "A fancy rooftop restaurant"
    },
    {
      question: "The first gift I ever gave you was...",
      options: ["A handmade card", "A book you always wanted", "A piece of jewelry", "A bouquet of flowers"],
      answer: "A handmade card"
    },
    {
      question: "The place we dream of visiting together is...",
      options: ["Paris, France", "Santorini, Greece", "Tokyo, Japan", "Oslo, Norway"],
      answer: "Tokyo, Japan"
    },
    {
      question: "Our ideal lazy Sunday looks like...",
      options: ["Netflix and cuddles", "Cooking together", "A long walk in the park", "Sleeping in and ordering food"],
      answer: "Netflix and cuddles"
    },
    {
      question: "Our favorite thing to do together is...",
      options: ["Traveling to new places", "Watching movies together", "Playing video games or board games", "Cooking together"],
      answer: "Watching movies together"
    },
    {
      question: "Our favorite dessert to share is...",
      options: ["Chocolate lava cake", "Ice cream sundae", "Cheesecake", "Tiramisu"],
      answer: "Chocolate lava cake"
    },
    {
      question: "The pet name I call you the most is...",
      options: ["Babe", "Honey", "Love", "Sweetie"],
      answer: "Babe"
    },
    {
      question: "If we could have a pet together, it would be...",
      options: ["A dog", "A parrot", "A bunny", "A cat"],
      answer: "A cat"
    },
    {
      question: "Our most memorable date was...",
      options: ["Our first dinner date", "A surprise picnic under the stars", "A road trip to somewhere special", "A spontaneous adventure day"],
      answer: "A spontaneous adventure day"
    },
    {
      question: "If we had a signature couple emoji, it would be...",
      options: ["🤍 (Heart)", "👫 (Holding hands)", "😘 (Kissing face)", "💑 (Couple in love)"],
      answer: "🤍 (Heart)"
    },
    {
      question: "One food we always fight over is...",
      options: ["Pizza toppings", "Spicy or not spicy food", "Sweet or salty snacks", "The last French fry"],
      answer: "The last French fry"
    },
    {
      question: "If we were to recreate one romantic movie scene, it would be from...",
      options: ["The Notebook (Kissing in the rain)", "Titanic (Arms outstretched on a ship)", "Pretty Woman (Shopping spree scene)", "10 Things I Hate About You (Romantic serenade)"],
      answer: "The Notebook (Kissing in the rain)"
    },
    {
      question: "The best thing about our relationship is...",
      options: ["Our laughter together", "The way we support each other", "Our late-night conversations", "The small surprises and gestures"],
      answer: "The way we support each other"
    },
    {
      question: "If we could time travel together, we would visit...",
      options: ["The roaring 1920s", "The romantic Renaissance era", "The 1950s for a classic diner date", "The future to see our dream life"],
      answer: "The romantic Renaissance era"
    },
    {
      question: "Our go-to cuddling position is...",
      options: ["Spooning", "Laying on each other's chest", "Holding hands while lying side by side", "Arms wrapped around each other"],
      answer: "Spooning"
    },
    {
      question: "If we were to cook a meal together, it would be...",
      options: ["A homemade pizza", "Breakfast in bed", "A romantic pasta dinner", "A BBQ feast"],
      answer: "A romantic pasta dinner"
    },
    {
      question: "The thing that made me fall in love with you was...",
      options: ["Your smile", "Your kindness", "Your sense of humor", "Your eyes"],
      answer: "Your eyes"
    },
    {
      question: "Our ideal vacation would be...",
      options: ["A beach getaway", "A cozy cabin in the mountains", "An exciting city adventure", "A road trip with no set destination"],
      answer: "A beach getaway"
    },
    {
      question: "If we were a famous couple, we'd be like...",
      options: ["Romeo and Juliet", "Jack and Rose from Titanic", "Chandler and Monica from Friends", "Prince Harry and Meghan Markle"],
      answer: "Chandler and Monica from Friends"
    },
    {
      question: "Our funniest inside joke is about...",
      options: ["A silly nickname we gave each other", "A hilarious moment from a trip", "A meme we both love", "A random word that always makes us laugh"],
      answer: "A random word that always makes us laugh"
    },
    {
      question: "The best way to cheer me up is...",
      options: ["Giving me a big hug", "Surprising me with my favorite snack", "Playing my favorite song", "Telling me a funny story"],
      answer: "Giving me a big hug"
    },
    {
      question: "If we had a couple's bucket list, the top item would be...",
      options: ["A cross-country road trip", "Taking dance lessons together", "Skydiving (for the adventurous spirit)", "Writing love letters to open in the future"],
      answer: "A cross-country road trip"
    },
    {
      question: "The best date we ever had was...",
      options: ["A simple night walk under the stars", "A surprise getaway trip", "A fun amusement park date", "A candlelit homemade dinner"],
      answer: "A surprise getaway trip"
    }
  ];

  const handleStartQuiz = () => {
    setQuizActive(true);
    setScore(0);
  };

  const handleOptionClick = (option: string) => {
    if (isOptionSelected) return; // Prevent multiple selections
    setIsOptionSelected(true); // Mark option as selected
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setFade(true);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionSelected(false); // Reset selection state for next question
      setFade(false);
    }, 300);
  };

  const handleResetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizActive(false);
    setIsOptionSelected(false);
    setSelectedOption(null);
  };

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      date: "October 12, 2023",
      title: "First Meeting",
      description: "A chance encounter at the local spot for car enthusiasts turned into an adventurous night.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      note: "The moment I saw you, time stood still. Your smile lit up the entire parking lot, and I knew my life would never be the same. ❤️"
    },
    {
      id: 2,
      date: "October 13, 2023",
      title: "First Official Date",
      description: "Warm, tasty coffee at the rooftop restaurant downtown.",
      icon: <Calendar className="w-6 h-6 text-rose-500" />,
      note: "I found myself helplessly attracted to your laugh, your eyes, the way you sipped your coffee, slowly everything. ☕"
    },
    {
      id: 3,
      date: "October 27, 2023",
      title: "First Club Night Together",
      description: "A loud, magical night in a coquette nightclub.",
      icon: <Plane className="w-6 h-6 text-rose-500" />,
      note: "Watching you dance in the fuzzy light, I realized I wanna see you dance like that for the rest of my life. 🍸"
    },
    {
      id: 4,
      date: "October 29, 2023",
      title: "Turning Point",
      description: "A night of confussion, when I almost lost you.",
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      note: "Thank you for not giving up on me when I was really confused and scared of love 🥺"
    },
    {
      id: 5,
      date: "November 16, 2023",
      title: "A very bad night",
      description: "Clearly one of the worst nights of my life",
      icon: <HeartCrack className="w-6 h-6 text-rose-500" />,
      note: "With my ex fucking a random guy in my bed, your maturity truly helped me very much that night 🙏🏻"
    },
    {
      id: 6,
      date: "December 14, 2023",
      title: "Finally Together",
      description: "We finally made our relationship official",
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      note: "Thank you for being patient with me, not giving up and helping me open my eyes, forget the past and focus on the future. 💞"
    },
    {
      id: 7,
      date: "December 31, 2023",
      title: "New Year Party",
      description: "Fun party in Dej, with a lot of singing and dancing",
      icon: <Music className="w-6 h-6 text-rose-500" />,
      note: "You were very beautiful that night and everything was much better with you there. The cake was awesome too. 🎂"
    },
    {
      id: 8,
      date: "February 24, 2024",
      title: "Zoo Expedition",
      description: "Visiting the zoo in Sibiu.",
      icon: <PawPrint className="w-6 h-6 text-rose-500" />,
      note: "It was my first time seeing a tiger and hearing a lion up close. I really enjoyed that I could share that with you. 🦁"
    },
    {
      id: 9,
      date: "April 3, 2024",
      title: "Wife material",
      description: "You made me the best pasta I ever ate.",
      icon: <Gem className="w-6 h-6 text-rose-500" />,
      note: "After we made passionate love, you in your tight black dress, making me pasta in the kitchen of the dorm was a perfect sight. 🍝"
    },
    {
      id: 10,
      date: "April 11, 2024",
      title: "Photoshoot",
      description: "First couple photoshoot together",
      icon: <Camera className="w-6 h-6 text-rose-500" />,
      note: "Walking through that beautiful alley in the forest while posing for the camera was an experience. 📸"
    },
    {
      id: 11,
      date: "April 21, 2024",
      title: "Lake Double Date",
      description: "Went with our former friends to the lake at Iulius Mall.",
      icon: <Sailboat className="w-6 h-6 text-rose-500" />,
      note: "We really had a very good time that day, a lot of fun, jokes, just an overall relaxing day. 🛶"
    },
    {
      id: 12,
      date: "May 11, 2024",
      title: "Car Meet 1",
      description: "I saw many nice cars that day",
      icon: <Car className="w-6 h-6 text-rose-500" />,
      note: "You couldn't come to the meet and hang out so we had our first fight that day, but we pushed through. 🚗"
    },
    {
      id: 13,
      date: "May 18, 2024",
      title: "Meeting Friends",
      description: "An evening with Daria and Blemo",
      icon: <Tent className="w-6 h-6 text-rose-500" />,
      note: "It was a big deal for me that you wanted to introduce me to your friends and I wanted to make a good impression. 🫂"
    },
    {
      id: 14,
      date: "July 14, 2024",
      title: "Weekend Work",
      description: "One day trip to Zalau",
      icon: <Briefcase className="w-6 h-6 text-rose-500" />,
      note: "Spending a day with that nice family in Zalau, playing with the puppies, made me wish for that life with you. 🐶"
    },
    {
      id: 15,
      date: "September 6, 2024",
      title: "Campfire",
      description: "Learning to waltz together for the wedding.",
      icon: <Flame className="w-6 h-6 text-rose-500" />,
      note: "Spending a weekend with our friends at a remote cabin was the most relaxing thing ever and I loved doing it with you. 🔥"
    },
    {
      id: 16,
      date: "September 20, 2024",
      title: "MSST",
      description: "A very funny party",
      icon: <PartyPopper className="w-6 h-6 text-rose-500" />,
      note: "Kickstarting our first project together and going to a great party together in Euphoria always mix well. 🎉"
    },
    {
      id: 17,
      date: "September 28, 2024",
      title: "Car Meet 2",
      description: "The best car meet ever",
      icon: <Car className="w-6 h-6 text-rose-500" />,
      note: "The sounds, the views, the sunset. And sharing it with you made it way better. 😱"
    },
    {
      id: 18,
      date: "December 14, 2024",
      title: "One Year Anniversary",
      description: "Celebrating our first year together with a weekend getaway.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      note: "One year of loving you, and I fall more in love with you every single day. Here's to many more years of us. 🥂"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-rose-900 mb-4">
          Our Love Story
        </h1>
        <p className="text-center text-rose-700 mb-12">A journey of love, laughter, and endless adventures</p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-6 perspective">
                <div
                  className={`card-container cursor-pointer ${
                    flippedCard === event.id ? 'flipped' : ''
                  }`}
                  onClick={() => handleCardClick(event.id)}
                >
                  <div className="card-face card-front bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      {event.icon}
                      <span className="ml-2 text-rose-600 font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>

                  <div className="card-face card-back bg-white p-6 rounded-lg shadow-lg">
                    <div className="h-full flex items-center justify-center bg-rose-50 rounded-lg p-6">
                      <p className="handwritten text-xl text-rose-800 text-center leading-relaxed">
                        {event.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow"></div>
              </div>

              <div className="w-1/2 px-6"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-rose-600 font-semibold handwritten text-3xl">
            " Every love story is beautiful, but ours is my favorite. "
          </p>
          
          <div className="flex items-center justify-center my-12">
            <div className="h-0.5 bg-rose-200 w-32"></div>
            <Heart className="w-8 h-8 text-rose-400 mx-4 float-animation" />
            <div className="h-0.5 bg-rose-200 w-32"></div>
          </div>
        </div>

        <div className="wedding-contract">
          <h2 className="contract-title">Wedding Contract</h2>
          <p className="contract-details">
            Date: <span className="extended-underline handwritten font-semibold">January 29th 2025</span>
            <br />
            Partner 1: <span className="extended-underline handwritten font-semibold">Hategan Ada Maria</span>
            <br />
            Partner 2: <span className="extended-underline handwritten font-semibold">Negreanu-Maior Andrei Gabriel</span>
            <br />
            The parties state that they have entered into a contract of provisional marriage between them. This contract is valid until <span className="extended-underline handwritten font-semibold">January 1st 3000</span> and the parties agree to observe the following terms and conditions:
            <br />
            1. The parties agree to be married for life.
            <br />
            2. The parties agree to live together in a home.
            <br />
            3. The parties agree to have children together.
            <br />
            4. The parties agree to be responsible for each other's wellbeing.
            <br />
            5. The parties agree to always be honest with each other.
            <br />
            6. The parties agree to be loving and supportive of each other.
            <br />
            7. The parties agree to be grateful for each other.
            <br />
            8. The parties agree to be kind and understanding of each other.
            <br />
            9. The parties agree to be patient with each other.
            <br />
            10. The parties agree to never give up on each other.
            <br />
            11. The parties agree to be open to each other's ideas and perspectives.
            <br />
            12. The parties agree to protect each other's privacy and security.
            <br />
            13. The parties agree to be responsible for their own actions and to not blame each other for their own mistakes.
            <br />
            14. The parties agree to be open to new experiences and to learn from each other.
            <br />
            15. Above all else, the parties agree to always put love first.
            <br />
            16. The parties agree to always communicate openly and honestly with each other.
            <br />
            17. Above all else, the parties agree to always put love first.
            <div className="divider"></div> {/* Divider after end of list */}
          </p>
          <div className="signature-section">
            <div className="signature">
              <p>Signature of Partner 1</p>
              {!showSignature1 ? (
                <button className="signature-button" onClick={handleShowSignature1}>
                  Show Signature
                </button>
              ) : (
                <img src={signature1} alt="Signature of Partner 1" className="fade-in" />
              )}
            </div>
            <div className="signature">
              <p>Signature of Partner 2</p>
              {!showSignature2 ? (
                <button className="signature-button" onClick={handleShowSignature2}>
                  Show Signature
                </button>
              ) : (
                <img src={signature2} alt="Signature of Partner 2" className="fade-in" />
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-rose-600 font-semibold handwritten text-3xl">
            " I promise to always be by your side, and I can't wait for our wedding day! "
          </p>
          
          <div className="flex items-center justify-center my-12">
            <div className="h-0.5 bg-rose-200 w-32"></div>
            <Heart className="w-8 h-8 text-rose-400 mx-4 float-animation" />
            <div className="h-0.5 bg-rose-200 w-32"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h1 className="title">Couple Trivia Quiz: How Well Do You Know Us?</h1>
          {!quizActive ? (
            <div className="start-quiz-container">
              <button className="start-quiz-button" onClick={handleStartQuiz}>
                Start Quiz
              </button>
            </div>
          ) : (
            <div className="app-container">
              {currentQuestionIndex < questions.length ? (
                <div className={`question-container ${fade ? 'fade' : ''}`}>
                  <h2 className="question">{questions[currentQuestionIndex].question}</h2>
                  <div className="options-container">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                      <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                        <input
                          type="radio"
                          id={`option-${currentQuestionIndex}-${index}`}
                          name={`question-${currentQuestionIndex}`}
                          className={`option-radio ${selectedOption === option ? 'selected' : ''}`}
                        />
                        <label htmlFor={`option-${currentQuestionIndex}-${index}`} className="option-label">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="score-section">
                  <h2>Your Score: {score} / {questions.length}</h2>
                  <button onClick={handleResetQuiz} className="reset-button">Reset Quiz</button>
                </div>
              )}
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-rose-600 font-semibold handwritten text-3xl">
          " Thank you for being mine every second of every day! "
        </p>
        
        <div className="flex items-center justify-center my-12">
          <div className="h-0.5 bg-rose-200 w-32"></div>
          <Heart className="w-8 h-8 text-rose-400 mx-4 float-animation" />
          <div className="h-0.5 bg-rose-200 w-32"></div>
        </div>
      </div>

      <footer className="footer">
        <p>Made with <Heart className="w-4 h-4 text-red-500 inline" /> by <a href="https://github.com/agnm01" className="text-rose-500 underline">your husband</a></p>
      </footer>
    </div>
  );
}

export default App;