import { Component } from "react"
import { toast } from "react-toastify"
export default class Searchbar extends Component {
    state = {
       imagesNameSearch : ''
    }

    handleImagesName = (e) => {
      this.setState({imagesNameSearch: e.currentTarget.value.toLowerCase()})
    }
    heandleSudmit =(e) => {
      e.preventDefault()
      if(this.state.imagesNameSearch.trim() === '') {
        toast.warn("Please, Enter you search");
        return
      }
      this.props.formSubmit(this.state.imagesNameSearch)
      this.setState({imagesNameSearch: ''})
    }


    render() {
        return (
            <header className="searchbar">
             <form className="form" onSubmit={this.heandleSudmit}>
             <button type="submit" className="button">
                <span className="button-label">Search</span>
             </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      value={this.state.imagesNameSearch}
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleImagesName}
    />
  </form>
</header>
        )
    }
}