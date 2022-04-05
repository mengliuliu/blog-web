const invalidVal = '- -';

function fixZero(num: number, length: number) {
  const str = '' + num;
  const len = str.length;
  let s = '';
  for (let i = length; i-- > len; ) {
    s += '0';
  }
  return s + str;
}

function stampToTime(
  dateNum: any,
  type: number,
  otherType = 'seconds',
  defaultVal = invalidVal
) {
  if (!dateNum) {
    if (dateNum !== 0) {
      return defaultVal;
    }
  }
  if (typeof dateNum == 'string') {
    if (dateNum.indexOf('-') == -1) {
      if (dateNum.length == 13) {
        dateNum = parseInt(dateNum);
      } else {
        return dateNum;
      }
    }
  }
  const date = new Date(dateNum);
  const month = date.getMonth() + 1;
  if (type == 1) {
    //2018-5-5 12:07:05
    return (
      date.getFullYear() +
      '-' +
      month +
      '-' +
      date.getDate() +
      ' ' +
      fixZero(date.getHours(), 2) +
      ':' +
      fixZero(date.getMinutes(), 2) +
      ':' +
      fixZero(date.getSeconds(), 2)
    );
  }
  if (type == 2) {
    //2018-05-05 12:07:05
    return (
      date.getFullYear() +
      '-' +
      fixZero(month, 2) +
      '-' +
      fixZero(date.getDate(), 2) +
      ' ' +
      fixZero(date.getHours(), 2) +
      ':' +
      fixZero(date.getMinutes(), 2) +
      ':' +
      fixZero(date.getSeconds(), 2)
    );
  }
  if (type == 3) {
    //2018/5/5 12:07:05
    return (
      date.getFullYear() +
      '/' +
      month +
      '/' +
      date.getDate() +
      ' ' +
      fixZero(date.getHours(), 2) +
      ':' +
      fixZero(date.getMinutes(), 2) +
      ':' +
      fixZero(date.getSeconds(), 2)
    );
  }
  if (type == 4) {
    //2018/05/05 12:07:05
    return (
      date.getFullYear() +
      '/' +
      fixZero(month, 2) +
      '/' +
      fixZero(date.getDate(), 2) +
      ' ' +
      fixZero(date.getHours(), 2) +
      ':' +
      fixZero(date.getMinutes(), 2) +
      ':' +
      fixZero(date.getSeconds(), 2)
    );
  }
  if (type == 5) {
    //2018-5-5
    return date.getFullYear() + '-' + month + '-' + date.getDate();
  }
  if (type == 6) {
    //2018-05-05
    return (
      date.getFullYear() +
      '-' +
      fixZero(month, 2) +
      '-' +
      fixZero(date.getDate(), 2)
    );
  }
  if (type == 7) {
    //2018/5/5
    return date.getFullYear() + '/' + month + '/' + date.getDate();
  }
  if (type == 8) {
    //2018/05/05
    return (
      date.getFullYear() +
      '/' +
      fixZero(month, 2) +
      '/' +
      fixZero(date.getDate(), 2)
    );
  }
  if (type == 9) {
    if (otherType == 'seconds') {
      //20180505120705
      return (
        date.getFullYear() +
        fixZero(month, 2) +
        fixZero(date.getDate(), 2) +
        fixZero(date.getHours(), 2) +
        fixZero(date.getMinutes(), 2) +
        fixZero(date.getSeconds(), 2)
      );
    } else if (otherType == 'minutes') {
      //201805051207
      return (
        date.getFullYear() +
        fixZero(month, 2) +
        fixZero(date.getDate(), 2) +
        fixZero(date.getHours(), 2) +
        fixZero(date.getMinutes(), 2)
      );
    } else if (otherType == 'hours') {
      return (
        date.getFullYear() +
        fixZero(month, 2) +
        fixZero(date.getDate(), 2) +
        fixZero(date.getHours(), 2)
      );
    } else if (otherType == 'day') {
      return (
        date.getFullYear() + fixZero(month, 2) + fixZero(date.getDate(), 2)
      );
    }
  }
  if (type == 10) {
    //2018年05月05日
    return (
      date.getFullYear() +
      '年' +
      fixZero(month, 2) +
      '月' +
      fixZero(date.getDate(), 2) +
      '日'
    );
  }
  if (type == 11) {
    //2018年05月05日12时07分05秒
    return (
      date.getFullYear() +
      '年' +
      fixZero(month, 2) +
      '月' +
      fixZero(date.getDate(), 2) +
      '日' +
      fixZero(date.getHours(), 2) +
      '时' +
      fixZero(date.getMinutes(), 2) +
      '分' +
      fixZero(date.getSeconds(), 2) +
      '秒'
    );
  }
  if (type == 12) {
    //180505
    return (
      (date.getFullYear() + '').slice(-2) +
      fixZero(month, 2) +
      fixZero(date.getDate(), 2)
    );
  }
  if (type == 13) {
    //2018-05-05 12:07
    return (
      date.getFullYear() +
      '-' +
      fixZero(month, 2) +
      '-' +
      fixZero(date.getDate(), 2) +
      ' ' +
      fixZero(date.getHours(), 2) +
      ':' +
      fixZero(date.getMinutes(), 2)
    );
  }
}

export { stampToTime };
