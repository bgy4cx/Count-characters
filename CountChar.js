function IsitString (string) {
  if (typeof string == 'string') {
    return true;
  } else {
    return false;
  }
}

function count (string) {  
    if (IsitString(string)) {
        var chars = string.split('');
        var obj = {};
        chars.forEach(function(ch,i) {
          if (obj[ch] >= 1) {
            obj[ch] = obj[ch] + 1;
          } else {
            obj[ch] = 1;
          }
        });
        return obj;
    }  
  }

  module.exports = {count, 
                    IsitString,
  };