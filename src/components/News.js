import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "general",
    country: "us",
  };

  static propTypes = { country: PropTypes.string, category: PropTypes.string };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 0,
      loading: false,
    };
  }

  updateIt = async () => {
    this.setState({ loading: true, page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c8931bfc413d4cfa859e8d0ef83793dc&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.fetchMoreData()
    this.setState({ page: this.state.page + 1 });
  
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c8931bfc413d4cfa859e8d0ef83793dc&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              this.state.articles.length === this.state.totalResults ? (
                <Spinner />
              ) : (
                ""
              )
            }
          >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Newsitems
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "title null"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "description null"
                      }
                      imgeurl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://image.cnbcfm.com/api/v1/image/107138943-1666373971994-gettyimages-1417565288-coachtrip0011131.jpeg?v=1666379188&w=1920&h=1080"
                      }
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source_id={
                        element.source.id ? element.source.id : "Unknown"
                      }
                      source_name={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
export default News;