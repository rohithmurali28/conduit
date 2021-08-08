import React, { Component } from 'react'
import Feed from '../Feed/Feed'
import PopularTags from '../PopularTags/PopularTags'
import "./GlobalFeed.css"


export default class GlobalFeed extends Component {
    render() {
        return (
            <div className="subbodyContainer">
            <div className="subbody">
                <div className="subheader">
                    Global Feed
                </div>
               
                <hr/>
                <Feed/>
                

            </div>
            <div  className="popularTagsContainer"> 
            <PopularTags/>
            </div>
            </div>
        )
    }
}
