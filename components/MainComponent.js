import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { View } from 'react-native';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }


    onCampsiteSelect(campsiteId) {
        this.setState({ selectedCampsite: campsiteId });
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 50 }}>
                {/* This is what Nucamp instructions have - I added a Margin Top to bring the components down below the iphone X inset at the top 
                    <View style={{flex: 1}}> */}
                <Directory
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite)[0]}
                />
            </View>
        )
    }
}

export default Main;