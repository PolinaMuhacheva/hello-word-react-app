import React, {Component} from "react"
import Menu from "./Afcomponent";

export  default class Ccomponetn extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    plus() {
        this.setState(state => ({
            count: state.count + 1
        }));}
        minus(){
            this.setState(state => ({
                count: state.count - 1
            }));
        }

        render() {
            return (
                <div>
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.minus}>+</button>
                    <h1>{this.state.count}</h1>
                </div>
            )
        }

}