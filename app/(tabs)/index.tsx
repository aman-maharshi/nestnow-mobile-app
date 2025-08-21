import { Card, FeaturedCard } from "@/components/cards"
import { FilterBottomSheet } from "@/components/FilterBottomSheet"
import Filters from "@/components/filters"
import Search from "@/components/search"
import { featured, ourRecommendation } from "@/constants/data"
import icons from "@/constants/icons"
import { useAuthStore } from "@/stores/authStore"
import { router } from "expo-router"
import { useState } from "react"
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const HomeScreen = () => {
  const { user } = useAuthStore()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleCloseFilter = () => {
    setIsFilterOpen(false)
  }

  const handleApplyFilters = (filters: any) => {
    console.log("Applied filters:", filters)
  }

  return (
    <SafeAreaView className="h-full pt-16 bg-white">
      <FlatList
        data={ourRecommendation}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="px-5 flex gap-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image source={user?.avatar} className="size-12 rounded-full" />
                <View className="flex flex-col items-start justify-center ml-2">
                  <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6"></Image>
            </View>

            <Search onFilterPress={() => setIsFilterOpen(true)} />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                <TouchableOpacity onPress={() => router.push("/explore")}>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={featured}
                renderItem={({ item }) => <FeaturedCard data={item} />}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
                <TouchableOpacity onPress={() => router.push("/explore")}>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        }
      />

      {/* Filter Bottom Sheet - Rendered at root level */}
      <FilterBottomSheet isVisible={isFilterOpen} onClose={handleCloseFilter} onApplyFilters={handleApplyFilters} />
    </SafeAreaView>
  )
}

export default HomeScreen
