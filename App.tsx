import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

// SCREENS
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { YourPlaylistsScreen } from "./screens/YourPlaylistsScreen";
import { CustomNavigationContainer, useCustomTheme } from "./components/Theme";

const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useCustomTheme();

  return (
    <CustomNavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            borderTopWidth: 0,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            backgroundColor: theme.colors.card,
            paddingBottom: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "50%",
                  borderTopWidth: 3,
                  borderColor: focused ? theme.colors.primary : "transparent",
                }}
              >
                <Feather name="home" size={30} color={theme.colors.text} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Your Playlists"
          component={YourPlaylistsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "50%",
                  borderTopWidth: 3,
                  borderColor: focused ? theme.colors.primary : "transparent",
                }}
              >
                <Feather name="music" size={30} color={theme.colors.text} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "50%",
                  borderTopWidth: 3,
                  borderColor: focused ? theme.colors.primary : "transparent",
                }}
              >
                <Feather name="user" size={30} color={theme.colors.text} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </CustomNavigationContainer>
  );
}
