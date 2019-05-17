import React from 'react';
import Logo from './Logo'

class Modal extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    inputChangedHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.appModalProp(this.state)
        });

    }

    render() {
        return <div className='Modal'>
            <Logo />
            <form onSubmit={this.props.onSubmit}>
                <div className='Input'>

                    <input type='username' name='username' placeholder='test@test.com' onChange={(event) => this.inputChangedHandler(event)} />

                    <label for='username' ></label>
                </div>

                <div className='Input'>
                    <input type='password' name='password' onKeyUp={(event) => this.inputChangedHandler(event)} />
                    <label for='password' ></label>
                </div>

                <button> Sign In</button>
            </form>
            <a href='/about'>view other users</a>
        </div>
    }
}

export default Modal;
