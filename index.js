// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(arg = "*") {
  return function (funWord = "special") {
    return `You are ${arg}${funWord}${arg}!`;
  };
}
