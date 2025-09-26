<script>
const pending = "pending"
const fulfilled = "fulfilled"
const rejected = "rejected"

function MyPromise(executor) { 
  this.status = pending
  this.value = null

  this.onFulfilledCallbacks = []
  this.onRejectedCallbacks = []
  this.resolve = (value) => {
    if (this.status === pending) {
      this.status = fulfilled
      this.value = value
      this.onFulfilledCallbacks.forEach(fn => fn())
    }
  }
  this.reject = (reason) => {
    if (this.status === pending) {
      this.status = rejected
      this.reason = reason
      this.onRejectedCallbacks.forEach(fn => fn())
    }
  }
  executor(this.resolve, this.reject)
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  this.onFulfilledCallbacks.push(onFulfilled)
  this.onRejectedCallbacks.push(onRejected)
  return this
}

MyPromise.prototype.catch = function (onRejected) {}

MyPromise.prototype.finally = function (callback) {}

MyPromise.resolve = function (value) {}

MyPromise.reject = function (reason) {}

MyPromise.all = function (promises) {}

MyPromise.race = function (promises) {}

var promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise')
  })
}).then(res => {
  console.log(res)
})

console.log(promise)

console.log('promise')
</script>

# promise
