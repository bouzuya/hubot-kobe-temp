// Description
//   A Hubot script that return Kobe-shi temperature
//
// Configuration:
//   None
//
// Commands:
//   hubot kobe-temp - Kobe-shi temperature
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cheerio, url;
  cheerio = require('cheerio');
  url = 'http://www.tenki.jp/live/6/31/47770.html';
  return robot.respond(/kobe-temp$/i, function(res) {
    return res.http(url).get()(function(err, _, body) {
      var $;
      if (err != null) {
        return res.send(err);
      }
      $ = cheerio.load(body);
      return res.send($('.temp_entry.live').last().text() + '℃');
    });
  });
};
