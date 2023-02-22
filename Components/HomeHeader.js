import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = onSearch => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMethod="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMethod="contain"
            style={{ width: "100% ", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMethod="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello NIJS
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            margin: SIZES.base / 2,
          }}
        >
          let si dmenu to dmomo.
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMethod="contain"
            style={{
              width: 20,
              height: 20,
              marginTop: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search"
            style={{ flex: 1, marginLeft: SIZES.base }}
            onChange={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
