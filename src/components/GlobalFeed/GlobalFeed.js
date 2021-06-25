import React, { Component } from 'react'
import Feed from '../Feed/Feed'
import "./GlobalFeed.css"


export default class GlobalFeed extends Component {
    render() {
        return (
            <div className="subbody">
                <div className="subheader">
                    Global Feed
                </div>
               
                <hr/>
                <Feed/>
                <hr/>

            </div>
        )
    }
}
