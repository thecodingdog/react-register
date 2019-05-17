import React from 'react';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8888/CodeIgniter-3.1.10/index.php/api/user')
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                this.setState({ data: data })
            });
    }

    formatResArr() {
        return (
            <ul>
                {this.state.data.map(each =>
                    <li key={each.username}>
                        {each.username}
                    </li>
                )}
            </ul>
        );
    }

    render() {
        return <div className='Modal'>
            <h1>USERS LIST</h1>
            {this.formatResArr()}
        </div>
    }
}

export default UserList;
