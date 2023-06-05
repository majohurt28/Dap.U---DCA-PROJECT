/* import { Shapevideo} from "./Shapevideo"
import { Shapemessage} from "./Shapemessage"
import { Shapemusicsheet} from "./Shapemusicsheet" */

export type Observer = ({ render: () => void } & HTMLElement);


export enum Screens {
    LOGIN = "LOGIN",
    DASHBOARD = "DASHBOARD",
    SIGNUP = "SIGNUP",
}

export type AppState = {
    screen: Screens;  
}

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions .NAVIGATE,
    payload: Screens;
}


/* export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum messageAct {
    "ADDmessage" = "ADDmessage",
    "GETmessage" =  "GETmessage",
}

export enum videoAct {
    "ADDvideo" = "ADDvideo",
    "GETvideo" =   "GETvideo",
}


export enum sheetAct {
    "ADDsheet" = "ADDsheet",
    "GETsheet" =   "GETsheet",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface AddsheetAct 
    {
    action: sheetAct.ADDsheet,
    payload: Shapemusicsheet
}

export interface GETsheetAct 
    {
    action: sheetAct.GETsheet,
    payload: Shapemusicsheet
}

export interface AddvideoAct 
    {
    action: videoAct.ADDvideo,
    payload: Shapevideo
}

export interface GetvideoAct 
    {
    action: videoAct.GETvideo,
    payload: Shapevideo[]
}

export interface AddmessageAct 
    {
    action: messageAct.ADDmessage,
    payload: Shapemessage
}

export interface GetmessageAct {
    action: messageAct.GETmessage,
    payload: Shapemessage[]
} */ 

/* export type Actions = LogInAction | LogOutAction | AddsheetAct | GETsheetAct | AddvideoAct | GetvideoAct | AddmessageAct | GetmessageAct ; */
export type Actions = NavigateAction;