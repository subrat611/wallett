import { combineReducers } from "@reduxjs/toolkit";
import { onboardingReducer } from "./onboarding/onboardingSlice";

const rootReducer = combineReducers({
  onboarding: onboardingReducer,
});

export default rootReducer;
