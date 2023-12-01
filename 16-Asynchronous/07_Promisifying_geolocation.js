const getPosition = function(){
    return new Promise(function(resolve,reject){
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}
geolocation().then(pos => console.log(pos))

