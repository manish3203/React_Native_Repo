import {View,Text} from 'react-native';
const Footer = () => {
  return (
    <View style = {{flex: 0.09, backgroundColor: '#F4CE14'}}>
      <Text 
        style ={{
          padding: 20,
          fontSize: 18,
          color: 'black',
          textAlign:'center'
        }}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

export default Footer;