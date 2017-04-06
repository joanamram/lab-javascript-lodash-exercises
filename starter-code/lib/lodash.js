var opinions = [
"This is the best job ever",
"Satisfied",
"At least I get paid",
"I'm looking for another job",
"I don't want to answer"];

function randomPick(){
  var o = _.sample(opinions);
  console.log(o);
  return o;
}



function addOpinion()
{
  var x = _.times(10, randomPick);
  return x;
}
console.log(addOpinion());


function addRandomArray()
{
  var y = _.times(5, addOpinion);
  return y;
}
console.log(addRandomArray());




//Password problem
var goodPsswd = "11234567890";
var badPsswd = "123456";
var perfectPass = true;

var noRepeatChar = function(password) {
  var i = -1;
  var x = _.times(password.length - 1, function(){
    i++;
    return password.indexOf(password[i], i + 1) == -1 ? true : false;
  });
return !(x.includes(false));
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));
