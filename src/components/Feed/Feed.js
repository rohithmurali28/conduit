import React, { Component } from 'react'
import smiley from '../../smiley.jpg'
import "./Feed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


export default class Feed extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            counter:0,
            articles:{}
        }
    }

    GetFormattedDate=(date)=> {
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
// var dayNames=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        // var date = new Date();
        var month = monthNames[date .getMonth()];
        var day = date .getDate();
        var year = date .getFullYear();
        return month + " " + day + " " + year;
    }
    IncrementLike=()=>{
        if(!this.state.counter)
        this.setState({counter:this.state.counter+1})
        else
        this.setState({counter:this.state.counter-1})
    }
    componentDidMount=()=>{
axios.get(
 "https://conduit.productionready.io/api/articles?${limit(10, page)}").
 then((response)=>{
     this.setState({articles:response.data.articles})
     console.log(this.state.articles);
 }) 
 .catch((reject)=>{console.log(reject);})

    }

    render() {
        let date=new Date();
        return (
            <>
            {Object.keys(this.state.articles).map((key=article,article)=>{console.log(this.state.articles[article].image);
            return (<div>
               
                <div className="feedHeader">
                <div className="ustamp">
                    
                    <img src={this.state.articles[article].author?.image}/>
                    <div>
                    <div className="userName">{this.state.articles[article].author?.username}</div>
                    <div className="ustampDate">{new Date(this.state.articles[article].updatedAt).toUTCString()}</div>
                    </div>
                  </div>
                  <div>
                  <button type="button" className="likeButton" onClick={this.IncrementLike}>{this.state.articles[article].favoritesCount} &nbsp;
                  <FontAwesomeIcon icon={faHeart} />
                  </button>
                  </div>
                  </div>
                  <div className="feedbody">
                    < div className="feedContent"> {this.state.articles[article].title}</div>
                    {
                      this.state.articles[article].description  
                    }
                     <div className="feedFooter"> Read More...</div>
                  </div>
                  <hr/>
            </div>)
        })}
            
        </>)
    }
}
