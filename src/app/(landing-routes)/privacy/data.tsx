interface ListItem {
  topic: string;
  topicText: string;
}

interface SubBody {
  id: number;
  header: string;
  subInfoList: string;
  listArray: ListItem[];
}

interface TermOfUse {
  id: number;
  text: string;
  infoList?: string;
  subBody?: SubBody[];
}

const termsOfUse: TermOfUse[] = [
  {
    id: 1,
    text: "Introduction",
    infoList:
      "Welcome to LingoDash! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our web-based gaming platform designed to help you learn foreign languages through engaging real-life scenario games. By accessing or using LingoDash, you agree to this Privacy Policy.",
  },
  {
    id: 2,

    text: "Information Collection",
    subBody: [
      {
        id: 1,
        header: "personal information",
        subInfoList:
          "We collect the following personal information directly from you:",
        listArray: [
          {
            topic: "Account Information",
            topicText:
              "When you create an account, we collect your username, email address, password, and profile details.",
          },
          {
            topic: "Payment Information",
            topicText:
              " If you purchase a pro version of the game, we collect payment details such as your credit card information or other payment method information through our secure payment processor",
          },
          {
            topic: "Communication Information",
            topicText:
              "Any information you provide when you contact our support team or communicate with us through other channels",
          },
        ],
      },

      {
        id: 2,
        header: "usage information",
        subInfoList:
          "We automatically collect certain information about your device and how you interact with our platform:",
        listArray: [
          {
            topic: "Device Information",
            topicText:
              "IP address, browser type, operating system, and device identifiers.",
          },
          {
            topic: "Usage Data",
            topicText:
              "Pages visited, time spent on the site, gameplay statistics, and other interaction data.",
          },
          {
            topic: "Cookies and Similar Technologies",
            topicText:
              "We use cookies to enhance your experience, track user activity, and gather usage data",
          },
        ],
      },

      {
        id: 3,
        header: "Use of Information",
        subInfoList:
          "We use the information we collect for the following purposes:",
        listArray: [
          {
            topic: "To Provide and Improve Our Services",
            topicText:
              "Ensuring our platform functions correctly, improving user experience, and developing new features.",
          },
          {
            topic: "Account Management",
            topicText:
              "Managing your account, processing payments, and providing customer support.",
          },
          {
            topic: "Personalization",
            topicText:
              "Customizing your experience, including suggesting games and challenges based on your preferences",
          },
          {
            topic: "Communication",
            topicText:
              "Sending you updates, notifications, and marketing messages (with your consent).",
          },
          {
            topic: "Security and Fraud Prevention",
            topicText:
              "Protecting our platform and users from security threats and fraudulent activities.",
          },
        ],
      },
    ],
  },
];

export default termsOfUse;
