import { NavigationContainer } from "@react-navigation/native";
import App from "./src";
import { Provider } from "react-redux";
import store from "./src/redux/store";
export default function AppContainer() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
}
