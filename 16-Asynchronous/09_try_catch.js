try {
    let y = 1;
    const x = 2;
    x = 3;
} catch (err) {
    console.log(err.message)
}

try {
    const whereAmI = async function (country) {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        //   console.log(res)
        const data = await res.json()
        // console.log(data);
        renderCountry(data[0])

    }
} catch (error) {
    console.log(err.message)
}