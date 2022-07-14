import { Topic } from "../types/modules";

export const groupByLevel = (topics: any[]) => {
  const levels: { [key: number]: Topic[] } = {};

  topics.forEach((topic) => {
    if (!levels[topic.level]) {
      levels[topic.level] = [];
    }
    levels[topic.level].push(topic);
  });

  return Object.values(levels);
};

export const getCurrentActiveLevel = (levels: Topic[][]) =>
  levels.reduce((acc, levelTopics) => (levelTopics.every((topic) => topic.process === 1) ? acc + 1 : acc), 1);
