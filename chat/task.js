document.addEventListener('DOMContentLoaded', function () {
    const chatWidget = document.querySelector('.chat-widget');
    const inputField = document.getElementById('chat-widget__input');
    const messagesContainer = document.getElementById('chat-widget__messages');

    chatWidget.addEventListener('click', function () {
        chatWidget.classList.add('chat-widget_active');
    });

    inputField.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && inputField.value.trim() !== '') {
            sendMessage('message_client', inputField.value.trim());
            inputField.value = '';
            setTimeout(sendRobotMessage, 1000);
        }
    });

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function sendMessage(className, text) {
        const messageHTML = `
            <div class="message ${className}">
                <div class="message__time">${getCurrentTime()}</div>
                <div class="message__text">${text}</div>
            </div>`;
        messagesContainer.innerHTML += messageHTML;
    }

    function sendRobotMessage() {
        const robotMessages = ["Добрый день!", "Пишите в любое удобное время с 10:00 до 10:01!", "Не пишите нам больше, пожалуйста","До свидания!" ];
        const randomIndex = Math.floor(Math.random() * robotMessages.length);
        sendMessage('', robotMessages[randomIndex]);
    }
}); 