export type Topic = {
  id: string;
  title: string;
  description?: string;
  icon: string;
  level: number;
  progress: number;
  context?: string;
  resources?: ResourceItem[];
};

export type ResourceItem = {
  id: string;
  title: string;
  url: string;
  completed?: boolean;
};

export enum QuizType {
  MULTIPLE_ANSWERS = "MULTIPLE_ANSWERS",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
}

export type QuizItem = {
  id: number;
  question: string;
  type: QuizType;
  image?: string;
  content?: string;
  choices: ChoiceItem[];
};

export type ChoiceItem = {
  id: number;
  text: string;
  correct: boolean;
};
