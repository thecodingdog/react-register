import React from 'react';

class ModalBack extends React.Component {
    render() {
        return <button className="bringitback" onClick={this.props.onClick} key={this.props.className}>Brind the modal back !</button>
    }
}

export default ModalBack;
