import { StatusBar, Text, View, Image } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/core";
import { COLOR, SIZES, SHADOWS, assets, COLORS } from "../constants";
import React from "react";
import { CircleButton, RectButton } from "./Button";
import { NFTtitle, SubInfo, EthPrice } from "./Subinfo";
const NFTcard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        marginTop: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeModel="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTtitle
          title={data.name}
          subTitle={data.creator}
          titleSizes={SIZES.font}
          subTitleSizes={SIZES.small}
        />
      </View>
      <View
        style={{
          margin: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};
export default NFTcard;
