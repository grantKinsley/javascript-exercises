const ftoc = function(degf) {
  return Math.round(((degf - 32) * (5/9)) * 10)/10;
};

const ctof = function(degc) {
  
  return Math.round((degc * (9/5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
