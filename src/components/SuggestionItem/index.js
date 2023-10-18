// Write your code here
import './index.css'

const Searchable = props => {
  const {SearchableDetails, suggestedSearch} = props
  const {suggestion} = SearchableDetails
  const suggestSearch = () => {
    suggestedSearch(suggestion)
  }

  return (
    <ul className="forUl">
      <li>
        <p>{suggestion}</p>
        <img
          alt="arrow"
          className="arrow"
          onClick={suggestSearch}
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </li>
    </ul>
  )
}
export default Searchable
