console.log(window.location, 'location')

const envConfig = {
  dev: {
    baseURL: 'http://49.234.96.50:8083',
  },
  uat: {
    baseURL: 'http://49.234.96.50:8083',
  },
  prod: {
    baseURL: 'http://49.234.96.50:8083',
  }
}

const configer = {}

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "developent") {
  Object.assign(configer, envConfig.dev)
} else if (process.env.NODE_ENV === "uat") {
  Object.assign(configer, envConfig.uat)
} else {
  Object.assign(configer, envConfig.uat)
}

export default configer