// 自定义react input
import React from 'react';
class Input extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return (
            <input type={this.props.type} />
        )
    }
}

module.exports = Input;