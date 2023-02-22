import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./Subinfo";

const Detailbid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100% ",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center ",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base,
      }}
    >
      <Image
        source={bid.images}
        resizeMethod="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontFamlily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamlily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

export default Detailbid;
