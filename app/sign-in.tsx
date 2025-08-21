import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import icons from "@/constants/icons"
import images from "@/constants/images"
import { router } from "expo-router"
import { useAuthStore } from "../stores/authStore"

const SignIn = () => {
  const { login, isLoading } = useAuthStore()

  const handleLogin = async () => {
    try {
      await login()
      router.replace("/(tabs)")
    } catch (error) {
      console.error("Authentication failed:", error)
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="grow">
        <Image source={images.onboarding} className="w-full h-[500px]" resizeMode="cover" />

        <View className="px-10">
          <Text className="text-center font-rubik uppercase text-black-200">Welcome to Restate</Text>

          <Text className="mt-2 text-3xl font-rubik-bold text-center text-black-300">
            Let's get you closer to {"\n"}
            <Text className="text-primary-300">Your ideal home</Text>
          </Text>

          <Text className="text-center mt-12 text-lg font-rubik text-black-200">Login to Restate with Google</Text>

          <TouchableOpacity
            onPress={handleLogin}
            disabled={isLoading}
            className={`bg-white shadow-md shadow-zinc-300 border border-gray-100 rounded-full w-full py-4 mt-5 ${isLoading ? "opacity-50" : ""}`}
          >
            <View className="flex-row justify-center items-center">
              <Image source={icons.google} className="h-5 w-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300 ml-4">
                {isLoading ? "Signing in..." : "Continue with Google"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
