import * as React from "react";
import { LayoutInternal } from "./Layout";
import { LayoutWindow } from "../model/LayoutWindow";
import { LayoutPopup } from '../model/LayoutPopup';
/** @internal */
export interface IPopupWindowProps {
    title: string;
    layout: LayoutInternal;
    layoutWindow: LayoutPopup;
    url: string;
    onCloseWindow: (layoutWindow: LayoutWindow) => void;
    onSetWindow: (layoutWindow: LayoutWindow, window: Window) => void;
}
/** @internal */
export declare const Popup: (props: React.PropsWithChildren<IPopupWindowProps>) => React.ReactPortal;
