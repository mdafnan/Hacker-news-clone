import React, { Component } from "react";
import axios from "axios";
import Button from "terra-button";
import "./App.css";
import ResultsComponent from "./components/ResultsComponent";
import LineChart from "react-linechart";
import "../node_modules/react-linechart/dist/styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import authenticateActions from "./reducers/actions/authenticate_actions";
// import {
//   incrementAction,
//   decreaseAction,
// } from "./reducers/actions/authenticate_actions";

const DEFAULT_QUERY = "";
const DEFAULT_PAGE = 0;
const DEFAULT_HPP = 30;
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      query: DEFAULT_QUERY,
      page: DEFAULT_PAGE,
      searchKey: "",
    };
  }
  componentDidMount() {
    this.fetchSearchTopStories(this.state.query, this.state.page);
  }

  fetchSearchTopStories = (query, page) => {
    axios
      .get(
        `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${query}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
        // "https://hn.algolia.com/api/v1/search?tags=front_page"
        //"https://hn.algolia.com/api/v1/search?query=bar&tags=comment"
        // "https://hn.algolia.com/api/v1/items/7408055"
        // "http://hn.algolia.com/api/v1/search_by_date?query=..."
        //"http://hn.algolia.com/api/v1/search?tags=comment,story_X"
      )
      .then((res) => {
        //  console.log("res", res);
        const storyData = res.data;
        this.setState({ results: storyData, page: storyData.page });
        this.props.authenticateActions.fetchData(storyData.hits);
      });
  };

  render() {
    console.log("props data", this.props.persistedDetails.value);
    //   console.log("story data response", this.state.results);
    let lineData = [];
    this.state.results &&
      this.state.results.hits.map((data) => {
        lineData.push({ x: data.objectID, y: data.points });
      });
    const chartdata = [
      {
        color: "steelblue",
        points: lineData,
      },
    ];
    return (
      <>
        {/* <ConnectedApp /> */}
        <div className="centered">
          <div className="parent-border">
            <div className="results-container">
              <ResultsComponent results={this.state.results} />
              {/* <div className="btn-alignment"> */}

              <div className="btn-alignment">
                <Button
                  variant="de-emphasis"
                  isDisabled={this.state.page === 0}
                  text="Previous"
                  onClick={() =>
                    this.fetchSearchTopStories(
                      this.state.searchKey,
                      this.state.page - 1
                    )
                  }
                ></Button>{" "}
                |{" "}
                <Button
                  className="nextbtn"
                  variant="de-emphasis"
                  text="Next"
                  onClick={() =>
                    this.fetchSearchTopStories(
                      this.state.searchKey,
                      this.state.page + 1
                    )
                  }
                ></Button>
              </div>
            </div>
            <div>
              <LineChart
                className="chart-class"
                height={"400px"}
                data={chartdata}
                xLabel="id"
                yLabel="Votes"
              />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

//const ConnectedApp = connect(mapStateToProps)(App);

//export default App;
