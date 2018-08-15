import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    articles: state.articles,
})

const List = ({articles}) => {
    return (
    <ul>
        {articles.map((el) => {
            return (
                <li key={el.id}>{el.title}</li>
        )})}
    </ul>
)}

export default connect(mapStateToProps)(List);