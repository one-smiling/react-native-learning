
import {View,Text,Button,} from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';



class DetailScreen extends React.Component {

    static navigationOptions = {
        title:'这是详情页'
    }

    name:bool
    gender:string
    onClickButon:(string) => void

    constructor(props) {
        super(props)

        this.state = {
            name:this.name,
            gender:this.gender
        };

        this.gender = '男'
        this.name = '垃圾'
        this.onClickButon = ()=>{
            if (this.gender === '男') {
                this.gender = '女'
            } else {
                this.gender = '男'
            }
            this.setState({'gender':this.gender},()=>{
                console.log('更新完毕')
            })
        }
    }

    render () {
        const params = this.props.navigation.state.params;
        let gender = this.gender;
        var text
        if (params) {
            text = params['text']
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen {'\n'} {text} {'\n'} {gender}  </Text>
                <Button title='点这里' onPress={this.onClickButon}/>
            </View>
        )
    }
}
// https://github.com/facebook/react-native/issues/14590#issuecomment-334988850
DetailScreen.propTypes = {
    name: PropTypes.string.isRequired,
};

export default DetailScreen