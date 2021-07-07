import React, { Component } from 'react'
import "./HomeScreenstyle.css"
import GlobalFeed from "../GlobalFeed/GlobalFeed"

export default class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
            <div className="bodymain">
            <div className="subheading1">conduit</div>
            <div className="subheading2">A place to share your knowledge.</div>
          </div>
         <GlobalFeed/>
            </div>
        )
    }
}
