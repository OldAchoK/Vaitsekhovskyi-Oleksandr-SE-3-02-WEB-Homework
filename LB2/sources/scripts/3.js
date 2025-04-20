let thirdListener  = document
  .querySelector("body")
  .addEventListener("minDataCollectedLambda", (cache) => {
    console.log(cache.detail);
    let min = (a, b) => a < b ? a : b;
    alert("Lambda result: a is: " + cache.detail.a + ", b is: " + cache.detail.b + ", min is: " + min(cache.detail.a, cache.detail.b));
});