import { NavigationContainer } from "@react-navigation/native";
import { ReactNode } from "react";
import { useColorScheme } from "react-native";

type Props = { children?: ReactNode };

export const colorSchemes = {
  dark: {
    dark: true,
    colors: {
      primary: "#69efd2",
      secondary: "#a06af9",
      background: "#141318",
      card: "#211f29",
      text: "#eee",
      border: "#292d34",
      notification: "fff",
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "#246bfd",
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
