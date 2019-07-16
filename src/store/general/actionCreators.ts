import {ISize} from "../../interfaces/ISize";
import {GeneralActionTypes} from "./types";
import {Action} from "../Actions";
import {PopupWindowType} from "../../data/PopupWindowType";
import {MobileDeviceData} from "../../data/MobileDeviceData";

export function updateWindowSize(windowSize: ISize): GeneralActionTypes {
    return {
        type: Action.UPDATE_WINDOW_SIZE,
        payload: {
            windowSize,
        },
    };
}

export function updateActivePopupType(activePopupType: PopupWindowType): GeneralActionTypes {
    return {
        type: Action.UPDATE_ACTIVE_POPUP_TYPE,
        payload: {
            activePopupType,
        }
    }
}

export function updateMobileDeviceData(mobileDeviceData: MobileDeviceData): GeneralActionTypes {
    return {
        type: Action.UPDATE_MOBILE_DEVICE_DATA,
        payload: {
            mobileDeviceData,
        }
    }
}