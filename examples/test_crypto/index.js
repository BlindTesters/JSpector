var a =0

// compute a hash with salt set to "salt0"
let hash = crypto.pbkdf2Sync("seg-2023", "salt0", 1000, 64, "sha512");

a+=1

// print 100 hash
// call a second time with salt0 and other one with salt"i"
for (var i=0; i < 5; i++) {
  // create a hash of text
  let hash = crypto.pbkdf2Sync("seg-2023", "salt"+i+a, 1000, 64, "sha512");
  console.log("Hash : " + hash.toString('hex'));
}
