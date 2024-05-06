const getServices = () => {
    const data = fetch('https://denismvm.github.io/website/services.json')
        .then((response) => {
            return response.json();
        })
        .catch(e => new Error(e));

    return data
}

const renderServices = async () => {
    const data  = await getServices()

    const wrapper = document.getElementById('service-wrapper')

    if(data) {
        try {
            data.services?.map(
                (element, i) => wrapper.insertAdjacentHTML('beforeend',
                    `<div class="time">
                ${element.time} мин.
            </div>
            <div class="options">
                <h1>${element.title}</h1>
                <h1>₽${element.price}</h1>
            </div>
            <hr color="#e6e6e4" size="1px">`
                )
            )
        } catch {
            wrapper.insertAdjacentHTML("beforeend", "При загрузке данных произошла ошибка")
        }
    }
}

renderServices()



const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};