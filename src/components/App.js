import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state = {videos:[],selectedVideo:null}

    componentDidMount(){
        this.onTermSubmit('Fenerbahçe') //bir parametreli //açılınca gelir.
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })
        //console.log(response)
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    onVideoSelect = (vid) => {
        //console.log('From the app!', vid)
        this.setState({selectedVideo:vid})
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail videoDetay={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column ">
                            <VideoList onVideoSelect={this.onVideoSelect} videosprops={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App