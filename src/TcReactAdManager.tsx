import { Component, ReactNode, createElement } from "react";
import { Ad } from "react-ad-manager";
import { TcReactAdManagerContainerProps } from "../typings/TcReactAdManagerProps";

import "./ui/TcReactAdManager.css";

export class TcReactAdManager extends Component<TcReactAdManagerContainerProps> {
    render(): ReactNode {
        //return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;

        let strarray = this.props.sizeArray.value || "[]";
        let sizeArrayObj = JSON.parse(strarray);

        const refreshTimer = this.props.refreshTimer;
        return (
            <Ad
                adUnit={this.props.adUnit.value || ""}
                name={"div-ad-"+this.props.name}
                size={sizeArrayObj}                
                refreshTimer={refreshTimer}                                
            />
        );
    }
}
