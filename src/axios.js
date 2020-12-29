import axios from "axios"

const instance = axios.create({
      // from https://console.firebase.google.com/project/clone-19087/functions/list
      baseURL: "https://us-central1-clone-19087.cloudfunctions.net/api",
      testBaseURL: 'http://localhost:5001/clone-19087/us-central1/api' //api (cloud function) url
})

export default instance