import { ExploreCard } from "@/components/cards"
import { FilterBottomSheet } from "@/components/FilterBottomSheet"
import Filters from "@/components/filters"
import Search from "@/components/search"
import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const Explore = () => {
  const { user } = useAuthStore()
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleCloseFilter = () => {
    setIsFilterOpen(false)
  }

  const handleApplyFilters = (filters: any) => {
    console.log("Applied filters:", filters)
    // TODO: Apply filters to explore results
  }

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
            <Search onFilterPress={() => setIsFilterOpen(true)} />

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

      {/* Filter Bottom Sheet - Rendered at root level */}
      <FilterBottomSheet isVisible={isFilterOpen} onClose={handleCloseFilter} onApplyFilters={handleApplyFilters} />
    </SafeAreaView>
  )
}

export default Explore
