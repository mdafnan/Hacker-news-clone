import React, { Component } from "react";
import "../App.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Button from "terra-button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authenticateActions from "../reducers/actions/authenticate_actions";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

class ResultsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  upvote = (rowId) => {
    this.props.persistedDetails.results.map((item) => {
      if (rowId === item.objectID) {
        this.props.authenticateActions.incrementAction(item.points);
      }
    });
  };

  render() {
    console.log("11111", this.props.persistedDetails.results);
    const Table = () => {
      //  const searchedResults = this.props.results;
      return (
        <div className="table">
          <div className="table-header">
            <span style={{ width: "10%" }}>
              <div>Comments</div>
            </span>
            <span style={{ width: "10%" }}>
              <div>Vote Count</div>
            </span>
            <span style={{ width: "10%" }}>
              <div>UpVotes</div>
            </span>
            <span style={{ width: "70%" }}>
              <div>News Details</div>
            </span>
          </div>
          {this.props.persistedDetails.results &&
            this.props.persistedDetails.results /* .filter(isSearched(pattern)) */
              .map((item) => (
                <div key={item.objectID} className="table-row">
                  <span style={{ width: "10%" }}>{item.num_comments}</span>
                  <span style={{ width: "10%" }}>{item.points}</span>
                  <span style={{ width: "10%" }}>
                    <Button
                      text="upvote"
                      onClick={() => this.upvote(item.objectID)}
                    ></Button>
                  </span>
                  <span style={{ width: "70%", textAlign: "left" }}>
                    {item.title}{" "}
                    <span className="subject url-width">
                      (
                      <a href={item.url} target="_blank" className="subject">
                        {item.url}
                      </a>
                      )
                    </span>{" "}
                    <span className="subject">by</span>{" "}
                    <span className="author">{item.author}</span>{" "}
                    <span className="subject">
                      {timeAgo.format(item.created_at_i)}{" "}
                    </span>
                    <span className="subject hidebtn">
                      [<span>hide</span>]
                    </span>
                  </span>
                </div>
              ))}
        </div>
      );
    };
    return (
      <>
        <div>
          <Table />{" "}
        </div>
      </>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  authenticateActions: bindActionCreators(authenticateActions, dispatch),
});

export const mapStateToProps = (state) => ({
  persistedDetails: state.persistedDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);

// export default ResultsComponent;
