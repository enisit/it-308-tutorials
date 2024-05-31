import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Todo } from "../../api/todo.service";

type TodoListItemProps = {
  item: Todo;
  onPress: (id: Todo["id"]) => void;
};
const TodoListItem = ({ item, onPress }: TodoListItemProps) => {
  console.log("Rendering item: ", item.id);
  return (
    <Pressable onPress={() => onPress(item.id)} style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 200, backgroundColor: "red" }}
      />
      <Text>{item.title}</Text>
    </Pressable>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
);
