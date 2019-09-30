module.exports = (function() {
  function hashPassword(password) {
    return password.split('').reverse().join('') + process.env.ADMINISTRATOR_PASSWORD_SECRET;
  }

  return {
    hashPassword
  };
})();