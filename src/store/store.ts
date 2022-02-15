import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { FlightService } from "../services/FlightService";

const citiesState = {
  cities: [],
  loading: false,
  error: "",
  origin: "",
  destination: "",
  reservations: [],
};

export const fetchDestinations = createAsyncThunk(
  "destinations/fetchDestinations",
  async () => {
    const flightService = FlightService.getInstance();
    try {
      const res = await flightService.getDestinations();
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res.data;
    } catch (e) {
      throw new Error("Some error");
    }
  }
);

const citiesSlice = createSlice({
  name: "destinations",
  initialState: citiesState,
  reducers: {
    setCities: (state: any, action: any) => {
      state.cities = [...state.cities, action.payload];
    },
    setOrigin: (state: any, action: any) => {
      state.origin = action.payload;
    },
    setDestination: (state: any, action: any) => {
      state.destination = action.payload;
    },
    setReservation: (state: any, action: any) => {
      state.reservations = action.payload;
    },
    resetReservation: (state: any) => {
      state.reservations = [];
    },
    deleteReservation: (state: any) => {
      state.reservations = state.reservations;
    },
  },
  extraReducers: {
    [fetchDestinations.pending as any]: (state: any) => {
      state.loading = true;
    },
    [fetchDestinations.rejected as any]: (state: any) => {
      state.loading = false;
      state.error = "An error";
    },
    [fetchDestinations.fulfilled as any]: (state: any, action: any) => {
      state.loading = false;
      state.cities = action.payload;
    },
  },
});

const {
  setCities,
  setOrigin,
  setDestination,
  setReservation,
  resetReservation,
  deleteReservation,
} = citiesSlice.actions;
const citiesReducer = citiesSlice.reducer;

const store = configureStore({
  reducer: {
    destinations: citiesReducer,
  },
});

export {
  store,
  setCities,
  setOrigin,
  setDestination,
  setReservation,
  resetReservation,
  deleteReservation,
};
