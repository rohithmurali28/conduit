import axios from 'axios';
import React, { Component } from 'react';
import './PopularTagsstyles.css';
import { connect } from 'react-redux';
import { tagSelected } from "../counterSlice";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
class PopularTags extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            setLoadingText: true
        }
    }
    componentDidMount() {
        console.log("console");
        axios.get(`https://conduit.productionready.io/api/tags`).then((response) => {
            this.setState({
                tags: response.data.tags,
                setLoadingText: false
            }, () => { console.log("Tags", this.state.tags); })
            console.log(response, response.data.tags)
        }).
            catch((reject) => {
                this.setState({ setLoadingText: true })

                console.log(reject);
            })
    }
    render() {
        let tagArray = this.state.tags;
        return (

            <div className="popularTagsContainer">
                <div className="popularTags"> Popular Tags</div>

                {this.state.setLoadingText ? <div>Loading Tags...</div> :

                    this.state.tags.map((tag) =>
                    <Link to="/#/" className="tag" 
                    // onClick={()=>{console.log("clcicked")
                    //            this.props.tagSelected(tag)}
                            //}
                            >{tag}</Link>



                    )
                }
            </div>
        )
    }
}

const mapDispatchToProps = { tagSelected };
const mapStateToProps = (state) => ({
    article: state.counter.articleDetails,
    tagSelected: state.counter.tagSelected
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PopularTags))
