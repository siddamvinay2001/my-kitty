import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@my-kitty/ui';


export default function Native() {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="text-gray-400 text-md font-bold mt-2">Native</Text>
      <Button
        onClick={() => {
          console.log('Pressed!');
          alert('Pressed!');
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontWeight: 'bold',
//     marginBottom: 20,
//     fontSize: 36,
//   },
// });
