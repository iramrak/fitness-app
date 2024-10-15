import { View, Text , Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import  Animated , { FadeIn , FadeInDown, FadeOut} from 'react-native-reanimated';
import { useRouter } from 'expo-router';


export default function index() {
const router = useRouter(); 
  return (
    <View className='flex-1'>
        <StatusBar style='light'/>
        
        <ImageBackground
        source={require('@/assets/images/welcome.png')}
        className='w-full h-full absolute'
        >
        <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
        className='flex-1 justify-end items-center pb-32 space-y-8'
        >
            <Animated.View entering={FadeInDown.delay(100).springify()}>
                <Text className='text-white font-bold text-3xl'>
                    Лучшие <Text className='text-rose-500'>тренировки</Text>
                </Text>
                <Text className='text-white font-bold text-3xl text-center'>
                    Для тебя!
                </Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).springify()}>
                <TouchableOpacity className='bg-rose-500 rounded-full px-16 py-4 border-rose-700/50 border-[2px]'
                onPress={() => router.push('/home')}>
                    <Text className='text-white font-bold text-lg tracking-widest'>
                        Начать
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>
        </ImageBackground>
    </View>
  )
}