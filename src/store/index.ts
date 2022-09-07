import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {},
}
)

export type RootStore = ReturnType<typeof store.getStaty>;
export default store;