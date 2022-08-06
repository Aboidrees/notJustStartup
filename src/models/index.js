// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exercise, Answers, Quiz, QuizQuestion, Resource, Topic } = initSchema(schema);

export {
  Exercise,
  Answers,
  Quiz,
  QuizQuestion,
  Resource,
  Topic
};