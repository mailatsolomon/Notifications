async function sendSMS(mobileNumber) {
    const SEMAPHORE_API_KEY = process.env.SEMAPHORE_API_KEY;
  
    let options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: SEMAPHORE_API_KEY,
        number: mobileNumber,
        message: "HI , Sample SMS",
      }),
    };
  
    const response = await fetch(
      "https://api.semaphore.co/api/v4/messages",
      options
    );
  
    const data = await response.json();
    //need to put return value if failed
    console.log(data);
}

module.exports = sendSMS;