# Description
#   A Hubot script that return Kobe-shi temperature
#
# Configuration:
#   None
#
# Commands:
#   hubot kobe-temp - Kobe-shi temperature
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  cheerio = require 'cheerio'
  url = 'http://www.tenki.jp/live/6/31/47770.html'
  robot.respond /kobe-temp$/i, (res) ->
    res.http(url).get() (err, _, body) ->
      return res.send(err) if err?
      $ = cheerio.load body
      res.send $('.temp_entry.live').last().text() + '℃'
