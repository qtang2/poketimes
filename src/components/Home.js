import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 10),
  //     });
  //   });
  // }
  render() {
    console.log(this.props);

    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div>
              <img src={Pokeball} alt="a pokeball" />
            </div>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>No posts yet</div>
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <p>{postList}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
