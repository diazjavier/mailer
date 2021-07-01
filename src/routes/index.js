const { Router } = require ('express');
const router = Router();
const nodemailer = require ('nodemailer');

router.post('/sendemail', async (req, res) => {
  const { name, email, phone, message } = req.body;
  let contentHTM = '<h1>El contenido del mail</h1><ul><li>Usuario:'+ name+ '</li><li>Email: '+ email+ '</li><li>TE: '+ phone+ '</li></ul><p>'+ message+ '</p>';

//   const transporter = nodemailer.createTransport({
//     host: 'mail.funsalud.com.ar',
//     port: 26,
//     secure: false,
//     auth: {
//       user: 'admin@funsalud.com.ar',
//       pass: 'x#pWztc6'
//     }
//   });
//
//   transporter.verify().then(() => {
//     console.log('Listo para enviar!!!!!');
//   });
//
//   const info = await transporter.sendMail({
//     from: 'admin@funsalud.com.ar',
//     to: 'diazjavier@hotmail.com',
//     replyTo: 'diazjavier10@yahoo.com.ar',
//     subjet: 'Prueba nodemailer!!!!',
//     html: contentHTM
//   });
//   console.log('Mensaje enviado! ', info.response);
//   res.send('ENVIADO')
// });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: 'tablero.caba@gmail.com',
      pass: '123456Aa*'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.verify().then(() => {
    console.log('Listo para enviar!!!!!');
  });

  let mailOptions = {
    from: 'tablero.caba@gmail.com',
    to: email,
    replyTo: 'diazjavier10@yahoo.com.ar',
    subject: 'Prueba nodemailer  2 !!!!',
    html: contentHTM
  };

  const info = await transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
      console.log('Ha ocurrido un error: ', err);
    } else {
      console.log('Mensaje enviado! ');
    };
  });
  // console.log('Mensaje enviado! ', info.response);
  res.redirect('/index.html');
});

module.exports = router;
