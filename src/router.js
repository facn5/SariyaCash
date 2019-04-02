const handlers = require("./handlers")

const router = (request, response) => {
  const url = request.url;
  if(url === '/'){
    handlers.handleHome(response);
  }else {
    handlers.handleHome(response); //TODO: 404 page
  }
};

module.exports = router;
