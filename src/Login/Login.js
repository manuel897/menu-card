import React from 'react';
import './../App.css';
import './Login.css';
import './../Shared.css';
import LoginIcon from '@mui/icons-material/Login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    areFieldsEmpty() {
        let fieldsEmpty = false;
        if (this.state.username == '' || this.state.password == '') {
            fieldsEmpty = true;
        }
        return fieldsEmpty;
    }

    login() {
        if (this.areFieldsEmpty()) {
            window.alert(
                'Some fields are empty.Please provide a username and password to continue'
            );
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state),
            };

            window
                .fetch('http://localhost:8080/auth/login', requestOptions)
                .then(res => {
                    switch (res.status) {
                        case 200:
                            res.json().then(
                                res => {
                                    this.props.setJwt(res.token);
                                },
                                error => {
                                    console.error(error);
                                    window.alert('Something went wrong');
                                }
                            );
                            break;

                        case 401:
                            window.alert('Username or password is incorrect');
                            break;

                        default:
                            window.alert('Could not log in');
                            break;
                    }
                })
                .catch(error => {
                    window.alert('Could not connect to server');
                });
        }
    }

    render() {
        return (
            <div className="login-box">
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    placeholder="Username"
                />

                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    placeholder="password"
                />

                <button
                    className="standard-button"
                    onClick={() => this.login()}
                >
                    Login
                    <div className="icon-box">
                        <LoginIcon />
                    </div>
                </button>
            </div>
        );
    }
}

export default Login;
