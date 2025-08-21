import { router } from "expo-router"
import { Button, Text, View } from "react-native"
import { useAuthStore } from "../../stores/authStore"

export default function Profile() {
  const { logout, user } = useAuthStore()

  const handleLogout = () => {
    logout()
    router.replace("/sign-in")
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-rubik-bold text-black-300">Profile</Text>

      {user && (
        <View className="items-center">
          <Text className="text-lg font-rubik-medium text-black-200">Welcome, {user.name}!</Text>
          <Text className="text-sm font-rubik text-gray-500">User ID: {user.id}</Text>
        </View>
      )}

      <Button title="Sign Out" onPress={handleLogout} color="#ff4444" />
    </View>
  )
}
