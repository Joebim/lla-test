interface subsectionProperties {
  title?: string;
  subSectionDescriptionOne?: string;
  subSectionDescriptionTwo?: string;
  subSectionDescriptionThree?: string;
  subSectionDescriptionFour?: string;
  subSectionDescriptionFive?: string;
  subSectionDescriptionSix?: string;
  subSectionDescriptionSeven?: string;
  subSectionDescriptionEight?: string;
  subSectionDescriptionNine?: string;
  subSectionDescriptionTen?: string;
}

interface descriptions {
  descriptionOne: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  descriptionFour?: string;
  descriptionFive?: string;
  descriptionSix?: string;
  descriptionSeven?: string;
}

interface pronounciations {
  text: string;
  pronounciation: string;
}

interface subTitles {
  isNumbered: boolean;
  subtitleOne: string;
  subtitleTwo?: string;
  subtitleThree?: string;
  subtitleFour?: string;
  subtitleFive?: string;
  subtitleSix?: string;
  subtitleSeven?: string;
}

interface articleSubTitles {
  articleSubtitleOne: string;
  articleSubtitleTwo?: string;
  articleSubtitleThree?: string;
  articleSubtitleFour?: string;
  articleSubtitleFive?: string;
  articleSubtitleSix?: string;
  articleSubtitleSeven?: string;
}

interface subDescriptions {
  subDescriptionOne: string;
  subDescriptionTwo?: string;
  subDescriptionThree?: string;
  subDescriptionFour?: string;
  subDescriptionFive?: string;
  subDescriptionSix?: string;
  subDescriptionSeven?: string;
}

interface blogArticlesDataProperties {
  id?: number;
  date: string;
  type?: string;
  blogImage: string;
  readDuration: number;
  hasFirstDesc: boolean;
  subTitles?: subTitles;
  hasTwoFirstLine: boolean;
  isProuounciation: boolean;
  descriptions?: descriptions;
  haFirtHeaderAndDesc: boolean;
  articleTitle?: articleSubTitles;
  subSection?: subsectionProperties;
  subDescriptions?: subDescriptions;
  includesCommonSpanishPhrases?: boolean;
  firstPronounciations?: pronounciations[];
  secondPronounciations?: pronounciations[];
  thirdPronounciations?: pronounciations[];
  fourthPronounciations?: pronounciations[];
}

interface blogArticle {
  name: string;
  slug: string;
  properties: blogArticlesDataProperties;
}

const blogArticlesData: blogArticle[] = [
  {
    name: "The Secret To Learning A Language In 2 Weeks",
    slug: "secret-to-learning-language-in-2-weeks",
    properties: {
      date: "August 6, 2024",
      blogImage: "/blog/blog-img-3.png",
      hasFirstDesc: false,
      hasTwoFirstLine: false,
      isProuounciation: false,
      haFirtHeaderAndDesc: false,
      includesCommonSpanishPhrases: true,
      readDuration: 6,
      articleTitle: {
        articleSubtitleOne: "Get Fluent Quickly with Proven Techniques ",
        articleSubtitleTwo: "Common Spanish Phrases",
      },
      subTitles: {
        isNumbered: false,
        subtitleOne: "The Power of Immersion",
        subtitleTwo: "Interactive Learning",
        subtitleThree: "Consistency is Key",
        subtitleFour: "Speak Like a Native",
        subtitleFive: "Take the Leap",
      },
      descriptions: {
        descriptionOne:
          "The secret to learning a language in two weeks lies in immersion. Surrounding yourself with the language you want to learn is crucial. Listen to music, watch TV shows and movies, read books and newspapers, and speak with native speakers. The more you expose yourself to the language, the faster you'll pick it up.",
        descriptionTwo:
          "Interactive learning is another key element. Engage with the language through interactive exercises, quizzes, and games. This will help you retain information better and make learning more enjoyable.",
        descriptionThree:
          "Consistency is vital when it comes to language learning. Set aside time each day to practice, even if it's just for a few minutes. Use a language learning app (like Delve) to track your progress and stay motivated.",
        descriptionFour:
          "Speaking is the most crucial aspect of language learning. Look for language exchange partners or practice with native speakers. Don't be afraid to make mistakes – it's all part of the learning process.",
        descriptionFive:
          "In conclusion, learning a language in two weeks requires dedication, immersion, interactive learning, consistency, active listening, and speaking practice. With the right approach and tools like Delve, you can achieve fluency in no time. So, what are you waiting for? Take the leap and start your language learning journey today!",
      },
      subDescriptions: {
        subDescriptionOne:
          "Language learning not only empowers individuals to communicate across cultures but also offers cognitive benefits that boost creativity, empathy, and academic performance. With the integration of AI into language learning, the process becomes personalised, efficient, and engaging.",
        subDescriptionTwo:
          "As AI continues to evolve, language learning can become an enriching journey, empowering learners to embrace linguistic diversity and cognitive growth.",
      },
    },
  },
  {
    name: "Benefits of AI In Language Learning",
    slug: "benefits-of-ai-in-language-learning",
    properties: {
      date: "August 6, 2024",
      blogImage: "/blog/blog-img-2.png",
      readDuration: 6,
      hasFirstDesc: true,
      hasTwoFirstLine: true,
      isProuounciation: false,
      haFirtHeaderAndDesc: false,
      includesCommonSpanishPhrases: true,
      articleTitle: {
        articleSubtitleOne: "Role of AI in Language Learning ",
        articleSubtitleTwo: "Common Spanish Phrases",
      },
      subTitles: {
        isNumbered: true,
        subtitleOne: " Instant Feedback",
        subtitleTwo: " Increases Engagement In The Learning Process",
        subtitleThree: " Language Bots",
        subtitleFour: "Adaptive Learning",
        subtitleFive: "Assessment and Analytics",
      },
      descriptions: {
        descriptionOne:
          "The AI language learning app can grade tests and even evaluate essays automatically immediately after they are submitted, showing the errors and suggesting corrections. This saves both student’s and instructor’s time.",
        descriptionTwo:
          "Increases engagement in the learning process:  Learners will be able to set their own goals, study from any place at any time, and follow a customized syllabus to learn the language.",
        descriptionThree:
          "Learners will be able to set their own goals, study from any place at any time, and follow a customized syllabus to learn the language.",
        descriptionFour:
          "Earlier chatbots were only used for assistance to provide support functions. However, Language bots are the new evolution in language learning. The learner can simply initiate a conversation with the language bot and get feedback, tips, and corrections in response.",
        descriptionFive:
          " AI can adapt the course content and delivery in real time based on a learner’s progress and understanding. This ensures the user’s maximum engagement in the learning process.",
        descriptionSix:
          "AI can provide automated assessments and analytics to help  track learners’ progress and identify areas where the course content or delivery may need to be improved.",
      },
      subDescriptions: {
        subDescriptionOne:
          "Language learning not only empowers individuals to communicate across cultures but also offers cognitive benefits that boost creativity, empathy, and academic performance. With the integration of AI into language learning, the process becomes personalised, efficient, and engaging.",
        subDescriptionTwo:
          "As AI continues to evolve, language learning can become an enriching journey, empowering learners to embrace linguistic diversity and cognitive growth.",
      },
      subSection: {
        subSectionDescriptionOne:
          "Many people struggle to learn a second language using traditional methods, which can be dull and lack the interaction needed to truly become fluent. You want to chat easily in Spanish, order food in French, or understand K-pop songs without subtitles.",
        subSectionDescriptionTwo:
          "Good news: you’re not alone in this struggle. Artificial intelligence (AI) is changing the game for learners like you.",
        subSectionDescriptionThree:
          "This article delves into the cognitive benefits of language learning and explores how artificial intelligence (AI) can revolutionize language acquisition, offering a simpler and more personalized approach for learners.",
      },
    },
  },
  {
    name: "The Truth About Foreign Language Learning Apps",
    slug: "truth-about-foreign-language-learning-apps",
    properties: {
      date: "August 6, 2024",
      blogImage: "/blog/blog-img-4.png",
      readDuration: 6,
      hasFirstDesc: false,
      hasTwoFirstLine: false,
      isProuounciation: false,
      haFirtHeaderAndDesc: true,
      includesCommonSpanishPhrases: false,
      articleTitle: {
        articleSubtitleOne: "How to Learn a Language Fast",
        articleSubtitleTwo: "How to Leverage Language Apps to Your Advantage",
      },
      subTitles: {
        isNumbered: false,
        subtitleOne: "Easy to Use",
        subtitleTwo: "Gamification",
        subtitleThree: "Accessibility",
        subtitleFour: "Quick Wins",
      },
      descriptions: {
        descriptionOne:
          "One of the biggest advantages of language learning apps is their ease of use. With just a few taps on your smartphone, you can start learning a new language anytime, anywhere. Apps like Duolingo have intuitive interfaces that guide you through lessons step by step, making it simple for even the most technologically challenged individuals to get started.",
        descriptionTwo:
          "Language apps incorporate gamification to make learning engaging and fun. Features like streaks, levels, and rewards motivate users to practice regularly. Duolingo, for example, turns language learning into a game where you earn points and unlock new levels as you progress. This gamified approach keeps learners motivated and coming back for more. ",
        descriptionThree:
          "Language learning apps are accessible to a wide audience. Whether you have a busy schedule or limited resources, these apps offer a flexible and affordable way to learn a new language. Many apps are free or have low-cost subscription options, making language learning accessible to people from all walks of life.",
        descriptionFour:
          "A lot of them can be integrated with your everyday life, for example, Delve uses your everyday scenarios to make learning as easy as opening up the streaming platform.",
        descriptionFive:
          "In line with today’s instant gratification obsession, apps do provide a daily dopamine boost by giving you a minor “win” each time you open them up.  You’ve learned a new word or a new phrase, hooray!",
        descriptionSix:
          "However, to achieve fluency, you need more than just a regular app. Find a language learning app that focuses on acquisition-rich learning methods that provide immersive and meaningful language exposure just like DELVE.",
      },
      subSection: {
        subSectionDescriptionOne:
          "In recent years, language learning apps have taken the world by storm.  Apps like Delve promise to make learning a new language easy, fun, and accessible. ",
        subSectionDescriptionTwo: "But how effective are they really? ",
        subSectionDescriptionThree:
          "Can you rely solely on language apps to become fluent in a new language? ",
        subSectionDescriptionFour:
          "In this blog post, we'll dive deep into the truth about language learning apps. Whether you're just starting out or you’ve spent some time learning a language, understanding the strengths and limitations of language apps will help you make the most of your precious study time.",
        subSectionDescriptionFive:
          "Language learning apps have revolutionized how we approach new languages. They are convenient, often free or inexpensive, and offer a gamified experience that makes learning feel like play.",
        subSectionDescriptionSix: "Should you ditch apps altogether?",
        subSectionDescriptionSeven:
          "Not necessarily, they can serve as a great supplement to your “main meals” (reading, listening, tutoring etc.)",
      },
    },
  },
  {
    name: "Useful Spanish Phrases To Learn",
    slug: "useful-spanish-phrases-to-learn",
    properties: {
      date: "August 6, 2024",
      blogImage: "/blog/blog-img-1.png",
      readDuration: 6,
      hasFirstDesc: false,
      isProuounciation: true,
      hasTwoFirstLine: false,
      haFirtHeaderAndDesc: false,
      articleTitle: {
        articleSubtitleOne:
          "Having difficulty understanding what someone is saying? These Spanish phrases will definitely come in handy:",
        articleSubtitleTwo: "Common Spanish Phrases",
        articleSubtitleThree: "How to order in Spanish",
      },
      descriptions: {
        descriptionOne:
          "Whether you’re searching for a toilet or need directions to your hotel, you’ll inevitably need to ask for guidance at some point during your holiday. These Spanish phrases are for when you’re out and about and need to ask for assistance from a Spanish-speaking local.",
        descriptionTwo:
          "Eating out at a restaurant is a great chance to practice your Spanish ordering skills! Here are some common Spanish phrases to memorise:",
      },
      subSection: {
        subSectionDescriptionOne:
          "Did you know that Spanish is the official language of 20 countries, with the second largest number of native speakers in the world? Here are some useful facts and phrases that every traveller should know before travelling to a Spanish-speaking country.",
        subSectionDescriptionTwo:
          "Travelling to a Spanish-speaking country? Fortunately, Spanish is one of the easiest languages for English-speakers to pick up. While we all know our ‘sí‘ from our ‘no‘, there are so many more complex but useful Spanish phrases to learn that will help you on your travels.",
        subSectionDescriptionThree:
          "Whether you want to confidently chat with the locals, make friends abroad or find the nearest toilet with zero hassle, these useful Spanish phrases will make sure you’re making the most of your holiday. Diviértete! (have fun!) Let’s start with the simple ones. Here are some basic Spanish phrases for you to learn:",
      },
      firstPronounciations: [
        {
          text: "Hello – Hola",
          pronounciation: "O-la",
        },
        {
          text: "Good morning – Buenos días",
          pronounciation: "BWAY-nos DEE-as",
        },
        {
          text: "Good afternoon/good evening – Buenas tardes",
          pronounciation: "BWAY-nas TAR-des",
        },
        {
          text: "Good night – Buenas noches",
          pronounciation: "BWAY-nas NOH-chays",
        },
        {
          text: "How are you? (formal – to a stranger) – Cómo está?",
          pronounciation: "KOH-moh eh-STAH",
        },
        {
          text: "I&apos;m fine, thank you – Bien, gracias",
          pronounciation: "bee-EN GRA-thee-as",
        },
        {
          text: "What&apos;s your name? – Cómo te llamas?",
          pronounciation: "KOH-moh te ya-mas?",
        },
        { text: "My name is… – Me llamo…", pronounciation: "May ya-moh…" },
        {
          text: "Nice to meet you – Mucho gusto",
          pronounciation: "MOO-choh GOO-stoh",
        },
        { text: "Please – Por favor", pronounciation: "por fa-vor" },
        { text: "Thank you – Gracias", pronounciation: "GRA-thee-as" },
      ],
      secondPronounciations: [
        {
          text: "I don’t understand – Yo no entiendo",
          pronounciation: "(yo no en-tee-EN-doh)",
        },
        {
          text: "Do you speak English? – Habla inglés?",
          pronounciation: "(Ab-la in-GLAYS)",
        },
      ],
      thirdPronounciations: [
        {
          text: "Excuse me – Disculpe",
          pronounciation: "(Dis-KUL-pay)",
        },
        {
          text: "I’m lost – Estoy perdido",
          pronounciation: "(eh-stoy per-DEE-doh)",
        },
        {
          text: "Where is…? – Dónde está…?",
          pronounciation: "(DON-day es-tah…?)",
        },
        {
          text: "Where is the bathroom? – Dónde está el baño?",
          pronounciation: "(DON-day es-tah el BAH-nyo?)",
        },
        {
          text: "Where is the bank? – Dónde está el banco?",
          pronounciation: "(DON-day es-tah el BAN-koh?)",
        },
        {
          text: "Where can I get a taxi? – Dónde puedo encontrar un taxi?",
          pronounciation: "(DON-day pway-doh en-kon-trar oon taxi?)",
        },
      ],
      fourthPronounciations: [
        {
          text: "What do you recommend? – Qué me recomienda?",
          pronounciation: "(Kay may re-kom-ee-en-dah?)",
        },
        {
          text: "I’m a vegetarian – Soy vegetariano/a",
          pronounciation: "(soy ve-he-tah-ree-ah-noh/nah)",
        },
        {
          text: "I have an allergy to [nuts] – Tengo alergia a [las nueces]",
          pronounciation: "(Ten-go al-er-hee-ah a las noo-eh-ses)",
        },
        {
          text: "How much is it? – Cuánto cuesta?",
          pronounciation: "(KWAN-to KWES-ta?)",
        },
        {
          text: "The bill, please – La cuenta, por favor",
          pronounciation: "(la KWEN-ta por fa-vor)",
        },
        {
          text: "A table for two, three, four – Una mesa para dos tres, cuatro",
          pronounciation: "(Oo-na may-sah pah-rah dohs, trays, kwah-troh)",
        },
      ],
    },
  },
];

export default blogArticlesData;
