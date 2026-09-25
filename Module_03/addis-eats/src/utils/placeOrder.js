export function placeOrder(form) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.name.toLowerCase().includes("fail")) {
        reject(new Error("That number is not registered with TeleBirr"));
      } else {
        resolve({ id: "order_" + Date.now() });
      }
    }, 1200); 
  });
}