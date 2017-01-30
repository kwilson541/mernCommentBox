import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { author: '', test: '' };
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleAuthorChange(e) {
		this.setState({ author: e.target.value });
	}
	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(`${this.state.author} said "${this.state.text}"`)
	}
	render() {
		return (
			<form style={ style.CommentForm } onSubmit={ this.handleSubmit }>
				<input
					type='text'
					placeholder='Youe name...'
					style={ style.CommentFormAuthor }
					value={ this.state.author }
					onChange={ this.handleAuthorChange } />
				<input
					type='text'
					placeholder='Say something...'
					style={ style.CommentFormText }
					value={ this.state.text }
					onChange={ this.handleTextChange } />
				<input
					type='submit'
					style={ style.CommentFormPost }
					value='Post' />
			</form>
		)
	}
}

export default CommentForm;