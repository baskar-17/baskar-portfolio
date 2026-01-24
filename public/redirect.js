;(function () {
  var params = new URLSearchParams(window.location.search)
  var path = params.get("p")
  if (path) {
    var base = "/baskar-portfolio/"
    var next = base + path.replace(/^\//, "")
    window.history.replaceState(null, "", next + window.location.hash)
  }
})()
