"use client"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Transaction {
  id: string
  date: string
  amount: number
  description: string
}

interface BookingSummary {
  id: string
  venueId: number
  venueName: string
  date: string
  time: string
  court: string
}

interface User {
  id: string
  name: string
  email: string
  phone: string
  password: string
  role: string
  favorites: number[]
  bookings: BookingSummary[]
  transactions: Transaction[]
  sports: string[]
}

interface SignupPayload {
  name: string
  email: string
  phone: string
  password: string
  role: string
}

interface LoginPayload {
  email: string
  password: string
}

interface UserState {
  users: User[]
  currentUserId: string | null
}

const seedUser = (payload: SignupPayload): User => {
  const baseId = crypto.randomUUID()
  return {
    id: baseId,
    ...payload,
    favorites: [],
    bookings: [
      {
        id: `${baseId}-b1`,
        venueId: 1,
        venueName: "MCC Cricket Ground",
        date: "2025-12-15",
        time: "18:00",
        court: "Main Pitch",
      },
      {
        id: `${baseId}-b2`,
        venueId: 3,
        venueName: "Goal Sports Turf",
        date: "2025-12-17",
        time: "20:00",
        court: "7-a-side Turf",
      },
    ],
    transactions: [
      {
        id: `${baseId}-t1`,
        date: "2025-12-10",
        amount: 85,
        description: "Booking: MCC Cricket Ground",
      },
      {
        id: `${baseId}-t2`,
        date: "2025-12-11",
        amount: 45,
        description: "Booking: Goal Sports Turf",
      },
    ],
    sports: ["cricket", "football"],
  }
}

const initialState: UserState = {
  users: [],
  currentUserId: null,
}

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<SignupPayload>) => {
      const newUser = seedUser(action.payload)
      state.users.push(newUser)
      state.currentUserId = newUser.id
    },
    login: (state, action: PayloadAction<LoginPayload>) => {
      const user = state.users.find((u) => u.email === action.payload.email)
      if (!user) {
        throw new Error("no user found please sign up")
      }
      if (user.password !== action.payload.password) {
        throw new Error("invalid credentials")
      }
      state.currentUserId = user.id
    },
    logout: (state) => {
      state.currentUserId = null
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (!state.currentUserId) {
        throw new Error("no user found please sign up")
      }
      const user = state.users.find((u) => u.id === state.currentUserId)
      if (!user) {
        throw new Error("no user found please sign up")
      }
      const exists = user.favorites.includes(action.payload)
      user.favorites = exists
        ? user.favorites.filter((id) => id !== action.payload)
        : [...user.favorites, action.payload]
    },
  },
})

export const { signup, login, logout, toggleFavorite } = userSlice.actions
export const selectCurrentUser = (state: { users: UserState }) =>
  state.users.users.find((u) => u.id === state.users.currentUserId) || null
export const selectFavorites = (state: { users: UserState }) =>
  state.users.users.find((u) => u.id === state.users.currentUserId)?.favorites ?? []

export default userSlice.reducer

