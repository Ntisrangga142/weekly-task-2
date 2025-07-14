async function getRawData(URL) {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    return error
  }
}

function buildObj(name, city) {
    const obj = {
        name: name,
        city:city
    }

    return obj ;
}

function sortData (data){
    data.sort((a, b) => a.city.localeCompare(b.city));
    return data;
}

export async function getData (URL) {
    try {
        const data =  await getRawData(URL);
        let dataResult = [];
        if (data instanceof Error) throw data;
        for(let i = 0; i < data.length; i++){
            const {name, address:{city}} = data[i]
            dataResult.push(buildObj(name, city))
        }
        dataResult = sortData(dataResult);
        console.log(dataResult)
    } catch (error) {
        return error;
    }
}
