import axios from "axios";

export const getAllLessons = async() =>{
    return await axios.get('http://172.20.10.2:8080/api/tutorials',{method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
    .then(response => response.data)

    .catch(error => {
      console.error("errorlessons",error);
    });
}

export const getStoryAudio = async(tutorialId)=>{
    return await fetch(`http://172.20.10.2:8080/tts/paragraph/${tutorialId}`,{
        responseType: 'arraybuffer',
        headers: { 'Accept': '*/*', 'Content-Type': 'audio/mp3' }})
    .then( response => response.blob())


    .catch(error => {
      console.error("erroraudio",error);
    });
}
export const getLessonById = async(lessonId)=>{
    await axios.get(`http://172.20.10.2:8080/api/tutorials/${lessonId}`)
    .then(resp=> resp.data)
    .catch(error=>{
        console.log("error",error)
    }
    )
}
export const getStoryById = async(lessonId)=>{
    console.log("getSTory", lessonId)
    return await axios.get(`http://172.20.10.2:8080/api/v1/story/tutorial/${lessonId}`)
    .then(resp=> resp.data)
    .catch(error=>{
        console.log("error",error)
    }
    )
}