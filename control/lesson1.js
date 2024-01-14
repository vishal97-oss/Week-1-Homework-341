const vishal = (req, res) => { // get function is like any other function such as listen, post, put and delete
    res.send("Vishal Hayli"); // When we click on hompage it says hello 
  };

  const hayli = (req, res) => { // get function is like any other function such as listen, post, put and delete
    res.send("Hayli Vaid"); // When we click on hompage it says hello 
  };
  
  module.exports = {
    vishal,
    hayli
  };