import { ReactNode } from "react";
import { View, Text, ScrollView } from "react-native";
import { useCustomTheme } from "../Theme";

// interface ChipListProps {
//   chipListData: ChipProps[];
//   setParentState: () => void;
// }

interface ChipProps {
  text: string;
}

// export const ChipList = ({ chipListData, setParentState }: ChipListProps) => {
//   return (
//     <ScrollView>
//       {chipListData.map(({ text }) => (
//         <Chip text={text} />
//       ))}
//     </ScrollView>
//   );
// };

const Chip = ({ text }: ChipProps) => {
  const { theme } = useCustomTheme();

  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        margin: 5,
        backgroundColor: theme.colors.card,
      }}
    >
      <Text
        style={{
          color: theme.colors.text,
        }}
      >
        {text}
      </Text>
    </View>
  );
};
