const axios = require('axios');
axios.get('https://www.boredapi.com/api/activity')
.then(res => {
  console.log("success:", res.data)
}).catch(err=>{
  console.log("err:",err)
})
console.log("res:")