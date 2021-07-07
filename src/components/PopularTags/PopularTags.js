import axios from 'axios';
import React, { Component } from 'react';
import  './PopularTagsstyles.css';

export default class PopularTags extends Component {
    componentDidMount(){
        console.log("console");
        axios.get(`https://conduit.productionready.io/api/tags'`).then((response)=>{console.log(response)}) .catch((reject)=>{console.log(reject);})
    }
    render() {
        return (
            <div className="popularTagsContainer">
                PopularTags
            </div>
        )
    }
}
