function swap(str1,str2)
{
  var count=0
  var len = str1.length;
  var i
  for(i=0;i<=len;i++)
  {
    if(str1[i]!=str2[i])
    {
      count+=1
    }
  }
  if (count%2 == 0)
  {
  console.log(count / 2)
  
  }
  else
  console.log("Not possible")
}

swap("1100","1001")