import React from 'react';
import './App.scss'
import Modal from './Modal'
import ModalBack from './ModalBack'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
const ReactCSSTG = CSSTransitionGroup;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            username: '',
            password: ''
        }
        // Bindings
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemount = this.handleRemount.bind(this);
        this.registerReceived = this.registerReceived.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isVisible: false,
        }, function () {
        });
        alert('A name was submitted: ' + this.state.username);
        this.postUser()
        return false;
    }

    postUser() {
        var formData = new FormData();

        formData.append('username', this.state.username);
        formData.append('password', this.state.password);

        return fetch(`http://localhost:8888/CodeIgniter-3.1.10/index.php/api/user`, {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then((res) => {
            console.log('res', res)
        })
    }

    handleRemount(e) {
        this.setState({
            isVisible: true
        }, function () {
            console.log(this.state.isVisible)
        });
        e.preventDefault();
    }

    registerReceived(receive) {
        // console.log('regsiter', receive)
        this.setState({
            username: receive.username,
            password: receive.password,
        })
    }

    render() {
        // const for React CSS transition declaration
        let component = this.state.isVisible ? <Modal onSubmit={this.handleSubmit} key='modal' appModalProp={this.registerReceived} /> : <ModalBack onClick={this.handleRemount} key='bringitback' />;

        return <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            {component}
        </ReactCSSTG>
    }
}

export default App;
