import {View,FlatList,TouchableHighlight,Text,Alert,StyleSheet} from 'react-native'
import React, {Component,} from 'react'



class MyListItem extends React.PureComponent {

    _onPress = ()=> {
        this.props.onPressItem(this.props.id)
    };
    render() {

        const {item,id} = this.props
        return (
            <View>
                <TouchableHighlight underlayColor="yellow"  style={{flex:1}} onPress={this._onPress}>
                    <Text style={[styles.textStyle]}>{item.title} + {item.text} </Text>
                 </TouchableHighlight>
            </View>

        )
    }


}

class MyList extends React.PureComponent{

    state = {selected: (new Map(): Map<string, boolean>)};
    _keyExtractor = (item, index) => item.id

    _renderItem = ({item}) => (
        <MyListItem
            item={item}
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />

    );
    _onPressItem = ((id:string)=> {
            this.setState((state) => {
                // copy the map rather than modifying state.
                const selected = new Map(state.selected);
                selected.set(id, !selected.get(id)); // toggle
                return {selected};
            });
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
        }
    );



    render () {
        return (
                <FlatList
                    data={this.props.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
        );
    }
}

const styles = StyleSheet.create({
        textStyle : {
            marginVertical:10,
            marginHorizontal:10,
            flex:1,
            color:'blue',
            backgroundColor:'red',
        }
    }
)

export default MyList