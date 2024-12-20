document.addEventListener("DOMContentLoaded", function() {
  function adjustMainMargin() {
      const nav = document.querySelector('nav');
      const headerHeight = nav.offsetHeight; // Get the height of the nav
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`); // Set the CSS variable
  }

  // Call the function once to set the initial margin
  adjustMainMargin();

  // Optional: Adjust margin on window resize
  window.addEventListener('resize', adjustMainMargin);
});

//  .--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--. 
// / .. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \
// \ \/\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ \/ /
//  \/ /`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'\/ / 
//  / /\                                                                            / /\ 
// / /\ \     ___          _          _   _                                        / /\ \
// \ \/ /    / __\___   __| | ___  __| | | |__  _   _ _                            \ \/ /
//  \/ /    / /  / _ \ / _` |/ _ \/ _` | | '_ \| | | (_)                            \/ / 
//  / /\   / /__| (_) | (_| |  __/ (_| | | |_) | |_| |_                             / /\ 
// / /\ \  \____/\___/ \__,_|\___|\__,_| |_.__/ \__, (_)                           / /\ \
// \ \/ /                                       |___/                              \ \/ /
//  \/ /       ___            _      _   _____           _                          \/ / 
//  / /\      /   \__ _ _ __ (_) ___| | / _  / __ _  ___| |__   __ _ _ __ _   _     / /\ 
// / /\ \    / /\ / _` | '_ \| |/ _ \ | \// / / _` |/ __| '_ \ / _` | '__| | | |   / /\ \
// \ \/ /   / /_// (_| | | | | |  __/ |  / //\ (_| | (__| | | | (_| | |  | |_| |   \ \/ /
//  \/ /   /___,' \__,_|_| |_|_|\___|_| /____/\__,_|\___|_| |_|\__,_|_|   \__, |    \/ / 
//  / /\                                                                  |___/     / /\ 
// / /\ \                                              _                           / /\ \
// \ \/ /    /\/\       /\/\   ___ _ __ ___ _   _ _ __(_) ___                      \ \/ /
//  \/ /    /    \     /    \ / _ \ '__/ __| | | | '__| |/ _ \                      \/ / 
//  / /\   / /\/\ \_  / /\/\ \  __/ | | (__| |_| | |  | | (_) |                     / /\ 
// / /\ \  \/    \(_) \/    \/\___|_|  \___|\__,_|_|  |_|\___/                     / /\ \
// \ \/ /                                                                          \ \/ /
//  \/ /                                                                            \/ / 
//  / /\.--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--./ /\ 
// / /\ \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \/\ \
// \ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `' /
//  `--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--' 