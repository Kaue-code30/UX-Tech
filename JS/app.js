const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/enviar-email', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const empresa = req.body.empresa;
    const assunto = req.body.assunto;
    const mensagem = req.body.mensagem;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'kaue.lima@uxgroup.com.br',
            pass: '301906Ka.',
        },
    });

    const mailOptions = {
        from: 'kaue.lima@uxgroup.com.br',
        to: 'kaue.lima@uxgroups.com.br',
        subject: 'Novo formulário de contato - UX Tech',
        text: `
            Nome: ${nome}
            Email: ${email}
            Telefone: ${telefone}
            Empresa: ${empresa}
            Assunto: ${assunto}
            Mensagem: ${mensagem}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o e-mail');
        } else {
            console.log('Email enviado: ' + info.response);
            res.redirect('#'); // Página de sucesso
        }
    });
});

app.listen(8080, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
