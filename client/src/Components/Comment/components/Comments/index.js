import { Component } from "react";
import { v4 } from "uuid";

import CommentItem from "../CommentItem";

import "./index.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue"
];

class Comments extends Component {
  state = {
    username: "",
    comment: "",
    commentsList: []
  };

  deleteComment = (commentId) => {
    const { commentsList } = this.state;
    this.setState({
      commentsList: commentsList.filter((comment) => comment.id !== commentId)
    });
  };

  toggleIsLiked = (id) => {
    this.setState((prevState) => ({
      commentsList: prevState.commentsList.map((eachComment) => {
        if (id === eachComment.id) {
          return { ...eachComment, isLiked: !eachComment.isLiked };
        }
        return eachComment;
      })
    }));
  };

  renderCommentsList = () => {
    const { commentsList } = this.state;
    return commentsList.map((eachComment) => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ));
  };

  onAddComment = (event) => {
    event.preventDefault();
    const { username, comment } = this.state;

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ]
    }`;
    const newComment = {
      id: v4(),
      username,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName
    };

    this.setState((prevState) => ({
      commentsList: [...prevState.commentsList, newComment],
      username: "",
      comment: ""
    }));
  };

  onChangeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  };

  onChangeName = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const { username, comment, commentsList } = this.state;

    return (
      <div className="comments-app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comentários e Sugestões</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Aqui é uma área de sugestões e comentário sobre o site..
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={username}
                onChange={this.onChangeName}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={comment}
                onChange={this.onChangeComment}
                rows="6"
              />
              <button type="submit" className="add-button">
                Adicionar Comentário
              </button>
            </form>
            <img
              className="image"
              src="https://theme.zdassets.com/theme_assets/43400/ec321e24d47d73af75c31e19e189d52ca46661e4.jpg"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    );
  }
}

export default Comments;
