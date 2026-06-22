export function clockAndCalendar() {
    const clock = document.getElementById('clock');
    const calendar = document.getElementById('calendar');

    function update() {
        const date = new Date();

        /*  HOURS FORMAT */
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        /* CALENDER FORMAT */
        const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
        const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

        const day = date.getDay();
        const dayNumber = date.getDate();
        const month = date.getMonth();



        /* TEXT ON SCREEN */
        clock.innerText = `${hours}:${minutes}`;
        calendar.innerText = `${days[day]} ${dayNumber} ${months[month]}`;
    }

    update(); /* Faz o primeiro chamado do Date */
    setInterval(update, 1000); /* Executa uma nova atualização do Date a cada 1 segundo */
}