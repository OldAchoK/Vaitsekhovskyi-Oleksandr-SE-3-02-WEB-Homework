function min(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }   
}

let firstListener  = document
  .querySelector("body")
  .addEventListener("minDataCollectedDeclaration", (cache) => {
    alert("Declaration result: a is: " + cache.detail.a + ", b is: " + cache.detail.b + ", min is: " + this.min(cache.detail.a, cache.detail.b));
});