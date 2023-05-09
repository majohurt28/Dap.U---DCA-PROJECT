import Shapevideos from '../services/apiVideo'
import Shapemessages from '../services/apiMessage'
import ShapemusicSheets from '../services/apimusicsheets'

import { AuthActions, AddvideoAct , sheetAct, GETsheetAct, AddsheetAct, GetvideoAct , messageAct, videoAct, LogInAction, LogOutAction,  AddmessageAct , GetmessageAct } from "../types/store"


export const logOut = (): LogOutAction => {
    return {
        action: AuthActions.LOGOUT,
        payload: undefined
    }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
    return {
        action: AuthActions.LOGIN,
        payload
    }
}

export const getmessage = async (): Promise<GetmessageAct > => {
    const message = await Shapemessages.get();
    return {
        action: messageAct.GETmessage,
        payload: message
    }
}

export const getvideo = async (): Promise<GetvideoAct> => {
    const video = await Shapevideos.get();
    return {
        action: videoAct.GETvideo,
        payload: video
    }
}

export const getsheet = async (): Promise<GETsheetAct> => {
    const sheets = await ShapemusicSheets.get();
    return {
        action: sheetAct.GETsheet,
        payload: sheets
    }
}

export const addNewmessage = ({payload}: Pick<AddmessageAct, "payload">): AddmessageAct => {
    return {
        action: messageAct.ADDmessage,
        payload
    }
}
