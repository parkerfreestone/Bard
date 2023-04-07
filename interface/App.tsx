import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CustomNavigationContainer, useCustomTheme } from "./components/Theme";

// SCREENS
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { YourPlaylistsScreen } from "./screens/YourPlaylistsScreen";
import { ExploreScreen } from "./screens/ExploreScreen";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  const { theme } = useCustomTheme();

  return (
    <CustomNavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.text,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 25,
            right: 25,
            paddingBottom: 10,
            borderRadius: 25,
            borderTopWidth: 0,
            paddingTop: 10,
          },
          tabBarBackground: () => (
            <BlurView
              tint={theme.dark ? "dark" : "light"}
              intensity={100}
              style={{ height: "100%", borderRadius: 20, overflow: "hidden" }}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? theme.colors.primary : theme.colors.text}
                style={
                  focused
                    ? {
                        shadowOpacity: 0.7,
                        shadowColor: theme.colors.primary,
                        shadowRadius: 10,
                      }
                    : null
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  name="search"
                  size={25}
                  color={focused ? theme.colors.primary : theme.colors.text}
                  style={
                    focused
                      ? {
                          shadowOpacity: 0.7,
                          shadowColor: theme.colors.primary,
                          shadowRadius: 10,
                        }
                      : null
                  }
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={YourPlaylistsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  name="bookmark"
                  size={25}
                  color={focused ? theme.colors.primary : theme.colors.text}
                  style={
                    focused
                      ? {
                          shadowOpacity: 0.7,
                          shadowColor: theme.colors.primary,
                          shadowRadius: 10,
                        }
                      : null
                  }
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerTitle: "My Profile",
            headerRight: () => (
              <View style={{ paddingEnd: 25 }}>
                <Feather name="settings" size={25} color={theme.colors.text} />
              </View>
            ),
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather
                  name="user"
                  size={25}
                  color={focused ? theme.colors.primary : theme.colors.text}
                  style={
                    focused
                      ? {
                          shadowOpacity: 0.7,
                          shadowColor: theme.colors.primary,
                          shadowRadius: 10,
                        }
                      : null
                  }
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </CustomNavigationContainer>
  );
}
