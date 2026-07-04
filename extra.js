async function link_security() {
    let mgs = "/Okubg2VtgvjviIuNU942/g5aYKFhde2/gk/+up+FPhU4f97WQtH2iFBx4D3Lkn8TBAoPvA6CkWS1M/avNeikNMh9b28fnZ+Sywfbc2Bw+AzO6QrQVL1c8sdRMFiDssktSXQG20tzTRTxJBwZAbgPPI2aPK79pwraEerBuVWkC08tJvmTAodRwznegF8SmdhIrB6mJqjNZQHOim3FV1jUdR0WZ6eGrvK6mAVlA76k0uqKZqJKwpDfMGcHUR9JXquB72XLY9RmzjjqJsEjp8UTZy8b8TO8J5G7FITHihafmK9eDp1+N0Gk4/RIWn+OXwQQ2Sv4/yGfaxu/o+VIiHvPuZRu11Dr+35hRx5cqS+Qd6hKswbkBJJT8cGr+DzyA/9knU=";
    document.getElementById("pass_btn").onclick = async function(event){
        document.getElementById("mgs_p").innerText = await decryptText(mgs, document.getElementById("password").value);
    };
}
// Helper: Convert string to ArrayBuffer
const textEncode = (str) => new TextEncoder().encode(str);

// Helper: Convert ArrayBuffer to string
const textDecode = (buffer) => new TextDecoder().decode(buffer);

// 1. Derive a CryptoKey from a plain-text password
async function deriveKey(password, salt) {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    textEncode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

// 2. Encrypt Text
async function encryptText(text, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization Vector
  const key = await deriveKey(password, salt);

  const encryptedContent = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    textEncode(text)
  );

  // Combine salt, iv, and encrypted data into a single payload for easy storage
  const combinedBuffer = new Uint8Array(salt.length + iv.length + encryptedContent.byteLength);
  combinedBuffer.set(salt, 0);
  combinedBuffer.set(iv, salt.length);
  combinedBuffer.set(new Uint8Array(encryptedContent), salt.length + iv.length);

  // Convert to Base64 string for a clean output text
  return btoa(String.fromCharCode(...combinedBuffer));
}

// 3. Decrypt Text
async function decryptText(encryptedBase64, password) {
  const combinedBuffer = new Uint8Array(
    atob(encryptedBase64).split("").map((c) => c.charCodeAt(0))
  );

  // Extract salt, iv, and ciphertext from the combined payload
  const salt = combinedBuffer.slice(0, 16);
  const iv = combinedBuffer.slice(16, 28);
  const ciphertext = combinedBuffer.slice(28);

  const key = await deriveKey(password, salt);

  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      key,
      ciphertext
    );
    return textDecode(decryptedBuffer);
  } catch (error) {
    throw new Error("Decryption failed. Invalid password or corrupted data.");
  }
}