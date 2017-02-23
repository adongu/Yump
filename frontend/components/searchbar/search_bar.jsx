import React from 'react';
import { Link, hashHistory, router } from 'react-router'

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { keywords:"" };

    // this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state) {
      let query = this.state.keywords
      console.log("hit Submit", query)
      hashHistory.push({
        pathname:`/searches`,
        query: { query }
      })
    }
  }


  update(keywords) {
    return (e) => this.setState({ [keywords]: e.target.value })
  }

  render(){
    return(
      <form className="header__nav-search-box">
        <label className="header__nav-search-find-label"> <span>Find</span>
          <input onChange={this.update("keywords")} className="header__nav-search-find-input" placeholder="tacos, cheap dinner, Jeff's"></input>
        </label>

        <button onClick={this.handleSubmit} className="header__nav-search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    )
  }
}


export default SearchBar;
