function dep(obj) {
  if(obj ==null||obj !='object')
  return obj;
  let newObj =obj instanceof Array ? []:{};
  for(var key in obj){
    if(obj.hasOwnProperty(key))
    {
      newObj[key] = dep(obj[key]);
    }
  }

}