import { View, Text, SafeAreaView ,Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import ImagesSlider from '@/components/ImagesSlider'
import BodyParts from '@/components/bodyParts'
import Animated ,{FadeInDown, FadeInLeft, FadeInRight} from 'react-native-reanimated'

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
        <StatusBar style='dark'/>

        {/*avatar and punchline*/}
        <View className='flex-row justify-between items-center mx-5'>
            <Animated.View entering={FadeInLeft.delay(150).springify()}>
                <Text className='text-3xl font-bold tracking-wider text-neutral-700 mb-[-8px]'>ГОТОВ К</Text>
                <Text className='text-3xl font-bold tracking-wider text-rose-500'>WORKOUT</Text>
            </Animated.View>
            <Animated.View entering={FadeInRight.delay(150).springify()} className='flex justify-center items-center space-y-2'>
                <Image 
                source={require('@/assets/images/avatar.png')}
                className='w-16 h-16 rounded-full'
                />
            </Animated.View>
        </View>

        {/*cards corusel*/}
        <View>
            <ImagesSlider />
        </View>

        <View className='flex-1'>
            <BodyParts />
        </View>
    </SafeAreaView>
  )
}