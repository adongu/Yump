import React from 'react';
import { Link, hashHistory, router, withRouter } from 'react-router'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { keywords: "" };

    this.handleInput = this.handleInput.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRTSearch = this.handleRTSearch.bind(this)
  }

  componentDidMount (){
    console.log(this.props.location.query.query);
    if (this.props.location.query) {
      this.setState({
        keywords: this.props.location.query.query
      });
    }
  }
  componentDidReceiveProps (newProps){
    if (newProps.location) {
      if (this.props.location.query.query !== newProps.location.query.query) {
        this.setState({
          keywords: newProps.location.query.query
        })
        this.props.fetchResults(newProps.location.query.query)
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === "/" || (this.params && this.state.keywords !== this.params.query)) {
      let query = this.state.keywords
        hashHistory.push({
          pathname:`/searches`,
          query: { query }
        })
        // this.setState({ keywords: query })
    }
  }

  handleInput(e) {
    // console.log(this.props.location.pathname);
    // console.log("this.params", this);
    if (this.props.location.pathname !== "/") {
      this.handleRTSearch(e);
    } else {
      this.update(e);
    }
  }

  handleRTSearch(e) {
    if (this.state) {
      let query = e.target.value
      hashHistory.push({
        pathname:`/searches`,
        query: { query }
      })
    }
  }

  update(e) {
    // console.log("state", this.state);
    // return (e) =>
    this.setState({
      keywords: e.target.value
    });
  }

// <input onChange={this.update("keywords")}
  render(){
    let keyword_value = this.state.keywords;
    return(
      <form onSubmit={this.handleSubmit} className="header__nav-search-box">
        <label className="header__nav-search-find-label"> <span>Find</span>
          <input onInput={this.handleInput} className="header__nav-search-find-input" placeholder="tacos, cheap dinner, Jeff's" value={this.state.keywords || ''}></input>
        </label>

        <button className="header__nav-search-btn"><i className="fa fa-search fa" aria-hidden="true" ></i></button>
      </form>
    )
  }
}


export default withRouter(SearchBar);
