import "./SearchBar.css"
import React from 'react';


class SearchBar extends React.Component{
    state = { term: '' };
    onInputChange = (e) => {
        if(e.target.value.length===1){
            this.setState({term: e.target.value.toUpperCase()})
        } else {
            this.setState({ term: e.target.value });
        }
    }
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="search-bar">
                <form onSubmit= {this.onFormSubmit}>
                    <div className = "ui search">
                        <input value = {this.state.term} onChange = {this.onInputChange} className = "prompt" type="text" placeholder="Search..." />
                        <div className = "results"></div>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;
