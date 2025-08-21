import icons from "@/constants/icons"
import images from "@/constants/images"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

interface Props {
  onPress?: () => void
}

export const ExploreCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row bg-white rounded-xl shadow-lg shadow-black-100/20 p-3 mb-4 mx-5"
    >
      {/* Left Section - Image */}
      <View className="relative">
        <Image source={images.newYork} className="w-28 h-28 rounded-lg" />

        {/* Rating Overlay */}
        <View className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex-row items-center">
          <Image source={icons.star} className="w-3 h-3" tintColor="#FFD700" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-1">4.8</Text>
        </View>
      </View>

      {/* Right Section - Text and Icons */}
      <View className="flex-1 ml-3 flex flex-row justify-between py-2">
        <View className="flex-1 flex flex-col justify-between">
          {/* Title */}
          <Text className="text-xl font-rubik-semibold text-black-300 leading-7" numberOfLines={2}>
            Lucky Lake Apartments
          </Text>

          {/* Location */}
          <Text className="text-base font-rubik text-black-200">Beijing, China</Text>
        </View>

        {/* Bottom Row - Price and Favorite */}
        <View className="flex-col items-end justify-between">
          <TouchableOpacity className="p-1">
            <Image source={icons.heart} className="w-5 h-5" tintColor="#9CA3AF" />
          </TouchableOpacity>
          <Text className="text-xl font-rubik-bold text-primary-300">$1234</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />

      <View className="absolute top-5 right-5 flex flex-row items-center gap-2 bg-white/90 px-2 py-1 rounded-full">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-sm font-rubik-bold text-primary-300">4.4</Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text numberOfLines={1} className="text-white text-lg font-rubik-extrabold">
          Modern Appartment
        </Text>
        <Text className="text-white text-base font-rubik">22 W 15th St, New York</Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-bold text-white">$2,500</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative mb-4"
    >
      <View className="absolute top-5 right-5 flex flex-row items-center px-2 bg-white/90 py-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-sm font-rubik-bold text-primary-300 ml-0.5">4.4</Text>
      </View>

      <Image source={images.newYork} className="h-40 w-full rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">Cozy Studio</Text>
        <Text className="text-sm font-rubik text-black-200">22 W 15th St, New York</Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">$2,500</Text>
          <Image source={icons.heart} className="w-5 h-5 mr-2" tintColor="#191d31" />
        </View>
      </View>
    </TouchableOpacity>
  )
}
