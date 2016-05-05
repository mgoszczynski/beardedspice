//
//  FocusAtWill.plist
//  BeardedSpice
//
//  Created by Ken Mickles on 1/15/15.
//  Copyright (c) 2015 Tyler Rhodes / Jose Falcon. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"focus@will",
  acceptMethod: "predicateOnTab",
  acceptParams: {
    format:"SELF LIKE[c] '*focusatwill.com*'",
    args:"url"
  },
  toggle: function toggle () {document.querySelector('a.play').click()},
  next: function next () { document.querySelector('a.next').click() },
  pause: function pause () { document.querySelector('a.play').click() }
}
