import { Actions, AppState, AuthActions, messageAct , videoAct, sheetAct  } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: ""
                }
            }
            
        case messageAct.ADDmessage:
            return {
                ...currentState,
                message: [
                    payload,
                    ...currentState.message,
                ]
            }
        
        case messageAct.GETmessage:
            return {
                ...currentState,
                message: payload
            }

         case sheetAct.GETsheet:
                return {
                    ...currentState,
                    sheets: payload
                }

    case sheetAct.ADDsheet:
                return {
                    ...currentState,
                    sheets: payload
                }

        case videoAct.ADDvideo:
            return {
                ...currentState,
                video: [
                    payload,
                    ...currentState.video,
                ]
            }
        
        case videoAct.GETvideo:
            return {
                ...currentState,
                video: payload
            }

    
        default:
            return currentState;
    }
}