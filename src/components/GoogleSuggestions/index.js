// Write your code here
import {Component} from 'react'
import Searchable from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  userSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestedSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchedResult = suggestionsList.filter(search =>
      search.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="forSearch">
          <div className="searchBar">
            <img
              alt="search icon"
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              onChange={this.userSearch}
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul>
            {searchedResult.map(searches => (
              <Searchable
                key={searches.id}
                unq={searches.id}
                SearchableDetails={searches}
                suggestedSearch={this.suggestedSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
