import React, { useRef } from 'react';
import {  Platform, 
          RefreshControl, 
          SafeAreaView, 
          ScrollView, 
      } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Lottie from 'lottie-react-native';
import { ThreadsContext } from '@/context/thread-context';
import ThreadsItem from '@/components/ThreadsItem';

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({android: 40})
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {animationRef.current?.play()}}
            tintColor={"transparent"}
          />
        } 
      >
        <Lottie
          ref={animationRef}
          source={require("../../lottie-animations/Threads.json")}
          loop={false}
          autoPlay
          style={{width: 90, height:90, alignSelf: 'center'}}
          //onAnimationFinish={() >= {
          //  alert("Finished");
          //}}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread}/>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
