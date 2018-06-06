import React, { Component } from 'react';
import Layout from '../../components/Layout';

class PostDetails extends Component {
  static async getInitialProps(props){
    console.log(':id (/posts/:id) ', props.query.id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.query.id}`);
    const json = await res.json();

    return { post: json }
  }

  render(){
    return(
      <Layout>
        <h3>Post Details</h3>
        <div className="ui card">
          <div className="card" style={{ margin: '10px' }}>
            <div className="content">
              <div className="header"><b>Title</b>: {this.props.post.title}</div>
              <div className="meta">User ID: {this.props.post.userId}</div>
              <div className="description" style={{ marginTop: '10px' }}>
                <p><b>Body</b>: {this.props.post.body}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostDetails;
