interface SettingsItemProp {
  icon: ImageSourcePropType
  title: string
  onPress?: () => void
  textStyle?: string
  showArrow?: boolean
}

interface PropertyData {
  id: string
  name: string
  type: string
  price: number
  rating: number
  bedrooms: number
  bathrooms: number
  area: number
  image: any
  category: string
  description: string
  address: string
  agent: {
    name: string
    email: string
    avatar: string
  }
  facilities: string[]
  gallery: Array<{
    $id: string
    image: string
  }>
  reviews: Array<{
    $id: string
    user: string
    rating: number
    review: string
    date: string
    avatar: string
  }>
}

// Keep the old CardData for backward compatibility if needed
interface CardData {
  id: string
  title: string
  location: string
  price: string
  rating: number
  image: any
  category: string
}

interface FilterBottomSheetProps {
  isVisible: boolean
  onClose: () => void
  onApplyFilters?: (filters: any) => void
}

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: any | null
  login: () => Promise<void>
  logout: () => void
  setLoading: (loading: boolean) => void
}
