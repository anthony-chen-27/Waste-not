import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { composeTweet } from "../../actions/tweet_actions";
import TweetBox from "./tweet_box";

const ComposeTweet = ({ className }) => {
  const { userId } = useParams();

  const [currentUser, newTweet] = useSelector(({ session, tweets }) => [
    session.user,
    tweets.new,
  ]);
  // const newTweet = useSelector((state) => state.tweets.new);

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className={className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(composeTweet({ text }));
        }}
      >
        <div>
          <input
            type="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your tweet..."
          />
          <input
            type="textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Write your address..."
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <br />
      {/* <TweetBox text={newTweet} /> */}
    </div>
  );
};

export default styled(ComposeTweet)`
  background: pink;
  width: 200px;
  height: 500px;
  border: solid green;
`;

// import React from "react";
// import TweetBox from "./tweet_box";

// class TweetCompose extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       text: "",
//       newTweet: "",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ newTweet: nextProps.newTweet.text });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let tweet = {
//       text: this.state.text,
//     };

//     this.props.composeTweet(tweet);
//     this.setState({ text: "" });
//   }

//   update() {
//     return (e) =>
//       this.setState({
//         text: e.currentTarget.value,
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input
//               type="textarea"
//               value={this.state.text}
//               onChange={this.update()}
//               placeholder="Write your tweet..."
//             />
//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <br />
//         <TweetBox text={this.state.newTweet} />
//       </div>
//     );
//   }
// }

// export default TweetCompose;
