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
      <Text className="text-2xl font-rubik-bold text-green-700">Welcome to NestNow</Text>
      <Text className="font-rubik-regular text-black-100 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
      <Button title="Explore" onPress={() => router.push("/explore")} />
      <Button title="Profile" onPress={() => router.push("/profile")} />
      <Button title="Property" onPress={() => router.push("/properties/1")} />
    </View>
  )
}
