export default [
  {
    id: 1,
    question: "What is the output of the following code?",
    type: "MULTIPLE_ANSWERS",
    image:
      "http://192.168.1.178/v1/storage/buckets/62d329c93c2704e0ed6d/files/62d329e8bf0cfb97d747/view?project=62c549eccf7808810626&mode=admin",
    choices: [
      {
        id: 1,
        text: "1",
        correct: false,
      },
      {
        id: 2,
        text: "2",
        correct: false,
      },
      {
        id: 3,
        text: "3",
        correct: false,
      },
      {
        id: 4,
        text: "4",
        correct: true,
      },
    ],
  },
  {
    id: 2,
    question: "What is the output of the following code?",
    type: "MULTIPLE_CHOICE",
    content: `
**This is some bold text!**
This is normal text. Declare \`const a = 123;\`
\`\`\`
const a = 123;

console.log(a);
\`\`\`

    `,
    choices: [
      {
        id: 1,
        text: "1",
        correct: false,
      },
      {
        id: 2,
        text: "2",
        correct: false,
      },
      {
        id: 3,
        text: "3",
        correct: false,
      },
      {
        id: 4,
        text: "4",
        correct: true,
      },
    ],
  },
];
