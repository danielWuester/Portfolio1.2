const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_arbej5q', 'template_818fgu3', '#contact-form', 'ISVOC5OfeBE18vFJY')
        .then(() => {
            contactMessage.textContent = 'Nachricht erfolgreich versendet ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, () => {
            contactMessage.textContent = 'Versand fehlgeschlagen ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)