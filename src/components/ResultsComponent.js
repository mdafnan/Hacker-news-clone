import React, { Component } from "react";
import "../App.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import hackerActions from "../reducers/actions/hackerActions";
import moment from "moment";
import "moment/locale/fr";
import "moment/locale/es";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

class ResultsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  upvote = (rowId) => {
    console.log("123 called");
    this.props.results.map((item) => {
      if (rowId === item.objectID) {
        this.props.hackerActions.incrementAction(item.points, rowId);
      }
    });
  };

  hide = (objid) => {
    // console.log("called hide button");
    this.props.hackerActions.hideAction(objid);
  };

  render() {
    //  console.log("11111", this.props);
    console.log("this.props.results: ", this.props.results);
    const Table = () => {
      //  const searchedResults = this.props.results;
      return (
        <div className="table">
          <div className="table-header">
            <span style={{ width: "5%" }}>
              <div>Comments</div>
            </span>
            <span style={{ width: "5%" }}>
              <div>Vote Count</div>
            </span>
            <span style={{ width: "5%" }}>
              <div>UpVotes</div>
            </span>
            <span style={{ width: "85%" }}>
              <div>News Details</div>
            </span>
          </div>
          {this.props.results &&
            this.props.results /* .filter(isSearched(pattern)) */
              .map((item) => (
                <div
                  key={item.objectID}
                  id={item.objectID}
                  className="table-row"
                >
                  <span style={{ width: "5%" }}>{item.num_comments}</span>
                  <span style={{ width: "5%" }}>{item.points}</span>

                  <span
                    className="arrow-up"
                    style={{ width: "5%" }}
                    onClick={() => this.upvote(item.objectID)}
                  >
                    ^{/* <span ></span> */}
                  </span>
                  <span style={{ width: "85%", textAlign: "left" }}>
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
                      {/* {moment().diff(item.created_at, "years", false)} */}
                      {/* {moment(item.created_at_i).fromNow()} */}
                    </span>
                    <span className="subject hidebtn">
                      [
                      <span onClick={() => this.hide(item.objectID)}>hide</span>
                      ]
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
  hackerActions: bindActionCreators(hackerActions, dispatch),
});

export const mapStateToProps = (state) => ({
  persistedDetails: state.persistedDetails,
  results: state.form.results,
  value: state.form.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent);

// export default ResultsComponent;
