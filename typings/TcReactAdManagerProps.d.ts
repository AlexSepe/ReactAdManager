/**
 * This file was generated from TcReactAdManager.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";
import { Big } from "big.js";

export interface TcReactAdManagerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    adUnit: DynamicValue<string>;
    slotName?: DynamicValue<string>;
    refreshTimer?: DynamicValue<Big>;
    sizeArray: DynamicValue<string>;
    eventImpressionViewable?: ActionValue;
}

export interface TcReactAdManagerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    adUnit: string;
    slotName: string;
    refreshTimer: string;
    sizeArray: string;
    eventImpressionViewable: {} | null;
}
