import { useEffect, useState } from "react"
import "../global.css"

import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

function RootLayoutContent() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [fontError, setFontError] = useState(false)

  // Load fonts with error handling
  const [fontsLoadedResult] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf")
  })

  useEffect(() => {
    // Set fonts as loaded after a delay to prevent immediate crashes
    const timer = setTimeout(() => {
      setFontsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (fontsLoadedResult && fontsLoaded) {
      // Hide the splash screen with error handling
      SplashScreen.hideAsync().catch(error => {
        console.warn("Failed to hide splash screen:", error)
        // Continue anyway, don't crash the app
      })
    }
  }, [fontsLoadedResult, fontsLoaded])

  // Handle font loading errors
  if (fontError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
          Failed to load fonts. Please restart the app.
        </Text>
      </View>
    )
  }

  // Show loading state or proceed without fonts
  if (!fontsLoaded || !fontsLoadedResult) {
    return <View style={{ flex: 1, backgroundColor: "white" }}>{/* Minimal loading state */}</View>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </GestureHandlerRootView>
  )
}

export default function RootLayout() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
          Something went wrong. Please restart the app.
        </Text>
      </View>
    )
  }

  try {
    return <RootLayoutContent />
  } catch (error) {
    console.error("Critical error in RootLayout:", error)
    setHasError(true)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
          Critical error occurred. Please restart the app.
        </Text>
      </View>
    )
  }
}
