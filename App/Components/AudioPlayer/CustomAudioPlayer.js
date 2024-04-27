import { Audio, InterruptionModeIOS } from 'expo-av';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button } from 'react-native';
import mp3Src from '../AudioPlayer/beep-11.mp3'

const CustomAudioPlayer = ({ audioUrl }) => {
        const sound = useRef(new Audio.Sound());
        const [isPlaying, setIsPlaying] = useState(false);
      
        useEffect(() => {
          // Load audio file
        //   console.log("useEffect", "here")
        //   const loadAudio = async () => {
        //     const { audio } = await  Audio.Sound.createAsync(mp3Src)
        //     console.log("sound", audio)
        //     setSound(audio);
        //   };
      
        //   loadAudio();
      
        //   Clean up
          return () => {
            sound.current.unloadAsync()
          };
        }, []);
      
        const playSound = async () => {
        //     console.log("playSound", sound)
        //   if (sound) {
        //     await sound.playAsync();
        //     setIsPlaying(true);
        //   }
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            staysActiveInBackground: false,
            shouldDuckAndroid: false,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers})
        console.log("AUDIO",audioUrl)
        const { sound: playbackObject } = await Audio.Sound.createAsync({uri:{audioUrl}}); 
        sound.current = playbackObject

        console.log("playing sound");
    
        const checkLoaded = await sound.current.getStatusAsync();
        console.log("checkLoaded", checkLoaded)
        if (checkLoaded.isLoaded === true) {
            await sound.current.playAsync();
        } else {
          
        }
        };
      
        const pauseSound = async () => {
          if (sound) {
            await sound.pauseAsync();
            setIsPlaying(false);
          }
        };
      
        const stopSound = async () => {
          if (sound) {
            await sound.stopAsync();
            setIsPlaying(false);
          }
        };
      
        return (<>

          <View>
            <Button title="Play" onPress={()=>playSound()} disabled={isPlaying} />
            <Button title="Pause" onPress={pauseSound} disabled={!isPlaying} />
            <Button title="Stop" onPress={stopSound} disabled={!isPlaying} />
          </View>

          </>
        );
      }
      
      export default CustomAudioPlayer;