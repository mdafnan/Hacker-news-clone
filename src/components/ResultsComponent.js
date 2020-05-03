import React, { Component } from "react";
import "../App.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Button from "terra-button";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

class ResultsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("11111", this.props);
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
          {this.props.results &&
            this.props.results.hits /* .filter(isSearched(pattern)) */
              .map((item) => (
                <div key={item.objectID} className="table-row">
                  <span style={{ width: "10%" }}>{item.num_comments}</span>
                  <span style={{ width: "10%" }}>{item.points}</span>
                  <span style={{ width: "10%" }}></span>
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

export default ResultsComponent;
