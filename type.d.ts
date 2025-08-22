interface SettingsItemProp {
  icon: ImageSourcePropType
  title: string
  onPress?: () => void
  textStyle?: string
  showArrow?: boolean
}

interface CardData {
  id: number
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
