import { Component, ReactNode, createElement } from "react";
import { Ad } from "react-ad-manager";
import { TcReactAdManagerContainerProps } from "../typings/TcReactAdManagerProps";

import "./ui/TcReactAdManager.css";

export class TcReactAdManager extends Component<TcReactAdManagerContainerProps> {
    static counter = 0;
    private unitSlotName = "";
    private readonly eventImpressionViewableHandler = this.eventImpressionViewable.bind(this);

    private destroySlotsSameId(slotElementId: string): void {
        // Workaround para destruir slots com nomes duplicados - ocorre em caso de refresh Mendix, onde o react-ad-manager não recebe o dismount e não destroy por lá
        // Então antes de criar um novo AdSlot acessamos direto o DOM do GPT e destruimos!!!
        // window.googletag.pubads().getSlots().find((slot) => slot.getSlotElementId() === "div-ad-02")
        const googletag = window.googletag;
        if (googletag) {
            try {
                const slot = window.googletag
                    .pubads()
                    .getSlots()
                    .find((slot: { getSlotElementId: () => string }) => slot.getSlotElementId() === slotElementId);
                if (slot) {
                    console.log("⛔ destroying slot " + slotElementId);
                    googletag.destroySlots([slot]);
                }
            } catch (error) {
                console.warn(error);
            }
        }
    }

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
        this.destroySlotsSameId(this.unitSlotName);
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
