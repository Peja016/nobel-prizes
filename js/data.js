var url = "data/prize.json";
var urlLaureate = "data/laureate.json";

const flags = {
    "USA": "images/us.png",
    "United Kingdom": "images/gb.png",
    "Germany": "images/ge.png",
    "France": "images/fr.png",
    "Sweden": "images/se.png",
    "Japan": "images/jp.png",
    "Canada": "images/ca.png",
    "Norway": "images/no.png",
    "Spain": "images/es.png",
    "Poland": "images/pl.png",
    "Russia": "images/ru.png",
    "the Netherlands": "images/nl.png",
}

// All the flags downloaded on this website https://flagpedia.net/

const icons = {
    'chemistry': '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M810.416 970.72L640.015 769.056V415.552h21.312c17.68 0 32-14.32 32-32s-14.32-32-32-32h-53.312c-17.68 0-32 14.32-32 32v397.824a31.944 31.944 0 0 0 8.256 21.44l130.368 157.343h-405.28l130.368-157.344a31.944 31.944 0 0 0 8.256-21.44V383.553c0-17.68-14.32-32-32-32H362.67c-17.68 0-32 14.32-32 32s14.32 32 32 32h21.312v353.504l-170.4 201.664a32.039 32.039 0 0 0-5.504 34.431 32.001 32.001 0 0 0 29.249 19.01h549.344a32.001 32.001 0 0 0 29.249-19.01c5.12-11.551 2.976-25.055-5.504-34.431zM479.999 319.68c35.264 0 63.84-28.592 63.84-63.84 0-35.216-28.576-63.807-63.84-63.807-35.28 0-63.84 28.591-63.84 63.807 0 35.248 28.56 63.84 63.84 63.84zm208.48-94.992c62.368 0 112.928-50.336 112.928-112.416S750.863-.144 688.479-.144c-62.352 0-112.928 50.336-112.928 112.416s50.576 112.416 112.928 112.416zm-.496-161.025c26.656 0 48.336 21.584 48.336 48.128 0 26.528-21.68 48.128-48.336 48.128s-48.336-21.6-48.336-48.128c.016-26.544 21.68-48.128 48.336-48.128z"></path></svg>',
    'economics': '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg>',
    'literature': '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    'peace': '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018m4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691M7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"></path></svg>',
    'physics': '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M86.76 255a9.89 9.89 0 0 0 4.87-1.29 9.82 9.82 0 0 0 3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70 14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0 0 11.45-7.9 9.84 9.84 0 0 0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3 5.71-39 17.28-48.45 33.48-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 0 0 8.56 4.95zm274.85-111.27c32.24.42 52.61 9.31 62.79 26.86 14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 0 0 7.51 16.18 9.88 9.88 0 0 0 7.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71 6.14-22 4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 0 0-.12 19.66zm-35.14 271.16a9.88 9.88 0 0 0-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 0 0-12.59-5.92 9.83 9.83 0 0 0-6 12.58c10 27.77 23.47 50.75 39 66.46 16.11 16.34 34.55 25 53.32 25 27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 0 0-3.38-13.5zm105.23-76.35a32.14 32.14 0 0 0-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 0 0-13.91-.65 9.8 9.8 0 0 0-.65 13.9c23.79 26 54.68 50.28 89.33 70.18 40.28 23.13 82.27 38.63 121.43 44.81a225.54 225.54 0 0 0 35 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1 0 16.7-59.68zm0 44.66a12.6 12.6 0 0 1-7.82-2.72 10 10 0 0 0-2.2-2.21 12.61 12.61 0 1 1 10 4.93z"></path><path d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16 23.19-28.45 56.69-56 94.34-77.65 33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 1 0-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1 0 19.63-5.31zM80.3 383.2a12.5 12.5 0 1 1 12.59-12.5 12.56 12.56 0 0 1-12.59 12.5z"></path><path d="M256.2 96.32a32.23 32.23 0 0 0 26.53-13.81c17.89 11.69 34 35 45.81 66.12 13 34.39 19.84 75.38 19.84 118.54 0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 0 0 .66 7.49 9.82 9.82 0 0 0 5.8 4.84 9.89 9.89 0 0 0 12.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49 0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 1 0-32.3 33.31zm0-44.66a12.5 12.5 0 1 1-12.59 12.5 12.56 12.56 0 0 1 12.59-12.5zm-5.2 191.7a24.35 24.35 0 0 0 5.16 48.16 24.68 24.68 0 0 0 5.16-.55A24.36 24.36 0 1 0 251 243.36z"></path></svg>',
    'medicine': '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M839.2 278.1a32 32 0 0 0-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 0 0-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path></svg>'
}

// All the icons in the object icons are from React-icons (https://react-icons.github.io/react-icons/)

const closeIcon = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>` // copy from React-icons

// closeIcon is also from React-icons (https://react-icons.github.io/react-icons/)

const header = [{ label: 'ID', align: 'right' }, { label: 'Full name' }, { label: 'Date awarded', align: 'right' }, { label: 'Category' }]

const words = ['received', 'won', 'earned', 'was awarded']

let organizedData
let lauData
let categories = []

const getData = (url) => {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    try {
                        const data = JSON.parse(xmlhttp.responseText);
                        resolve(data); 
                    } catch (error) {
                        resolve(false); // return false when JSON parsing gets errors.
                    }
                } else {
                    resolve(false);  // return false when the request gets errors.
                }
            }
        };
        xmlhttp.send();
    });
};



const classify = (cat, nationality, lau) => {
    const countries = cat.reduce((res, { country }, i) => {
        res[country] = i
        return res
    }, {})
    if (countries[nationality] == null) {
        cat.push({ country: nationality, values: [ lau ] })
    } else {
        cat[countries[nationality]].values.push(lau)
    }
}

let body = document.getElementsByTagName('body')[0]

let main = document.createElement('main')

let laureates = document.createElement('div');
laureates.className = 'laureates'

let detail = document.createElement('div');
detail.className = 'detail'

let closeBtn = document.createElement('button');
closeBtn.className = 'close'
closeBtn.innerHTML = closeIcon

let closeDetailBtn = document.createElement('button');
closeDetailBtn.className = 'close'
closeDetailBtn.innerHTML = closeIcon

let catDiv = document.createElement('div')
catDiv.className = 'data'

let overlay = document.createElement('div')
overlay.className = 'overlay'

main.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-lau')) {
        showLau(e)
    } else if (e.target.classList.contains('btn-detail')) {
        const index = e.target.getAttribute('index')
        showDetail(index)
    } else if (e.target.classList.contains('btn-cat')) {
        const category = e.target.getAttribute('category')
        showCategory(category)
    }
});

closeBtn.addEventListener('click', (e) => {
    body.style.overflow = 'auto'
    laureates.remove();
    closeBtn.remove();
    overlay.remove();
});

closeDetailBtn.addEventListener('click', (e) => {
    laureates.style.pointerEvents = 'auto'
    closeBtn.style.pointerEvents = 'auto'
    detail.remove();
});

const showCategory = (cat) => {
    const top5 = organizedData?.[cat].reduce((res, d, i) => {
        if (!res.length) {
            res.push({ ...d, rank: i + 1 })
        } else if (res.length < 5) {
            if (d.values.length == res[i - 1].values.length) {
                res.push({ ...d, rank: res[i - 1].rank })
            } else {
                res.push({ ...d, rank: i + 1 })
            }
        } else if (res.length == i && d.values.length == res[i - 1].values.length) {
            res.push({ ...d, rank: res[i - 1].rank })
        }
        return res
    }, [])
    catDiv.innerHTML = `
        <p class="type-title">Top Five Countries in <span class="capitalize">${cat}</span></p>
        ${top5?.map((d, i) => (
            `
            <div class="flex rank" data-type=${d.country}>
                <div class="flex country" key=${i}>
                    <p style="font-size: 1.25em; font-weight: 500; width: 1em">${d.rank}</p>
                    <div style="width: 5em; line-height: 0"><img data-type=${d.country} src=${flags[d.country]} alt=${`${d.country}-flag`} /></div>
                    <div style="font-size: 1.25em; font-weight: 500; flex: 1">${d.country} (${d.values.length} prizes)</div>
                </div>
                <button class="btn-lau" country=${`\"${d.country}\"`} category=${cat} data-index=${i}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256 89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05 19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897 27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063 125.873 249h-6.25z"></path></svg>
                    Show Laureates
                </button>
            </div>
            `    
        )).join('')}
    `
    main.appendChild(catDiv)
}

const showDetail = (index) => {
    laureates.style.pointerEvents = 'none'
    closeBtn.style.pointerEvents = 'none'
    const detailData = lauData?.[index]
    const year = detailData?.prize?.year
    detail.innerHTML = `
        <p class="subtitle" style="text-align: center;">Biography</p> 
        <p class="subtitle">${detailData.firstname} ${detailData.surname || ''}</p>
        <p>
            ${detailData.surname} ${words[Math.floor(Math.random() * (words.length - 1))]} a Nobel prize at the age of ${+year - new Date(detailData.born).getFullYear()} in <span class="capitalize">${detailData?.prize?.category}</span> ${detailData?.prize?.motivation.replace(/"+/g, '')} in ${year}. 
        </p>          
    `
    main.appendChild(detail)
    detail.appendChild(closeDetailBtn)
}

const showLau = (e) => {
    body.style.overflow = 'hidden'
    const cat = e.target.getAttribute('category') 
    const index = e.target.getAttribute('data-index') 
    const country = e.target.getAttribute('country')
    lauData = organizedData[cat][index].values
    laureates.innerHTML = `
        <p class="subtitle">Nobel Laureates in <span class="capitalize">${cat}</span> from ${country}</p>
        <table>
            <thead>
                <tr>
                    ${header.map(({ label, align }, k) => (
                        `<th type=${align} key=${k}>${label}</th>`
                    )).join('')}
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                ${lauData.map((lau, i) => (
                    `
                    <tr key=${i}>
                        <td type="right">${lau.id}</td>
                        <td>${lau.firstname} ${lau.surname || ''}</td>
                        <td type="right">${lau.prize.year}</td>
                        <td class="capitalize">${cat}</td>
                        <td>
                        <button class="btn-detail" index=${i}>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14H5v-2h6v2zm8-4H5v-2h14v2zm0-4H5V7h14v2z"></path></svg>
                            Show detail
                        </button>
                        </td>
                    </tr>
                    `
                )).join('')} 
            </tbody>
        </table>
    `
    main.appendChild(overlay)
    main.appendChild(laureates)
    main.appendChild(closeBtn)
}

const findNowCountry = (country) => {
    // check if the laureate's bornCountry had changed. 
    let nowCountry
    if (country.includes('now')) {
        nowCountry = /(now) (.+(?=\)))/g.exec(country)[2]
    } else if (country.includes('(')) {
        nowCountry = /(?<=\().+(?=\))/g.exec(country)[0]
    } else {
        return country
    }
    return nowCountry
}

const mainHtml = async () => {
    const [prizesObj, lauObj] = await Promise.all([
        getData(url),
        getData(urlLaureate)
    ]);
    // the method found (https://www.w3schools.com/jsref/jsref_promise_all.asp)
    if (!prizesObj || !lauObj) {
        main.innerHTML = `<div class="flex" style="height: 100vh; justify-content: center; align-items: center; font-size: 2em; color: white;">Sorry, failed to get the data</div>`
        body.appendChild(main)
    } else {
        const dataPrize = prizesObj?.prizes
        const dataLaureates = lauObj?.laureates
        const categories = dataPrize.reduce((res, { category }) => {
            if (!res.includes(category)) {
                res.push(category)
            }
            return res
        }, [])
        organizedData = categories.reduce((res, type) => {
            res[type] = []
            dataLaureates.forEach((lau) => {
                lau.prizes.forEach((d) => {
                    if (d.category === type) {
                        if (lau.bornCountry) {
                            classify(res[type], findNowCountry(lau?.bornCountry), { ...lau, prize: d })
                        } else if (lau.diedCountry) {
                            classify(res[type], findNowCountry(lau?.diedCountry), { ...lau, prize: d })
                        } else {
                            const nationality = d.affiliations.reduce((nation, a) => {
                                if (a.country) {
                                    nation = a.country
                                } else {
                                    nation = lau.firstname + (lau.surname || '')
                                }
                                return nation
                            }, '')
                            classify(res[type], nationality, { ...lau, prize: d })
                        }
                    }
                })
            })
            res[type].sort((a ,b) => a.country && (b.values.length - a.values.length))
            return res
        } , {})
    }
    main.innerHTML = `
        <h1 style="text-align: center">Top Five Countries with Noble Prize in Different Categories</h1>
        <div class="flex category">
            ${Object.keys(organizedData).map((cat) => (
                `<button class="btn-cat" category=${cat} key=${cat}>
                    <div class="icon">${icons[cat]}</div>
                    ${cat}
                </button>`
            )).join('')}
        </div>
    `
    body.appendChild(main)
    showCategory(Object.keys(organizedData)[0])
};

mainHtml()
