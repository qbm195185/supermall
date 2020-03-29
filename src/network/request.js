import axios from 'axios'

export function request(config){
  const instance1 = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout:3000
  })

  // axios拦截器
  instance1.interceptors.request.use(config =>{
    // console.log(config)
    return config
  }, err =>{
    console.log(err)
  })

  instance1.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })


  // 这个地方返回的是一个promise
  return instance1(config)
}

// export function request(config){
//   return new Promise(
//     (resolve,reject) =>{
//       const instance1 = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 3000
//       })

//       instance1(config)
//       .then(
//         res => {
//           resolve(res)
//         }
//       )
//       .catch(
//         err => {
//           reject(err)
//         }
//       )
//     }
//   )
// }


// export function request(config){
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 3000
//   })

//   instance1(config.baseConfing)
//   .then(res =>{
//     // console.log(res)
//     config.success(res)
//   })
//   .catch(err =>{
//     // console.log(err)
//     config.failure(err)
//   })


// function test(aaa,bbb){

// }