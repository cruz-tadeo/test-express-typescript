// const qrcode = require("qrcode-terminal");

// const { Client } = require("whatsapp-web.js");
// const client = new Client();

// const groups = ["Pruebas whatssap"];

// client.on("qr", (qr) => {
//   qrcode.generate(qr, { small: true });
// });

// client.on("ready", () => {
//   console.log("Client is ready!");
// });

// client.on("message", async (msg) => {
//   const chat = await msg.getChat();
//   let resultado = JSON.stringify(msg);
//   let result = resultado.split('"notifyName":"')[1];
//   const contact = result.split('",')[0];
//   const group = chat.name;
//   const numberFrom = msg.author;

//   if (groups.includes(group)) {
//     console.log(numberFrom, "number mensaje");
//     console.log(contact, "autor mensaje");
//     console.log(msg.body, "mensaje");
//   }
// });

function limpiarNumero(numeroCompleto) {
  // Eliminar todo excepto los dígitos
  let numeros = numeroCompleto.slice(3);

  // Verificar si hay más de 10 dígitos y tomar los primeros 10
  if (numeros.length > 10) {
    numeros = numeros.substring(0, 10);
  }

  return numeros;
}

//client.initialize();


console.log(limpiarNumero('5219983457986@c.us'));