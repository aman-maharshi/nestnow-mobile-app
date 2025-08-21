import { router } from "expo-router"
import { Button, Text, View } from "react-native"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text className="text-2xl font-bold text-green-700">Welcome to NestNow</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
      <Button title="Explore" onPress={() => router.push("/explore")} />
      <Button title="Profile" onPress={() => router.push("/profile")} />
      <Button title="Property" onPress={() => router.push("/properties/1")} />
    </View>
  )
}
