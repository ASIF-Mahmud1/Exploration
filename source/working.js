const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetch = require('node-fetch');
require('dotenv').config({ path: '../.env' })

// // NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY =process.env.API_KEY;

function getToken(errorCallback, loadCallback) {
	const req = new XMLHttpRequest();
	req.addEventListener("load", loadCallback);
	req.addEventListener("error", errorCallback);
	req.open("POST", "https://iam.ng.bluemix.net/identity/token");
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Accept", "application/json");
	req.send("grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY);
}

function apiPost(scoring_url, token, payload){
    fetch(scoring_url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
    }).then(res => res.json())
      .then(json => console.log(JSON.stringify(json))).catch((err)=>{
          console.log("Lol")
      });
}

getToken((err) => console.log(err), function () {
	let tokenResponse;
    let  payload= {"input_data":[{"fields":["CUSTOMER_ID","OVERDUE_BALANCE","BASE_USAGE","CREDIT_HISTORY","ALTERNATE_USAGE","STANDING_CHARGE","BASE_CHARGE","ALTERNATE_CHARGE","LEVY","TAX","TOTAL_NET","FIRST_NAME","LAST_NAME","PHONE_1","EMAIL","AGE","IS_REGISTERED_FOR_ALERTS","OWNS_HOME","COMPLAINTS","HAS_THERMOSTAT","HAS_HOME_AUTOMATION","PV_ZONING","WIND_ZONING","SMART_METER_COMMENTS","IS_CAR_OWNER","HAS_EV","HAS_PV","HAS_WIND","EBILL","IN_WARRANTY","CITY","MARITAL_STATUS","EDUCATION","SEGMENT","EMPLOYMENT","BUILDING_TYPE","MISSED_PAYMENT","BILLING_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_BASE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_LAST_MONTH","RATIO_THIS_MONTH_ALTERNATE_USAGE_VS_AVG_LOOKBACK_WINDOW","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_LAST_MONTH","RATIO_THIS_MONTH_TOTAL_TO_PAY_VS_AVG_LOOKBACK_WINDOW","NUM_MISSED_PAYMENTS_LOOKBACK_WINDOW","BILLING_MONTH_NUMBER","Partition"],"values":[[12,56,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]}]}
    const scoring_url = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/8cc01547-517e-4222-8010-d63012c16203/predictions?version=2021-02-09";

	try {
		tokenResponse = JSON.parse(this.responseText);
   // console.log("token response ",tokenResponse)
    apiPost( scoring_url, tokenResponse.access_token, payload)
	} catch(ex) {
		// TODO: handle parsing exception
	}


});

////////////////////////////////////////////////////////////////
// function getMeToken(){
//   
//     let url= 'https://iam.ng.bluemix.net/identity/token'
//     fetch(url, {
//         method: 'POST',
//         body: "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + API_KEY,
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
           
//           },
//     }).then(res => res.json())
//       .then(json => console.log(json)).catch((err)=>{
//           console.log("Lol")
//       });
// }

// getMeToken()



//////////////////////////////////////////////////////////////////