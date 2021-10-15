const config = {
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: process.env.API_ENDPOINTS,

    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    // transformRequest: [
    //     (data) =>{
    //         // Do whatever you want to transform the data
    //         console.log('data', data )
    //         // console.log('header', header )
    //         return data
    //     }
    // ],

    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [
        (data) => data
        
    ],
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 2000, // default is `0` (no timeout)

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: false, // default
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjAwQGdtbC5jb20iLCJpYXQiOjE2MzQyOTA1MjMsImV4cCI6MTYzNDM3NjkyM30.vVf6KXyR3BeMxc7FMVGmY5XdDyt5rQI4uoMUXpD3-5M`,
	}
};
export default config;
