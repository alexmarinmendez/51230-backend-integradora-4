import nodemailer from 'nodemailer'

const emailAdmin = 'alexmarinmendez@gmail.com'
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: emailAdmin,
        pass: 'ktqnvvfbrecixzzh'
    }
})

const sendMail = ({ to, subject, html }) => {
    return transport.sendMail({
        from: emailAdmin,
        to, subject, html
    })
}

export default sendMail