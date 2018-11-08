import React, {Component} from 'react';
class Item extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let style = {
            color: "#000",
        }
        if (this.props.item.name == this.props.search) {
            style.color = "#f00";
        }
        return <li><label style={style}>{this.props.item.name}</label>, {this.props.item.price}</li>
    }
}
export default Item;