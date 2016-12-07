import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import SearchBar from './components/search_bar'
import RepoList from './components/repo_list'


const url = 'https://api.github.com/repositories'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repositories: null
    }

    this._fetchData()
  }

  _fetchData(){
    Axios.get(url)
      .then((response) => {
        this.setState({
          repositories: response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {
    if(this.state.repositories === null){
      return <p>loading</p>
    }

    return (
      // <div className="modal-content">
      //   <div className="modal-header">
      //     <h4 className="modal-title">Public Git Repositories</h4>
      //   </div>
      //   <div className="modal-body">
          <div>
            <SearchBar />
            <RepoList repositories={this.state.repositories} />
          </div>
      //   </div>
      // </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'))
