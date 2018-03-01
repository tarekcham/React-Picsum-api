import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import Layout from './componants/Layout';
import bear from './images/bear.gif'

//import Image from './Image'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      author: '',
      post_url: '',
      author_url: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://picsum.photos/list';

    //     fetch promise
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => this.setState({ term:'', img: "https://picsum.photos/1280/1080?image="+data[0].id }))
    //   .catch(e => console.log('error', e));

    const fetchAsync = async() => {
      try{
        const result = await fetch(url);
        const data = await result.json();
        const random = Math.floor(Math.random() * Object.keys(data).length);
        //console.log(data[0]);
        this.setState({
            img: "https://picsum.photos/1280/1080?image="+data[random].id,
            author: data[random].author,
            post_url: data[random].post_url,
            author_url:data[random].author_url
          })
      
        }
        catch(err){
          console.log(err)
        }


        }
    fetchAsync()

    }
   
  render() {
 
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={bear} className="App-logo" alt="logo" />
          <h1 className="App-title">Retrieve a random-image from Picsum List API</h1>
        </header>
        <h1 className="App-intro">
          Click here
        </h1>

        <div>
        <button onClick={this.handleSubmit}> Fetch </button>
        </div>
        
        <div>
           <Layout author={this.state.author} post_url={this.state.post_url}
           author_url={this.state.author_url} img={this.state.img}  />
        </div>

      </div>
    </div>
    );
  }
}

export default App;
