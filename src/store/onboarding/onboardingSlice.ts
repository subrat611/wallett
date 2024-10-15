import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  wallett_onboarding: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: INITIAL_STATE,
  reducers: {
    setOnboardingStatus: (state, { payload }) => {
      state.wallett_onboarding = payload;
    },
  },
});

export const onboardingReducer = onboardingSlice.reducer;
export const { setOnboardingStatus } = onboardingSlice.actions;

export default onboardingSlice;
