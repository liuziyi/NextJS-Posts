import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import { Link } from '../routes';

class PostsIndex extends Component {
  static async getInitialProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    console.log('JSON ', json)

    return { posts: json }
  }

  renderPosts(){
    const post = this.props.posts.map(post => {
      return(
        <div className="ui card" key={post.id}>
          <div className="card">
            <div className="content" style={{ margin: '20px' }}>
              <div className="header">{post.title}</div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              <Link route={`/posts/${post.id}`}>
                <a>View Details</a>
              </Link>
            </div>
          </div>
        </div>
      )
    });

    return post;
  }

  render(){
    return(
      <Layout>
        <div>
          <h1>List of Posts</h1>
          {this.renderPosts()}
        </div>
      </Layout>
    )
  }
}

export default PostsIndex;
