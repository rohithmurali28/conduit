import axios from 'axios';
import React, { Component } from 'react';
import  './PopularTagsstyles.css';

export default class PopularTags extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            tags:[],
            setLoadingText:true
        }
    }
    componentDidMount(){
        console.log("console");
        axios.get(`https://conduit.productionready.io/api/tags`).then((response)=>{
            this.setState({
                tags:response.data.tags,
                setLoadingText:false
            },()=>{console.log(this.state.tags);})
            console.log(response,response.data.tags)}) .
            catch((reject)=>{this.setState({setLoadingText:true})
                
                console.log(reject);
            })
    }
    render() {
        let tagArray = this.state.tags;
        return (
            
            <div className="popularTagsContainer">
                Popular Tags
                {this.state.setLoadingText?<div>Loading Tags...</div>:
            <div className="tagContainer">
                XXX
              {tagArray.map((index)=>{                  
                 return tagArray[index]                
              })}
              </div>}
            </div>
        )
    }
}
