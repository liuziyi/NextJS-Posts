import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Router } from '../../routes';

class PostsNew extends Component {
  state = {
    title: '',
    body: '',
    errorMessage: ''
  }

  onSubmit = (event) => {
    event.preventDefault();

    console.log('TITLE: ', this.state.title)
    console.log('BODY: ', this.state.body)
    if(this.state.title == '' && this.state.body == ''){
      console.log('ERROR ')
      this.setState({ errorMessage: 'This field cannot be empty' });
    }else{
      console.log('NO ERROR ')
      this.setState({ errorMessage: '' });

      Router.pushRoute('/');
    }
  }

  render(){
    const errorMessage = this.state.errorMessage ? (
      <div className="ui warning message">
        <i className="close icon"></i>
        <div className="header">
          {this.state.errorMessage}
        </div>
      </div>
    ) : (<div></div>)

    return(
      <Layout>
        <h1>Create a New Post</h1>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              onChange={event => this.setState({ title: event.target.value })}
            />
          </div>
          <div className="field">
            <label>Body</label>
            <textarea rows="2" onChange={event => this.setState({ body: event.target.value })}>
            </textarea>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
        {errorMessage}
      </Layout>
    )
  }
}

export default PostsNew;
