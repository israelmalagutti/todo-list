import { View } from "react-native";

type TodoType = {
  id: number;
  isCompleted: boolean;
  description: string;

  createdAt: string;
};

const TODOS: TodoType[] = [
  {
    id: 1,
    isCompleted: true,
    description: "Create expo app",
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    isCompleted: true,
    description: "Create home page",
    createdAt: new Date().toDateString(),
  },
  {
    id: 3,
    isCompleted: true,
    description: "Create todo bar",
    createdAt: new Date().toDateString(),
  },
  {
    id: 4,
    isCompleted: true,
    description: "Create todo item",
    createdAt: new Date().toDateString(),
  },
  {
    id: 5,
    isCompleted: true,
    description: "Create todo list",
    createdAt: new Date().toDateString(),
  },
  {
    id: 6,
    isCompleted: false,
    description: "Create todolist info",
    createdAt: new Date().toDateString(),
  },
];

export const Home: React.FC = () => {
  return <View />;
};
