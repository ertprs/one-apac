module.exports = (function() {
  function responses(payload) {
    switch (payload) {
      case 'Home':
        return { text: 'hello world' };

      default:

        break;
    }
  }

  return {
    responses
  };
})();