import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class ArticleDetails extends Component {
    constructor(props)
    {
        super(props);
        this.state={
        articleSelected : {}    

    }
    }
  componentDidMount(){
       {this.props.article.map((article)=>{
            if(article.slug == this.props.match.params.slugid)
            {
               this.setState({articleSelected:article})
            }
        })}  
  }
    render() {
     console.log(this.state.articleSelected);
        return (
                  
            <div className="homeContainer">
            <div className="bodymain">
            <div className="subheading1">{this.state.articleSelected.title}</div>
            <div className="subheading2"> 
            <div className="ustamp">

<img src={this.state.articleSelected.author?.image} />
<div>
    <div className="userName">{this.state.articleSelected.author?.username}</div>
    <div className="ustampDate">{new Date(this.state.articleSelected.updatedAt).toUTCString()}</div>
</div>
</div></div>
</div>

          {this.state.articleSelected.body}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    article: state.counter.articleDetails
});


export default withRouter(connect(mapStateToProps)(ArticleDetails))


