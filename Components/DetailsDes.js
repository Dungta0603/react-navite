import { View, Text } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTtitle } from "./Subinfo";
import { COLORS, FONTS, SIZES } from "../constants";
const DetailsDes = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readmore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTtitle
          title={data.name}
          subTitle={data.creator}
          titleSizes={SIZES.extraLarge}
          subTitleSizes={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readmore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.secondary,
              }}
              onPress={() => {
                if (!readmore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 200));
                  setReadMore(false);
                }
              }}
            >
              {readmore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDes;
