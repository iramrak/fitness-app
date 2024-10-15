import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import Animated , {FadeIn} from 'react-native-reanimated';
// import { fetchExercisesByBodyPart } from '@/api/exerscisesDB';

export default function Exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log('got item:', item);


  return (
    <Animated.View entering={FadeIn.delay(200).springify()} className='mt-10 flex-1 justify-between'>
      <View>
        <Image 
        source={item.image}
        className='w-[100%] h-[300px] rounded-b-[18px]'
        />
        <View className='mx-4'>  
          <Text className='text-center text-xl my-4 mx-4 font-semibold'>Упражнения на: {item.name}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>

      <View className='mx-4 mb-10'>
        <TouchableOpacity onPress={() => router.back()}>
          <Text className='text-lg'>⬅ Назад</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}