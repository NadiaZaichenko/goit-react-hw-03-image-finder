import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchbar  from "./Searchbar/Searchbar";

export class App extends Component {
  state ={ 
    imagesName: ''
  }


  handleFormSubmit = imagesName => (
   this.setState({imagesName})
  )
// componentDidMount() {
//   fetch('https://pixabay.com/api/?q=cat&page=1&key=34679594-d1431b462dfbe95ceee8bf0ed&image_type=photo&orientation=horizontal&per_page=12').then(resp => resp.json()).then(images => this.setState({images}))
// }


render () {
  return (
  <>
    <Searchbar formSubmit={this.handleFormSubmit}/>

    <ToastContainer autoClose ={3000}/>
  </>
  )
}
}
