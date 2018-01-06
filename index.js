import { AppRegistry ,TextInput, StyleSheet} from 'react-native';
import React,{Component} from 'react';
import TestView from 'app/TestView'

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix \
civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id \
integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem \
vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud \
modus, putant invidunt reprehendunt ne qui.';

function hashCode(str: string): number {
    let hash = 15;
    for (let ii = str.length - 1; ii >= 0; ii--) {
        hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
}

function genItemData(count: number, start: number = 0): Array<Item> {
    const dataBlob = [];
    for (let ii = start; ii < count + start; ii++) {
        const itemHash = Math.abs(hashCode('Item ' + ii));
        dataBlob.push({
            title: 'Item ' + ii,
            text: LOREM_IPSUM.substr(0, itemHash % 301 + 20),
            key: String(ii),
            pressed: false,
        });
    }
    return dataBlob;
}

class App extends Component {
    render() {

        const data =genItemData(100);
        return(
            <TestView data={data}/>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);


