/* =====================================================================
   ROSTER — this is the only file you need to edit to add your friends.
   6 men and 4 women, each with their own costume.

   For each fighter:
     name    : shown in menus, on the health bar, and spoken by the announcer
     title   : small tagline under the name
     photo   : path to a face photo, e.g. 'photos/arun.jpg'
               (square crop of the face works best). Leave '' to use the
               drawn placeholder face.
     gender  : 'm' or 'f' (changes the body build)
     costume : men   -> 'gi' (karate), 'boxer', 'ninja', 'commando', 'suit', 'hoodie'
               women -> 'dress', 'athlete', 'biker', 'armor'
               (any costume works on any fighter)
     shirt / pants / accent : costume colours. shirt = top / dress / jacket,
               pants = trousers / shorts, accent = belt, gloves, shoes, scarf,
               cape and the colour of their special attack
     skin    : arms, legs and the placeholder face
     hair    : hair colour
     hairStyle : 'short', 'long', 'wavy', 'ponytail', 'bun' or 'none'
               (drawn behind the head, so it also shows around a photo —
               use 'none' if the photo already includes their hair)
     build   : optional body bulk, 1 = normal, 1.2 = big, 0.9 = slim
     speed / power / health : 1 (low) to 5 (high). Keep the total near 9
               so nobody is overpowered.
     special : one of
               'fireball'  - projectile, can be ducked
               'quake'     - ground shockwave, must be jumped or crouch-blocked
               'dash'      - rushing strike across the screen
               'uppercut'  - rising anti-air, invincible on start
               'teleport'  - vanish and strike from behind
   ===================================================================== */

window.GAME_TITLE = 'SANDA BOYZ';

window.ROSTER = [
  // ---- men ----
  { name: 'ARUN', title: 'The Hothead',      photo: '', gender: 'm', costume: 'gi',       shirt: '#f5f5f5', pants: '#f5f5f5', accent: '#d32f2f', skin: '#e0ac69', hair: '#2b1b0e', hairStyle: 'short', speed: 3, power: 3, health: 3, special: 'fireball' },
  { name: 'ARUZ', title: 'The Immovable',    photo: '', gender: 'm', costume: 'boxer',    shirt: '#5d4037', pants: '#1565c0', accent: '#e53935', skin: '#8d5524', hair: '#111111', hairStyle: 'short', build: 1.2, speed: 1, power: 4, health: 5, special: 'quake' },
  { name: 'VICKY', title: 'Strikes First',    photo: '', gender: 'm', costume: 'ninja',    shirt: '#1b1b2f', pants: '#1b1b2f', accent: '#c6ff00', skin: '#c68642', hair: '#1a1a1a', hairStyle: 'short', build: .95, speed: 5, power: 2, health: 2, special: 'dash' },
  { name: 'POPU', title: 'Unstoppable',      photo: '', gender: 'm', costume: 'commando', shirt: '#4b5320', pants: '#6b6b47', accent: '#ff7043', skin: '#c68642', hair: '#3e2723', hairStyle: 'short', build: 1.12, speed: 2, power: 4, health: 4, special: 'dash' },
  { name: 'YUVI', title: 'Now You See Me',   photo: '', gender: 'm', costume: 'suit',     shirt: '#20232a', pants: '#20232a', accent: '#b388ff', skin: '#e0ac69', hair: '#000000', hairStyle: 'short', speed: 4, power: 2, health: 3, special: 'teleport' },
  { name: 'SATHISH', title: 'Never Where You Look', photo: '', gender: 'm', costume: 'hoodie', shirt: '#cfd8dc', pants: '#37474f', accent: '#ff5252', skin: '#ffdbac', hair: '#9e9e9e', hairStyle: 'short', speed: 5, power: 3, health: 1, special: 'teleport' },
  // ---- women ----
  { name: 'MERIN', title: 'Cool Under Fire',  photo: '', gender: 'f', costume: 'dress',    shirt: '#1976d2', pants: '#0d47a1', accent: '#80deea', skin: '#f1c27d', hair: '#3b2314', hairStyle: 'wavy', speed: 3, power: 2, health: 4, special: 'fireball' },
  { name: 'SUSH', title: 'Sky Breaker',      photo: '', gender: 'f', costume: 'athlete',  shirt: '#7b1fa2', pants: '#263238', accent: '#ffee58', skin: '#ffdbac', hair: '#4a2c0a', hairStyle: 'ponytail', speed: 4, power: 3, health: 2, special: 'uppercut' },
  { name: 'DEEDEE', title: 'Rising Star',      photo: '', gender: 'f', costume: 'biker',    shirt: '#c2185b', pants: '#1a1a1a', accent: '#40c4ff', skin: '#f1c27d', hair: '#6d1b3b', hairStyle: 'long',     speed: 3, power: 4, health: 2, special: 'uppercut' },
  { name: 'RUVI', title: 'Earth Shaker',     photo: '', gender: 'f', costume: 'armor',    shirt: '#00796b', pants: '#4e342e', accent: '#ffca28', skin: '#8d5524', hair: '#212121', hairStyle: 'long',     speed: 2, power: 3, health: 4, special: 'quake' },
];
