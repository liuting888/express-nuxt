// import ky from 'ky-universal'
export default function ({
  $http
}) {
  $http.onRequest((request, config) => {
    console.log('onRequest', request, config)
  })

  $http.onResponse((request, config, response) => {
    console.log('onResponse', request, config, response)
  })

  $http.onError((error) => {
    if (error.statusCode === 500) {
      alert('Request Error!')
    }
    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  })
}
