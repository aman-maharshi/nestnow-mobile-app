import { ExploreCard } from "@/components/cards"
import Filters from "@/components/filters"
import Search from "@/components/search"
import { useAuthStore } from "@/stores/authStore"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const Explore = () => {
  const { user } = useAuthStore()

  return (
    <SafeAreaView className="h-full pt-16 bg-[#f6f6f6]">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <ExploreCard />}
        keyExtractor={item => item.toString()}
        numColumns={1}
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Explore
