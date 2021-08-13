const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {

  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
   console.log(`Next pass at ${dateTime} for ${duration} seconds!`) 
  }
};

module.exports = { printPassTimes };


nextISSTimesForMyLocation( (error, passTimes) => {

  if (error) {
    console.log('it didn\'t work!', error);
    return;
  }

  // success
  printPassTimes(passTimes);
});

/* fetchISSFlyOverTimes({ latitude: 43.6319, longitude: -79.3716 }, (error, data) => {
  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }

  console.log('It worked! Returned coordinates: ', data);
});
 */
/* fetchCoordsByIP('183.33.222.132', (error, data) => {
  if (error) {
    console.log('It didn\'t work! ', error);
    return;
  }


  console.log('It worked! Returned coordinates: ', data);
});
 */


/* fetchMyIP((error, ip) => {
 if (error) {
   console.log("It didn't work!" , error);
   return;
 }

 console.log('It worked! Returned IP:' , ip);
}); */