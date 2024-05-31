import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  Switch,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Todo, getTodos } from "../../api/todo.service";
import { useQuery } from "@tanstack/react-query";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/RootStackNavigator";
import TodoListItem from "./TodoListItem";

type HomeScreenProps = NativeStackScreenProps<RootStackParams, "Home">;
const Home = ({ navigation }: HomeScreenProps) => {
  const [state, setState] = useState(false);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodos,
  });

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Error</Text>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  const filterdData = useMemo(() => {
    //data?.filter()
  }, []);

  const handlePress = useCallback((id: Todo["id"]) => {
    navigation.navigate("Details", { id });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch value={state} onValueChange={setState} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          initialNumToRender={6}
          windowSize={11}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item }) => (
            <TodoListItem item={item} onPress={handlePress} />
          )}
        />
      )}
    </View>
  );
};

export default Home;
