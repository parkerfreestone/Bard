import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import { ReactNode, useEffect } from "react";
import { useColorScheme } from "react-native";

type Props = { children?: ReactNode };

export const colorSchemes = {
  dark: {
    dark: true,
    colors: {
      primary: "#246bfd",
      secondary: "#a06af9",
      background: "#181a21",
      card: "#262937",
      text: "#eee",
      border: "#332b4f",
      notification: "fff",
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "#373057",
      background: "#fff",
      card: "#fff",
      text: "#000",
      border: "#d7d7d7",
      notification: "fff",
    },
  },
};

export const useCustomTheme = () => {
  const scheme = useColorScheme();
  return {
    theme:
      scheme === "dark" ? { ...colorSchemes.dark } : { ...colorSchemes.light },
  };
};

export const CustomNavigationContainer = ({ children }: Props) => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer
      theme={scheme === "dark" ? colorSchemes.dark : colorSchemes.light}
    >
      {children}
    </NavigationContainer>
  );
};
