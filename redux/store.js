import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import WidgetsSlice from "./WigetsSlice";
import widgetSaga from "./WidgetsSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {widgets: WidgetsSlice.reducer},
  middleware: [saga],
});
saga.run(widgetSaga)
export default store;