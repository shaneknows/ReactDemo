import React, { Component } from 'react';
import "./hyde.css"

class Head extends Component {
    constructor () {
        super();
        this.state = {
            title: "shaneknows",
            gravatar: "bc02c2cc888a4cf3603a625663c7dfa9",
            description: "Let's talk code."
        };
    }
    
    render() {
        return (            
        <header className="masthead">
            <div className="masthead-topImage">
                <img src={`http://www.gravatar.com/avatar/${this.state.gravatar}?s=200`} alt="Logo" />
            </div>
            <div className="masthead-inner">
                <h2>{this.state.title}</h2>
                <p className="lead">{this.state.description}</p>
                <a href="https://shaneknows.github.io/">Blog</a> |&nbsp;
                <a href="https://shaneknows.github.io/Naifu/">Naifu</a> |&nbsp;
                <a href="https://shaneknows.github.io/ReactDemo/">React Demo</a>
            </div>
        </header>
        );
    }
}

export default Head;