import React, { Component } from "react"

export default class Logs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.logs.map((log, i) => {
                        return <span key={i}>{log}<br/></span>
                    })}
                </ul>
            </div>
        )
    }
}
