export const Capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const Ellipsize = (hash) => {
  return `${hash.slice(0, 5)}...${hash.slice(hash.length-3, hash.length)}`
}

export const EllipsizeTx = (hash) => {
  return `${hash.slice(0, 15)}...`
}
export const getCurrentEpoch = () => {
  /* This function converts the current time to an Epoch format */
  
  let date = new Date();
  let epoch = date.getTime()/1000.00;
  return epoch.toFixed();
}

export const getTimeHistory = (sec)  => {
  /* This function returns string representation of the time history */

  if (sec < 1) { return `Just now`}
  if (sec === 1) {return `${sec} sec ago`}
  if (sec > 1 && sec < 60) { return `${sec} secs ago`}
  if ( sec >= 60) {
    const min = (sec / 60).toFixed();
    if (min === 1) return `${min} min ago`
    if (min > 1 && min < 60) return `${min} mins ago`;
    if (min >= 60) {
      const hr = (min / 60).toFixed()
      if (hr === 1) return `${hr} hr ago`;
      if (hr > 1) return `${hr} hrs ago`;
    }
  }
  
}

export const reduceEthSize = (eth) => {
  if (eth.toString().length > 6) {
    return parseFloat(eth.toString().slice(0, 6))
  }
  return eth;
}
