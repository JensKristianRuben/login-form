export function generateStandardPassword(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = array[i] % charset.length;
    result += charset[randomIndex];
  }
  
  return result;
}