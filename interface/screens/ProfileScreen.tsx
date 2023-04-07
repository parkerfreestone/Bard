import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { useCustomTheme } from "../components/Theme";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const publicPlaylistData = [
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
];

const privatePlaylistData = [
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
  {
    name: "Playlist Name",
    imageURL:
      "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210",
    genres: ["Rock", "Indie", "Pop", "Rap"],
    songs: 23,
  },
];

const playlistChips = ["Public", "Private"];

export const ProfileScreen = () => {
  const [playlistMargin, setPlaylistMargin] = useState(50);
  const [activePlaylistChipIndex, setActivePlaylistChipIndex] = useState(0);

  const tabBarHeight = useBottomTabBarHeight();

  const { theme } = useCustomTheme();

  return (
    <View>
      <View
        onLayout={(e) => {
          setPlaylistMargin(e.nativeEvent.layout.height + tabBarHeight + 50);
        }}
        style={{
          marginTop: 25,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 10,
            marginBottom: 10,
            backgroundColor: theme.colors.card,
            height: 75,
            width: 75,
            borderRadius: 75 / 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: theme.colors.text,
              fontWeight: "900",
            }}
          >
            PF
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: theme.colors.text,
          }}
        >
          parkerfreestone
        </Text>
        <ScrollView horizontal={true} scrollEnabled={false}>
          {playlistChips.map((text, i) => (
            <Pressable
              onPress={() => {
                setActivePlaylistChipIndex(i);
              }}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 100,
                margin: 5,
                backgroundColor:
                  activePlaylistChipIndex === i
                    ? theme.colors.primary
                    : theme.colors.card,
              }}
            >
              <Text
                style={{
                  color:
                    activePlaylistChipIndex === i
                      ? theme.colors.card
                      : theme.colors.text,
                }}
              >
                {text}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ marginBottom: playlistMargin, marginTop: 20 }}>
        <FlatList
          data={
            activePlaylistChipIndex === 0
              ? publicPlaylistData
              : privatePlaylistData
          }
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                padding: 20,
                marginHorizontal: 25,
                marginBottom: 15,
                borderRadius: 25,
                backgroundColor: theme.colors.card,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 15,
                  }}
                  contentFit="cover"
                  source={
                    "https://i.scdn.co/image/ab67706c0000da844588d8f2ff7702d1dc949210"
                  }
                  transition={1000}
                  placeholder={blurhash}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "900",
                    color: theme.colors.text,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                  }}
                >
                  {item.songs} songs
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 5,
                    marginTop: 10,
                  }}
                >
                  {item.genres.map((genre) => (
                    <View
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12,
                        backgroundColor: theme.colors.background,
                      }}
                    >
                      <Text
                        style={{
                          color: theme.colors.text,
                        }}
                      >
                        {genre}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};
