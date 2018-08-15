import React from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../actions/index';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => ({
    addArticle: article => dispatch(addArticle(article)),
});

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const {title} = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ''});
    }

    render() {
        const {title} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div><button type="submit">SAVE</button></div>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(Form);