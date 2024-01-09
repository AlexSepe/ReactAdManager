import { Component, ReactNode, createElement } from "react";
import { TcReactAdManagerPreviewProps } from "../typings/TcReactAdManagerProps";

export class preview extends Component<TcReactAdManagerPreviewProps> {
    render(): ReactNode {
        return <div> no render! </div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TcReactAdManager.css");
}
