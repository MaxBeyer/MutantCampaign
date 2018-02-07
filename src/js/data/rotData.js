
let rotOasis = {
  rotLevel: 0,
  description: "Rot Oasis. The PCs are safe from the Rot here."
};
let weakRot = {
  rotLevel: 1,
  description: "Weak Rot. The PCs suffer one Rot Point per day spent in such sectors."
};
let rotHeavyArea = {
  rotLevel: 2,
  description: "Rot-Heavy Area. The PCs suffer one Rot Point per hour."
};
let rotData = new Map();
rotData.set(11, rotOasis);
rotData.set(12, rotOasis);
rotData.set(13, weakRot);
rotData.set(14, weakRot);
rotData.set(15, weakRot);
rotData.set(16, weakRot);
rotData.set(21, weakRot);
rotData.set(22, weakRot);
rotData.set(23, weakRot);
rotData.set(24, weakRot);
rotData.set(25, weakRot);
rotData.set(26, weakRot);
rotData.set(31, weakRot);
rotData.set(32, weakRot);
rotData.set(33, weakRot);
rotData.set(34, weakRot);
rotData.set(35, weakRot);
rotData.set(36, weakRot);
rotData.set(41, weakRot);
rotData.set(42, weakRot);
rotData.set(43, weakRot);
rotData.set(44, weakRot);
rotData.set(45, weakRot);
rotData.set(46, weakRot);
rotData.set(51, weakRot);
rotData.set(52, weakRot);
rotData.set(53, weakRot);
rotData.set(54, weakRot);
rotData.set(55, weakRot);
rotData.set(56, rotHeavyArea);
rotData.set(61, rotHeavyArea);
rotData.set(62, rotHeavyArea);
rotData.set(63, rotHeavyArea);
rotData.set(64, rotHeavyArea);
rotData.set(65, rotHeavyArea);
rotData.set(66, rotHeavyArea);

export {rotData};
