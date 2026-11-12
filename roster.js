/* =====================================================================
   ROSTER — this is the only file you need to edit to add your friends.
   6 men and 4 women, each with their own costume.

   For each fighter:
     name    : shown in menus, on the health bar, and spoken by the announcer
     title   : small tagline under the name
     gender  : 'm' or 'f' (changes the body build)
     costume : men   -> 'gi' (karate), 'boxer', 'ninja', 'commando', 'suit', 'hoodie'
               women -> 'dress', 'athlete', 'biker', 'armor'
               (any costume works on any fighter)
     shirt / pants / accent : costume colours. shirt = top / dress / jacket,
               pants = trousers / shorts, accent = belt, gloves, shoes, scarf,
               cape and the colour of their special attack
     skin    : arms, legs and the placeholder face
     hair    : hair colour
     hairStyle : hair hanging behind the head: 'long', 'wavy', 'ponytail', 'bun' or 'none'
     face    : the drawn avatar. All parts are optional:
               hair      'short', 'quiff', 'swept', 'messy', 'curly', 'parted', 'beanie', 'bald'
               tall      quiff height, e.g. 1.15     grey  1 = grey streaks in a quiff
               beard     'stubble', 'short', 'full', 'goatee'      moustache  1 or 'thin'
               glasses   'thin' or 'thick'           brows 'thick'
               smile     'teeth' or 'closed' (leave out for a fierce look)   lips 1 = lip colour
               earrings  'hoop', 'rect', 'stud'      bindi 1, nosePin 1, clip 1 (hair clip)
     build   : optional body bulk, 1 = normal, 1.2 = big, 0.9 = slim
     speed / power / health : 1 (low) to 5 (high). Keep the total near 9
               so nobody is overpowered.
     ultimate: optional. 'dragon' = at 10% health this fighter can no longer be hurt, and
               their special button summons a dragon that hunts down everyone else one by one.
               Nothing on screen announces it.
     winSay  : optional. What they say (speech bubble and voice) after the dragon has finished.
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
  { name: 'ARUN', title: 'The Hothead',      gender: 'm', costume: 'gi',       shirt: '#f5f5f5', pants: '#f5f5f5', accent: '#d32f2f', skin: '#9a6a48', hair: '#17110d', hairStyle: 'none', speed: 3, power: 3, health: 3, face: { hair: 'short', glasses: 'thick', beard: 'stubble', smile: 'teeth' }, special: 'fireball', ultimate: 'dragon', winSay: 'Gommmaaa yaaru kitta' },
  { name: 'ARUZ', title: 'The Immovable',    gender: 'm', costume: 'boxer',    shirt: '#5d4037', pants: '#1565c0', accent: '#e53935', skin: '#a5704c', hair: '#17110d', hairStyle: 'none', build: 1.2, speed: 1, power: 4, health: 5, face: { hair: 'messy', beard: 'goatee', moustache: 'thin' }, special: 'quake' },
  { name: 'VICKY', title: 'Strikes First',    gender: 'm', costume: 'ninja',    shirt: '#1b1b2f', pants: '#1b1b2f', accent: '#c6ff00', skin: '#8a5a3c', hair: '#17110d', hairStyle: 'none', build: .95, speed: 5, power: 2, health: 2, face: { hair: 'quiff', beard: 'short', moustache: 1 }, special: 'dash' },
  { name: 'POPU', title: 'Unstoppable',      gender: 'm', costume: 'commando', shirt: '#4b5320', pants: '#6b6b47', accent: '#ff7043', skin: '#a06a40', hair: '#17110d', hairStyle: 'none', build: 1.12, speed: 2, power: 4, health: 4, face: { hair: 'quiff', glasses: 'thin', beard: 'short', moustache: 1, smile: 'teeth' }, special: 'dash' },
  { name: 'YUVI', title: 'Now You See Me',   gender: 'm', costume: 'suit',     shirt: '#20232a', pants: '#20232a', accent: '#b388ff', skin: '#b07a50', hair: '#17110d', hairStyle: 'none', speed: 4, power: 2, health: 3, face: { hair: 'quiff', tall: 1.08, grey: 1, beard: 'short', moustache: 1, brows: 'thick' }, special: 'teleport' },
  { name: 'SATHISH', title: 'Never Where You Look', gender: 'm', costume: 'hoodie', shirt: '#cfd8dc', pants: '#37474f', accent: '#ff5252', skin: '#7c4c32', hair: '#17110d', hairStyle: 'none', speed: 5, power: 3, health: 1, face: { hair: 'swept', beard: 'full', moustache: 1 }, special: 'teleport' },
  // ---- women ----
  { name: 'MERIN', title: 'Cool Under Fire',  gender: 'f', costume: 'dress',    shirt: '#1976d2', pants: '#0d47a1', accent: '#80deea', skin: '#d2a27a', hair: '#15110f', hairStyle: 'wavy', speed: 3, power: 2, health: 4, face: { hair: 'curly', bindi: 1, nosePin: 1, smile: 'teeth', earrings: 'stud' }, special: 'fireball' },
  { name: 'SUSH', title: 'Sky Breaker',      gender: 'f', costume: 'athlete',  shirt: '#7b1fa2', pants: '#263238', accent: '#ffee58', skin: '#b07c54', hair: '#15110f', hairStyle: 'long', speed: 4, power: 3, health: 2, face: { hair: 'beanie', earrings: 'rect', lips: 1, smile: 'closed' }, special: 'uppercut' },
  { name: 'DEEDEE', title: 'Rising Star',      gender: 'f', costume: 'biker',    shirt: '#c2185b', pants: '#1a1a1a', accent: '#40c4ff', skin: '#f1c27d', hair: '#6d1b3b', hairStyle: 'long',     speed: 3, power: 4, health: 2, face: { hair: 'parted', lips: 1 }, special: 'uppercut' },
  { name: 'RUVI', title: 'Earth Shaker',     gender: 'f', costume: 'armor',    shirt: '#00796b', pants: '#4e342e', accent: '#ffca28', skin: '#b98a5e', hair: '#1a1310', hairStyle: 'wavy',     speed: 2, power: 3, health: 4, face: { hair: 'parted', clip: 1, earrings: 'hoop', lips: 1, smile: 'closed' }, special: 'quake' },
];
