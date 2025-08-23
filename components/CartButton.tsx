import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import tw from "twrnc";

const CartButton = () => {
  const totalItems = 10;

  return (
    <TouchableOpacity
      style={tw`flex items-center justify-center size-10 rounded-full bg-black`}
    >
      <Image source={images.bag} style={tw`size-5`} resizeMode="contain" />

      {totalItems > 0 && (
        <View
          style={tw`absolute -top-2 -right-1 flex items-center justify-center size-5.5 bg-orange-400 rounded-full`}
        >
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default CartButton;
