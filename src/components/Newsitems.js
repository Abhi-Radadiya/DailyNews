import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { description, title, imgeurl, newsurl ,loadingGif,author,date,source_name,source_id} = this.props;
    return (
      <>
      <img src={loadingGif} alt=""  />
      <div className="mt-30">
        <div className="card">
          <img src={imgeurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl}  target="_blank"  className="btn btn-dark">
              Read More
            </a>
            <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
            <p >{source_id} </p>
            <p >{source_name} </p>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Newsitems;
