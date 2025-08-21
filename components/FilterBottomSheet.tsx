import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet"
import React, { useCallback, useMemo, useRef } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

interface FilterBottomSheetProps {
  isVisible: boolean
  onClose: () => void
  onApplyFilters?: (filters: any) => void
}

export const FilterBottomSheet = ({ isVisible, onClose, onApplyFilters }: FilterBottomSheetProps) => {
  // Bottom sheet ref and snap points
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["60%", "80%", "100%"], [])

  // State for filter values
  const [filters, setFilters] = React.useState({
    minPrice: "",
    maxPrice: "",
    propertyType: "",
    bedrooms: ""
  })

  // Open/close bottom sheet based on isVisible prop
  React.useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand()
    } else {
      bottomSheetRef.current?.close()
    }
  }, [isVisible])

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  const handleApplyFilters = useCallback(() => {
    onApplyFilters?.(filters)
    onClose()
  }, [filters, onApplyFilters, onClose])

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.5} />,
    []
  )

  if (!isVisible) return null

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        elevation: 9999
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={2}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onClose={handleClose}
      >
        <BottomSheetView className="flex-1 px-5">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-xl font-rubik-bold text-black-300">Filters</Text>
            <TouchableOpacity onPress={handleClose}>
              <Text className="text-primary-300 font-rubik-medium">Done</Text>
            </TouchableOpacity>
          </View>

          {/* Price Range */}
          <View className="mb-6">
            <Text className="text-base font-rubik-bold text-black-300 mb-3">Price Range</Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-1 mr-3">
                <Text className="text-sm font-rubik text-black-200 mb-1">Min Price</Text>
                <TextInput
                  value={filters.minPrice}
                  onChangeText={value => updateFilter("minPrice", value)}
                  placeholder="$0"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-black-300 font-rubik"
                  keyboardType="numeric"
                />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-rubik text-black-200 mb-1">Max Price</Text>
                <TextInput
                  value={filters.maxPrice}
                  onChangeText={value => updateFilter("maxPrice", value)}
                  placeholder="$10,000"
                  className="border border-gray-200 rounded-lg px-3 py-2 text-black-300 font-rubik"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          {/* Property Type */}
          <View className="mb-6">
            <Text className="text-base font-rubik-bold text-black-300 mb-3">Property Type</Text>
            <View className="flex-row flex-wrap gap-2">
              {["Apartment", "House", "Studio", "Villa", "Condo"].map(type => (
                <TouchableOpacity
                  key={type}
                  onPress={() => updateFilter("propertyType", type)}
                  className={`px-4 py-2 border rounded-full ${
                    filters.propertyType === type ? "border-primary-300 bg-primary-100" : "border-primary-200"
                  }`}
                >
                  <Text
                    className={`text-sm font-rubik ${filters.propertyType === type ? "text-primary-300" : "text-primary-300"}`}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Bedrooms */}
          <View className="mb-6">
            <Text className="text-base font-rubik-bold text-black-300 mb-3">Bedrooms</Text>
            <View className="flex-row flex-wrap gap-2">
              {["1", "2", "3", "4", "5+"].map(bed => (
                <TouchableOpacity
                  key={bed}
                  onPress={() => updateFilter("bedrooms", bed)}
                  className={`px-4 py-2 border rounded-full ${
                    filters.bedrooms === bed ? "border-primary-300 bg-primary-100" : "border-primary-200"
                  }`}
                >
                  <Text
                    className={`text-sm font-rubik ${filters.bedrooms === bed ? "text-primary-300" : "text-primary-300"}`}
                  >
                    {bed}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Apply Filters Button */}
          <TouchableOpacity onPress={handleApplyFilters} className="bg-primary-300 py-3 rounded-lg mb-4">
            <Text className="text-white text-center font-rubik-bold">Apply Filters</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
