import { View } from 'react-native';
import Footer from './component/Footer';
import HeaderLine from './component/Header';


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        justifyContent:'space-between'
      }}>
      <HeaderLine />
      <Footer/>
    </View>
  );
}
