function IsitString (string) {
  if (typeof string == 'string') {
    return true;
  } else {
    return false;
  }
}

function count (string) {  
    if (IsitString(string)) {
      if (string == '') {
        return {}
      }
    }  
  }

  module.exports = {count, 
                    IsitString,
  };