import React from 'react';

// class component
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    onInputChange(e) {
       this.props.inputChange(e);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.formSubmitted();
    }

    render() {

        const location = this.props.location;

        return(
            <div>

                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <button type="submit">
                        Search
                    </button>
                    <input id="search" name="search" value={location} onChange={(e) => this.onInputChange(e)}>

                    </input>
                </form>

            </div>
        )
    }

}

export default SearchBar;