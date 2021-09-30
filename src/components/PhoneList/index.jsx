import React, { Component } from "react";

class PhoneList extends Component {
    constructor(props) {
        super(props);

        this.phoneList = [
            "8805553535",
            "0112223344",
            "0556667788",
            "0990001122",
        ];
    }

    render() {

        const arrayJSX = this.phoneList.map((value) => {
            const elemJSX = (
                <li key={value}>{value}</li>
            );
            return elemJSX;
        });

        return (
            <div>
                <h4>Список контактов</h4>
                <ul>{arrayJSX}</ul>
            </div>
        );
    }
}

export default PhoneList;
