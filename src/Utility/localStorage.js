const GetData = () => {
    const getDataStore = localStorage.getItem("data")
    if(getDataStore){
        return JSON.parse(getDataStore)
    }
    return {
        "BGDw" : 0,
        "BGDl" : 0,
        "BGDd" : 0,

        "PAKw" : 0,
        "PAKl" : 0,
        "PAKd" : 0,

        "INDw" : 0,
        "INDl" : 0,
        "INDd" : 0,

        "SLw" : 0,
        "SLl" : 0,
        "SLd" : 0,

        "AFGw" : 0,
        "AFGl" : 0,
        "AFGd" : 0,

        "SAw" : 0,
        "SAl" : 0,
        "SAd" : 0,

        "ENGw" : 0,
        "ENGl" : 0,
        "ENGd" : 0,

        "AUSw" : 0,
        "AUSl" : 0,
        "AUSd" : 0,

        "NLDw" : 0,
        "NLDl" : 0,
        "NLDd" : 0,

        "NZLw" : 0,
        "NZLl" : 0,
        "NZLd" : 0,
    }
}
const SavedData = (name) => {
    const dataStore = GetData();
        if (dataStore.hasOwnProperty(name)) {
            dataStore[name] += 1;
            localStorage.setItem("data", JSON.stringify(dataStore));
        }
}

export {GetData, SavedData}