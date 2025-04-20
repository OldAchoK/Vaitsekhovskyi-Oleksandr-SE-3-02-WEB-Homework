let secondListener = document
  .querySelector("body")
  .addEventListener("minDataCollectedExpression", (cache) => {
    let expressionValue = minExpression(cache.detail.a, cache.detail.b);
    alert("Declaration result: a is: " + cache.detail.a + ", b is: " + cache.detail.b + ", min is: " + expressionValue);
});

let minExpression = function(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }   
};