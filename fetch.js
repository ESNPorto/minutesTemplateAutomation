let members;
let newMembers;
let parachutes;
let externals;
let topics;
let chair;
let start;
let end;
let date;
let nextChair;

function handleMembers(data, index) {
    console.log(data[index].values)
    if (data[index].values === undefined) return []
    return data[index].values.filter(member => (member.length == 2 && member[1] === "Present")).map(member => member[0]);
}

function handleHours(list) {
    return [list[0][0], list[list.length - 1][1]];
}

function handleNextChair(values, date) {
    for (let i = 0; i < values.length; i++) {
        if (values[i][0] == date) {
            return {
                'mainChair': values[i][1],
                'speakers': values[i][2],
                'minutes': values[i][3],
            };
        }
    }

    return {
        'mainChair': 'Could not find next chairing team in GM sheet.',
        'speakers': 'Could not find next chairing team in GM sheet.',
        'minutes': 'Could not find next chairing team in GM sheet.',
    };
}

function handleTopics(list) {
    const temp = [];
    list.forEach((topic) => {
        if (topic.length == 0) return;
        temp.push({
            'Title': topic[0],
            'Speaker': topic[1],
            'Type': topic[2],
        })
    })
    return temp;
}

function handleChair(list) {
    if (list[5] === undefined) {
        list[5] = [''];
    }
    return {
        'mainChair': list[1][0],
        'speakers': list[3][0],
        'minutes': list[5][0],
    }
}

async function fetchData() {
    document.getElementById("fetch_button").disabled = true
    const dateInput = document.getElementById('gm_day').value
    console.log(dateInput)
    dateObj = new Date(dateInput)
    date = dateObj.toLocaleDateString('en-GB')
    dateObj.setDate(dateObj.getDate() + 7)
    nextWeek = dateObj.toLocaleDateString('en-GB')
    console.log(date)
    console.log(nextWeek)

    const request = {
        spreadsheetId: CONFIG.SPREADSHEET_ID,
        ranges: [`'${date}'!A1:B57`, `'${date}'!C1:D57`, `'${date}'!E1:F57`,
                 `'${date}'!I1:I7`, `'${date}'!J1:L40`, `'${date}'!M1:N40`, `'${date}'!G1:H57`, `'Chairing Teams'!B3:E100`],
    }

    try {
        const response = await gapi.client.sheets.spreadsheets.values.batchGet(request);
        const data = response.result.valueRanges;
        console.log(data)
        members = handleMembers(data, 0);
        newMembers = handleMembers(data, 1);
        parachutes = handleMembers(data, 6);
        externals = handleMembers(data, 2);
        chair = handleChair(data[3].values);
        topics = handleTopics(data[4].values);
        [start, end] = handleHours(data[5].values);
        nextChair = handleNextChair(data[7].values, nextWeek);
        console.log(members)
        console.log(newMembers)
        console.log(parachutes)
        console.log(chair)
        console.log(topics)
        console.log(nextChair)
        console.log(start)
        console.log(end)

        document.getElementById("insert_button").style.visibility = "visible";
        document.getElementById("insert_initial_button").style.visibility = "visible";
        document.getElementById("insert_final_button").style.visibility = "visible";
    } catch (err) {
        console.error(err);
        window.alert(`Error fetching data, please check that there is a properly named sheet in the GM agendas.\n The error was: ${err.result.error.message}`);
    } finally {
        document.getElementById("fetch_button").disabled = false;
        console.log("wowo")
    }
}



document.getElementById('fetch_button').addEventListener('click', (e) => {fetchData(date)});