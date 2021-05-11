let users = {
  ricksanchez: {
    id: "ricksanchez",
    name: "Rick Sanchez",
    avatarURL: "https://i.postimg.cc/0zz2LTdY/rick.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionOne",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mortysmith: {
    id: "mortysmith",
    name: "Morty Smith",
    avatarURL: "https://i.postimg.cc/XB7fChS5/morty.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  summersmith: {
    id: "summersmith",
    name: "Summer Smith",
    avatarURL: "https://i.postimg.cc/VJ1YWcZ2/summer.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "summersmith",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["summersmith"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mortysmith",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["mortysmith", "summersmith"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "summersmith",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["summersmith"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "ricksanchez",
    timestamp: 1482579767190,
    optionOne: {
      votes: ["ricksanchez"],
      text: "be a pickle",
    },
    optionTwo: {
      votes: ["summersmith"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "ricksanchez",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["ricksanchez"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["mortysmith"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "mortysmith",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["mortysmith"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["ricksanchez"],
      text: "write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
