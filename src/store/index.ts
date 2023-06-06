import { Screens } from "../types/navigatio";
import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState } from "../types/store";
import { Observer } from "../types/store";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import {auth}   from "../utils/Firebase";
import { navigate, setUserCredentials } from "./actions";
import { message } from "../mocks/getMessage";

onAuthStateChanged(auth, (user) => {
  if (user) {
    user.email !== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.LOGIN));
  }
});

const emptyState: AppState = {
  screen: Screens.DASHBOARD,
  user: "",
  message: [],
  post: [],

};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};
