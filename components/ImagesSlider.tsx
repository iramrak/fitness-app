import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import {sliderImages} from '@/constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

export default function ImagesSlider() {
  return (
    <Animated.View entering={FadeIn.delay(150).springify()} className='mx-4'>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className='w-full flex-1 flex-row space-x-4 h-[250px]'>
            {sliderImages.map((image) => (
              <Image
                source={image}
                className="w-[250px] h-[250px] rounded-3xl"
                key={image}
              />
            ))}
         </View>
      </ScrollView>
    </Animated.View>
  )
}