import { Component, ReactNode, createElement } from "react";
import { Ad } from "react-ad-manager";
import { TcReactAdManagerContainerProps } from "../typings/TcReactAdManagerProps";

import "./ui/TcReactAdManager.css";

export class TcReactAdManager extends Component<TcReactAdManagerContainerProps> {
    static counter = 0;
    private unitSlotName = "";
    private readonly eventImpressionViewableHandler = this.eventImpressionViewable.bind(this);
    render(): ReactNode {
        // Check https://socket.dev/npm/package/react-ad-manager

        const strarray = this.props.sizeArray.value || "[]";
        const sizeArrayObj = JSON.parse(strarray);
        let refreshTimer = this.props.refreshTimer?.value?.toNumber();
        if (!refreshTimer || refreshTimer <= 0) {
            refreshTimer = undefined;
        }
        if (!this.unitSlotName) {
            this.unitSlotName =
                this.props.slotName?.value || "div-add-" + this.props.name + "_" + TcReactAdManager.counter++;
        }
        return (
            <Ad
                adUnit={this.props.adUnit.value || ""}
                name={this.unitSlotName}
                size={sizeArrayObj}
                refreshTimer={refreshTimer}
                eventImpressionViewable={() => {
                    console.log("⭐️ eventImpressionViewable of slot " + this.unitSlotName);
                    this.eventImpressionViewableHandler();
                }}
            />
        );
    }

    private eventImpressionViewable(): void {
        if (this.props.eventImpressionViewable && this.props.eventImpressionViewable.canExecute) {
            this.props.eventImpressionViewable.execute();
        }
    }
}
