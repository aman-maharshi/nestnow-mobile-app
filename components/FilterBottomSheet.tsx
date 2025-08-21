import { Ionicons } from "@expo/vector-icons"
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet"
import Slider from "@react-native-community/slider"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

interface FilterBottomSheetProps {
  isVisible: boolean
  onClose: () => void
  onApplyFilters?: (filters: any) => void
}

export const FilterBottomSheet = ({ isVisible, onClose, onApplyFilters }: FilterBottomSheetProps) => {
  // Bottom sheet ref and snap points
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["70%", "80%", "90%"], [])

  // State for filter values
  const [filters, setFilters] = useState({
    price: 500,
    propertyTypes: ["Apartments", "Townhomes"],
    bedrooms: 2,
    bathrooms: 1,
    buildingSize: 2000
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

  const togglePropertyType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: prev.propertyTypes.includes(type)
        ? prev.propertyTypes.filter(t => t !== type)
        : [...prev.propertyTypes, type]
    }))
  }

  const incrementBedrooms = () => {
    setFilters(prev => ({ ...prev, bedrooms: Math.min(prev.bedrooms + 1, 10) }))
  }

  const decrementBedrooms = () => {
    setFilters(prev => ({ ...prev, bedrooms: Math.max(prev.bedrooms - 1, 0) }))
  }

  const incrementBathrooms = () => {
    setFilters(prev => ({ ...prev, bathrooms: Math.min(prev.bathrooms + 1, 10) }))
  }

  const decrementBathrooms = () => {
    setFilters(prev => ({ ...prev, bathrooms: Math.max(prev.bathrooms - 1, 0) }))
  }

  const resetFilters = () => {
    setFilters({
      price: 500,
      propertyTypes: [],
      bedrooms: 0,
      bathrooms: 0,
      buildingSize: 2000
    })
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
        zIndex: 99999,
        elevation: 99999
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={2}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onClose={handleClose}
        style={{ zIndex: 99999 }}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
      >
        <BottomSheetView className="flex-1 px-5">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6 mt-2">
            <TouchableOpacity
              onPress={handleClose}
              className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
            >
              <Ionicons name="arrow-back" size={20} color="#374151" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-bold text-gray-800">Filter</Text>
            <TouchableOpacity onPress={resetFilters}>
              <Text className="text-primary-300 font-rubik-medium">Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Price Range */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-rubik-bold text-gray-800">Price Range</Text>
              <Text className="text-lg font-rubik-bold text-primary-300">${filters.price}</Text>
            </View>
            <View className="relative">
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1000}
                value={filters.price}
                onValueChange={value => setFilters(prev => ({ ...prev, price: Math.round(value) }))}
                minimumTrackTintColor="#0061ff"
                maximumTrackTintColor="#e5e7eb"
                thumbTintColor="#0061ff"
              />
            </View>
          </View>

          {/* Property Type */}
          <View className="mb-6">
            <Text className="text-lg font-rubik-bold text-gray-800 mb-4">Property Type</Text>
            <View className="flex-row flex-wrap gap-3">
              {["Apartments", "Townhomes", "Homes", "Condos", "Duplexes", "Studios"].map(type => (
                <TouchableOpacity
                  key={type}
                  onPress={() => togglePropertyType(type)}
                  className={`px-4 py-2 rounded-full border ${
                    filters.propertyTypes.includes(type)
                      ? "bg-primary-300 border-primary-300"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <Text
                    className={`text-sm font-rubik ${
                      filters.propertyTypes.includes(type) ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Home Details */}
          <View className="mb-6">
            <Text className="text-lg font-rubik-bold text-gray-800 mb-4">Home Details</Text>

            {/* Bedrooms */}
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-base font-rubik text-gray-700">Bedrooms</Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={decrementBedrooms}
                  className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
                >
                  <Ionicons name="remove" size={16} color="#374151" />
                </TouchableOpacity>
                <Text className="text-lg font-rubik-bold text-gray-800 mx-4">{filters.bedrooms}</Text>
                <TouchableOpacity
                  onPress={incrementBedrooms}
                  className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
                >
                  <Ionicons name="add" size={16} color="#374151" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Bathrooms */}
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-rubik text-gray-700">Bathrooms</Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={decrementBathrooms}
                  className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
                >
                  <Ionicons name="remove" size={16} color="#374151" />
                </TouchableOpacity>
                <Text className="text-lg font-rubik-bold text-gray-800 mx-4">{filters.bathrooms}</Text>
                <TouchableOpacity
                  onPress={incrementBathrooms}
                  className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center"
                >
                  <Ionicons name="add" size={16} color="#374151" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Building Size */}
          <View className="mb-8">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-rubik-bold text-gray-800">Building Size</Text>
              <Text className="text-lg font-rubik-bold text-primary-300">{filters.buildingSize} sq ft</Text>
            </View>
            <View className="relative">
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={5000}
                value={filters.buildingSize}
                onValueChange={value => setFilters(prev => ({ ...prev, buildingSize: Math.round(value) }))}
                minimumTrackTintColor="#0061ff"
                maximumTrackTintColor="#e5e7eb"
                thumbTintColor="#0061ff"
              />
            </View>
          </View>

          {/* Set Filter Button */}
          <TouchableOpacity onPress={handleApplyFilters} className="bg-primary-300 py-4 rounded-full mb-4">
            <Text className="text-white text-center font-rubik-bold text-lg">Set Filter</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}
