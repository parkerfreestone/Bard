import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { CustomNavigationContainer, useCustomTheme } from "./components/Theme";

// SCREENS
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { YourPlaylistsScreen } from "./screens/YourPlaylistsScreen";
import { ExploreScreen } from "./screens/ExploreScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useCustomTheme();

  return (
    <CustomNavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Feather name="home" size={25} color={theme.colors.text} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Feather name="search" size={25} color={theme.colors.text} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Your Playlists"
          component={YourPlaylistsScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Feather name="music" size={25} color={theme.colors.text} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <View>
                <Feather name="user" size={25} color={theme.colors.text} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </CustomNavigationContainer>
  );
}
