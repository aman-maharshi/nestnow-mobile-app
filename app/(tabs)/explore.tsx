import { ExploreCard } from "@/components/cards"
import { FilterBottomSheet } from "@/components/FilterBottomSheet"
import Filters from "@/components/filters"
import Search from "@/components/search"
import { allProperties } from "@/constants/data"
import icons from "@/constants/icons"
import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { FlatList, Image, SafeAreaView, Text, View } from "react-native"

const Explore = () => {
  const { user } = useAuthStore()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleCloseFilter = () => {
    setIsFilterOpen(false)
  }

  const handleApplyFilters = (filters: any) => {
    console.log("Applied filters:", filters)
  }

  return (
    <SafeAreaView className="h-full bg-[#f6f6f6]">
      <FlatList
        data={allProperties}
        renderItem={({ item }) => <ExploreCard data={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
        contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <Text className="text-xl font-rubik-bold">Explore</Text>
              <Image source={icons.bell} className="size-5" />
            </View>
            <Search onFilterPress={() => setIsFilterOpen(true)} />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">All Properties</Text>
                {/* <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                </TouchableOpacity> */}
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

export default Explore
