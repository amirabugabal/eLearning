import { Audio, InterruptionModeIOS } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { View, Button ,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      sound.current.unloadAsync();
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
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    });
    console.log("AUDIO", audioUrl);
    const { sound: playbackObject } = await Audio.Sound.createAsync({
      uri: { audioUrl },
    });
    sound.current = playbackObject;

    console.log("playing sound");

    const checkLoaded = await sound.current.getStatusAsync();
    console.log("checkLoaded", checkLoaded);
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
  const RoundedButton = ({ onPress, disabled, iconName }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#ccc" : "green",
        borderRadius: 25, // Adjust this value to control the roundness of the button
        width: 35, // Adjust this value to control the width of the button
        height: 35, // Adjust this value to control the height of the button
        alignItems: "center",
        justifyContent: "center",
        margin: 10, // Adjust this value to control the margin between buttons
      }}
    >
      <Ionicons name={iconName} size={20} color="white" />
    </TouchableOpacity>
  );
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // margin:10,
          backgroundColor:'rgba(0,0,0,0.08)',
          padding:1,
          width:'40%',
          alignSelf:'center',
          borderRadius:50,
          bottom:'5%',
          height:'7%'
        }}
      >
        <RoundedButton
          onPress={playSound}
          disabled={isPlaying}
          iconName="play"
        />
        <RoundedButton
          onPress={pauseSound}
          disabled={!isPlaying}
          iconName="pause"
        />
        <RoundedButton
          onPress={stopSound}
          disabled={!isPlaying}
          iconName="stop"
        />
      </View>
    </>
  );
};

export default CustomAudioPlayer;
