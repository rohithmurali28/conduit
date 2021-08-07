import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import smiley from '../../smiley.jpg'
import "./Feed.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { connect } from 'react-redux';
import {addArticleDetails} from "../counterSlice";



class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            articles: {},
            setLoadingText:true
        }
    }

    GetFormattedDate = (date) => {
        var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        // var dayNames=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        // var date = new Date();
        var month = monthNames[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        return month + " " + day + " " + year;
    }
    IncrementLike = () => {
        if (!this.state.counter)
            this.setState({ counter: this.state.counter + 1 })
        else
            this.setState({ counter: this.state.counter - 1 })
    }

    articleClick = (articles,slug) => {
      
    

         this.props.history.push(`/articles/${slug}`)
    }

    componentDidMount = () => {
        axios.get(
            "https://conduit.productionready.io/api/articles?${limit(10, page)}").
            then((response) => {
                this.setState({ articles: response.data.articles ,setLoadingText:false})
                this.props.addArticleDetails(response.data.articles);
                
            })
            .catch((reject) => { 
               this.setState({setLoadingText:true}) ;
                console.log(reject); })

    }

    render() {
        let date = new Date();
        return (
            <>
                {this.state.setLoadingText ? <div style={{color:"#373a3c",marginTop:"10px"}}>Loading articles...</div> :
                Object.keys(this.state.articles).map((key = article, article) => {
                    
                    return (<div>
{ <> <div className="feedHeader">
                            <div className="ustamp">

                                <img src={this.state.articles[article].author?.image} />
                                <div>
                                    <div className="userName">{this.state.articles[article].author?.username}</div>
                                    <div className="ustampDate">{new Date(this.state.articles[article].updatedAt).toUTCString()}</div>
                                </div>
                            </div>
                            <div>
                                <button className="likeButton" onClick={this.IncrementLike}>{this.state.articles[article].favoritesCount} &nbsp;
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                        </div>
                        <div className="feedbody" onClick={() => this.articleClick(this.state.articles,this.state.articles[article].slug)}>
                            < div className="feedContent"> {this.state.articles[article].title}</div>
                            {
                                this.state.articles[article].description
                            }
                            <div className="feedFooter"> Read More...</div>
                        </div>
                        <hr /></>}

                       
                    </div>)
                })}

            </>)
    }
}

const mapStateToProps = (state) => ({
    article: state.counter.articleDetails
});

const mapDispatchToProps = { addArticleDetails };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed))