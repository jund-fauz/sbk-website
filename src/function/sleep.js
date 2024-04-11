const sleep = delay => new Promise(resolve => setTimeout(resolve, delay * 1000))

export default sleep