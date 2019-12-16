import React from 'react';
import { SignupBanner, SignupWrapperStyled, SignupStyled, SignupHeader } from './SignupStyled';
import { Button, StyledLink, SignupLink } from '../Button';
import axios from 'axios';

export default class Signup extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleName = (e) => {
		this.setState({
			...this.state,
			name: e.target.value
		});
	};

	handleEmail = (e) => {
		this.setState({
			...this.state,
			email: e.target.value
		});
	};

	handlePassword = (e) => {
		this.setState({
			...this.state,
			password: e.target.value
		});
	};

	handleConfirmPassword = (e) => {
		this.setState({
			...this.state,
			confirmPassword: e.target.value
		});
	};

	handleSignUp = (e) => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		};
		axios.post('/api/users', { user }).then((resp) => {
			console.log(resp.data);
		});
	};

	render() {
		return (
			<SignupBanner>
				<SignupWrapperStyled>
					<SignupStyled>
						<SignupHeader>Sign-Up</SignupHeader>
						<input type="text" placeholder="Name" required onChange={this.handleName} />
						<input type="text" placeholder="Email" required onChange={this.handleEmail} />
						<input type="text" placeholder="Password" required onChange={this.handlePassword} />
						<input type="text" placeholder="Confirm Password" required onChange={this.handleConfirmPassword} />
						<StyledLink to="/menu">
							<Button onClick={this.handleSignUp}>Sign-Up</Button>
						</StyledLink>
						<p>
							<SignupLink to="/login">Already have an account?</SignupLink>
						</p>
					</SignupStyled>
				</SignupWrapperStyled>
			</SignupBanner>
		);
	}
}
