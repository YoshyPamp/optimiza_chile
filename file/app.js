
// Inicializa la conexión hacia pubnub con sus respectivas llaves.
var pubnub = require("pubnub")({
    ssl           : true,
    publish_key   : "pub-c-f2f9a471-732c-4f5e-a5cb-7ededbea4fab",
    subscribe_key : "sub-c-934f925a-0584-11e6-a5b5-0619f8945a4f"
});


/*
*   ESPERA POR MENSAJES RECIBIDOS.
*     Y MANDA LA RESPUESTA QUITANDOLE TODOS LOS CARACTERES ESPECIALES
*
*/
pubnub.subscribe({
   channel: 'Channel-06rqx3ulr',
   message: function(m){
      console.log(m);
      pubnub.publish({
        channel: 'Channel-06rqx3ulr',
        message: 'Title: ' + m.title + "       Texto: " + m.text.replace(/[^\w\s]/gi, '')
     });
     pubnub.unsubscribe({
        channel: 'Channel-06rqx3ulr'
     });
   }
});
