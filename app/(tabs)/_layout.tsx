import icons from "@/constants/icons"
import { Tabs, router } from "expo-router"
import React, { useEffect } from "react"
import { Image, Text, View } from "react-native"
import { useAuthStore } from "../../stores/authStore"

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      <Image source={icon} tintColor={focused ? "#0061ff" : "#666876"} resizeMode="contain" className="size-6" />
      <Text
        className={`text-xs w-full text-center mt-1 ${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"}`}
      >
        {title}
      </Text>
    </View>
  )
}

const BottomTabs = () => {
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to sign-in if not authenticated
      router.replace("/sign-in")
    }
  }, [isAuthenticated])

  // Don't render tabs if not authenticated
  if (!isAuthenticated) {
    return null
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061ff1a",
          borderTopWidth: 1,
          minHeight: 70
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} title="Home" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} title="Explore" focused={focused} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.person} title="Profile" focused={focused} />
        }}
      />
    </Tabs>
  )
}

export default BottomTabs
