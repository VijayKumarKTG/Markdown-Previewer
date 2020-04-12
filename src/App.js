import React from 'react';
import './App.css';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let textarea = document.querySelector('#editor');
    let code = textarea.value;
    console.log(code);
    let value = marked(code);
    let preview = document.querySelector('#preview');
    preview.innerHTML = value;
  }
  render() {
    return (
      <div className="App">
        <header>
          <i className="fab fa-markdown"></i> Simple: A Markdown Previewer
        </header>
        <div className="editor">
          <div className="head">
            <i className="fas fa-edit"></i> Editor
          </div>
          <textarea
            defaultValue="# Please enter your markdown codes here"
            id="editor"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="previewer">
          <div className="head">
            <i className="fas fa-search"></i> Previewer
          </div>
          <div id="preview">Your code output will be shown here</div>
        </div>
      </div>
    );
  }
}

export default App;
