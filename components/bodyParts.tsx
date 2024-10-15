import { View, Text, FlatList, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { bodyParts } from '@/constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import Animated, { FadeIn , FadeInDown} from 'react-native-reanimated'

export default function BodyParts() {
    const router = useRouter();
  return (
    <View className='mx-4'>
      <Animated.Text entering={FadeIn.delay(150).springify()} className='text-2xl font-semibold text-neutral-700'>Упражнения</Animated.Text>

      <FlatList
      data={bodyParts}
      numColumns={2}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 50 , paddingTop: 20}}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({item, index}) => 
        <BodyPartsCard index={index} item={item} router={router} /> 
      }
      />
    </View>
  )
}

const BodyPartsCard = ({item, router} : any) => {
    return (
        <Animated.View entering={FadeInDown.delay(150).springify()}>
            <TouchableOpacity className='w-[170px] h-[190px] flex justify-end p-4 mb-4' onPress={() => router.push({pathname: './exercises', params: item})}>
                <Image
                    source={item.image} 
                    resizeMode='cover'
                    className='w-[170px] h-[190px] rounded-[18px] absolute'
                    />
                    <LinearGradient
                    colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,1)']}
                    start={{x: 0.5, y: 0}}
                    end={{x:0.5, y:1}}
                    className='w-[170px] h-[190px] rounded-[18px] absolute bottom-0'
                    >
                        <Text className='flex-1 text-white text-center font-semibold text-xl tracking-widest mt-[82%]'>
                            {item.name}
                        </Text>
                        <Text className='flex-1 translate-x-96 text-white text-center font-medium text-xs tracking-widest mt-[-65%] overflow-hidden '>
                            {item.description}
                        </Text>
                    </LinearGradient>
            </TouchableOpacity>
        </Animated.View>
    )
}