//
//  Songza.plist
//  BeardedSpice
//
//  Created by Jayson Rhynas on 1/18/2014.
//  Copyright (c) 2014 Tyler Rhodes / Jose Falcon. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"Songza",
  acceptMethod: "predicateOnTab",
  acceptParams: {
    format:"SELF LIKE[c] '*songza.com*'",
    args:"url"
  },
  isPlaying: function isPlaying () {return document.querySelector('.player-wrapper').classList.contains('player-state-play');},
  toggle: function toggle () {document.querySelector('.miniplayer-control-play-pause').click()},
  next: function next () {return document.querySelector('.miniplayer-control-skip').click()},
  favorite: function favorite () {document.querySelector('.miniplayer-info-playlist-favorite-status').click()},
  previous: function previous () {},
  pause: function pause () {
    if (document.querySelector('.player-wrapper').classList.contains('player-state-play')) {
      document.querySelector('.miniplayer-control-play-pause').click()
    }
  },
  trackInfo: function trackInfo () {
    var track = document.querySelector('.miniplayer-info-track-title > a').getAttribute('title');
    var artist = document.querySelector('.miniplayer-info-artist-name > a').getAttribute('title');
    var albumArt = document.querySelector('.miniplayer-album-art').getAttribute('src');
    return {
        'track': track,
        'artist': artist,
        'image': albumArt
    }
  }
}
