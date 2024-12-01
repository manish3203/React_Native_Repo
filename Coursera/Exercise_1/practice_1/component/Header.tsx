import { View, Text } from 'react-native';

const HeaderLine = () => {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}

export default HeaderLine;
