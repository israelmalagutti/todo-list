import React, { useCallback, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Logo from "@assets/Logo";
import { Todo, TodoBar, TodoList } from "@components/index";

import { homeStyles, logoStyles, todoListStyles } from "./styles";

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
  const [todos, setTodos] = useState(TODOS);
  const [filter, setFilter] = useState<"all" | "done">("all");

  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.isCompleted === true);
  }, [todos]);

  const handleNewTodo = useCallback((newItem: string) => {
    if (newItem === "")
      return Alert.alert(
        "Empty item",
        "Please type a description for the new item",
        [{ text: "ok" }]
      );

    const newTodo: TodoType = {
      id: todos.length + 1,
      isCompleted: false,
      description: newItem,

      createdAt: new Date().toDateString(),
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  const handleCheckTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    Alert.alert(
      "Delete item",
      "This item will be deleted and cannot be retrieved later.",
      [
        {
          text: "delete",
          onPress: () =>
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)),
          style: "destructive",
        },
        { text: "cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  }, []);

  const handleFilter = (type: "all" | "done") => {
    setFilter(type);
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.backgroundColor1} />
      <View style={homeStyles.backgroundColor2} />

      <View style={logoStyles.container}>
        <Logo />
      </View>

      <View style={homeStyles.contentContainer}>
        <TodoBar onAddTodo={handleNewTodo}></TodoBar>

        <View style={{ gap: 20 }}>
          <TodoList.ListInfo
            todos={todos}
            filter={filter}
            setFilter={handleFilter}
          />

          <FlatList
            data={filter === "all" ? todos : completedTodos}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Todo
                description={item.description}
                isCompleted={item.isCompleted}
                onPressCheckbox={() => handleCheckTodo(item.id)}
                onPressDelete={() => handleDeleteTodo(item.id)}
              />
            )}
            ListEmptyComponent={() => <TodoList.EmptyList />}
            contentContainerStyle={[
              todoListStyles.container,
              {
                paddingTop: todos.length >= 1 ? 0 : 48,
                borderTopWidth: todos.length >= 1 ? 0 : 1,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};
