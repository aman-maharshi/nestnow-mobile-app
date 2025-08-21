import { router } from "expo-router"
import { Button, View } from "react-native"

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
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
      <Button title="Explore" onPress={() => router.push("/explore")} />
      <Button title="Profile" onPress={() => router.push("/profile")} />
      <Button title="Property" onPress={() => router.push("/properties/1")} />
    </View>
  )
}
