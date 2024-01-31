function topicsRequests() {
    const result = []
    for (let i = 0; i < topics.length; i++) {
        const type = (topics[i].Type).replace('P', 'Presentation').replace('D', 'Discussion').replace('V', 'Voting').replaceAll('/', ' / ')
        result.push({
            replaceAllText: {
                replaceText: `${i+1}. ${topics[i].Title}\nType of Intervention - ${type}\nSpeaker - ${topics[i].Speaker}\n\n{{TOPICS}}`,
                containsText: {
                    text: "{{TOPICS}}",
                    matchCase: true
                }
            }
        })
    }
    result.push({
        replaceAllText: {
            replaceText: "",
            containsText: {
                text: "{{TOPICS}}",
                matchCase: true
            }
        }
    })

    return result
}

function createFinalRequest() {
    return [
        {
            replaceAllText: {
                replaceText: start,
                containsText: {
                    text: "{{START}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: end,
                containsText: {
                    text: "{{END}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: members.length.toString(),
                containsText: {
                    text: "{{MEMBERS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: members.join(", "),
                containsText: {
                    text: "{{MEMBERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: newMembers.length.toString(),
                containsText: {
                    text: "{{NEWMEMBERS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: newMembers.join(", "),
                containsText: {
                    text: "{{NEWMEMBERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: parachutes.length.toString(),
                containsText: {
                    text: "{{PARACHUTES PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: parachutes.join(", "),
                containsText: {
                    text: "{{PARACHUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: externals.length.toString(),
                containsText: {
                    text: "{{EXTERNALS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: externals.join(", "),
                containsText: {
                    text: "{{EXTERNALS}}",
                    matchCase: true
                }
            }
        }
    ]
}

function createInitialRequest() {
    return [
        {
            replaceAllText: {
                replaceText: date,
                containsText: {
                    text: "{{DATE}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.mainChair,
                containsText: {
                    text: "{{MAIN CHAIR}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.mainChair,
                containsText: {
                    text: "{{NEXT MAIN CHAIR}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.speakers,
                containsText: {
                    text: "{{SPEAKERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.speakers,
                containsText: {
                    text: "{{NEXT SPEAKERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.minutes,
                containsText: {
                    text: "{{MINUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.minutes,
                containsText: {
                    text: "{{NEXT MINUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: topics.map((topic) => `${topic.Title}`).join("\n"),
                containsText: {
                    text: "{{TOPIC LIST}}",
                    matchCase: true
                }
            }
        },
        ...topicsRequests()
    ]
}

function createRequest() {
    return [
        {
            replaceAllText: {
                replaceText: date,
                containsText: {
                    text: "{{DATE}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: start,
                containsText: {
                    text: "{{START}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: end,
                containsText: {
                    text: "{{END}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: members.length.toString(),
                containsText: {
                    text: "{{MEMBERS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: members.join(", "),
                containsText: {
                    text: "{{MEMBERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: newMembers.length.toString(),
                containsText: {
                    text: "{{NEWMEMBERS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: newMembers.join(", "),
                containsText: {
                    text: "{{NEWMEMBERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: parachutes.length.toString(),
                containsText: {
                    text: "{{PARACHUTES PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: parachutes.join(", "),
                containsText: {
                    text: "{{PARACHUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: externals.length.toString(),
                containsText: {
                    text: "{{EXTERNALS PRESENT}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: externals.join(", "),
                containsText: {
                    text: "{{EXTERNALS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.mainChair,
                containsText: {
                    text: "{{MAIN CHAIR}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.mainChair,
                containsText: {
                    text: "{{NEXT MAIN CHAIR}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.speakers,
                containsText: {
                    text: "{{SPEAKERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.speakers,
                containsText: {
                    text: "{{NEXT SPEAKERS}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: chair.minutes,
                containsText: {
                    text: "{{MINUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: nextChair.minutes,
                containsText: {
                    text: "{{NEXT MINUTES}}",
                    matchCase: true
                }
            }
        },
        {
            replaceAllText: {
                replaceText: topics.map((topic) => `${topic.Title}`).join("\n"),
                containsText: {
                    text: "{{TOPIC LIST}}",
                    matchCase: true
                }
            }
        },
        ...topicsRequests()
    ]
}

async function insertFinalData() {
    let response;
    let details;
    const inputStr = document.getElementById('doc-id').value;
    const inputRegex = /[-\w]{25,}(?!.*[-\w]{25,})/.exec(inputStr);
    if (inputRegex == null) {
        alert('Invalid document link/ID.');
        return;
    }
    const inputId = inputRegex[0];
    copyId = inputId;
    console.log(inputId);
    try {
        response = await gapi.client.docs.documents.batchUpdate({
            documentId: inputId,
            resource: {
                requests: createFinalRequest()
            }
        })
        details = await gapi.client.docs.documents.get({
            documentId: inputId,
        })
    } catch (e) {
        console.error(e)
    }
}

async function insertData(requestFunction) {
    let response;
    let details;
    try {
        response = await gapi.client.docs.documents.batchUpdate({
            documentId: copyId,
            resource: {
                requests: requestFunction()
            }
        })
        details = await gapi.client.docs.documents.get({
            documentId: copyId,
        })
    } catch (e) {
        console.error(e)
    }
    const boldRequests = []
    for (let i = 19 + topics.length; i < (19 + 5*topics.length); i += 4) {
        boldRequests.push({
            updateTextStyle: {
                textStyle: {
                    bold: true
                },
                fields: "bold",
                range: {
                    startIndex: details.result.body.content[i].startIndex,
                    endIndex: details.result.body.content[i].endIndex,
                }
            }
        })

        boldRequests.push({
            updateTextStyle: {
                textStyle: {
                    bold: true
                },
                fields: "bold",
                range: {
                    startIndex: details.result.body.content[i+1].startIndex,
                    endIndex: details.result.body.content[i+1].startIndex + 22,
                }
            }
        })

        boldRequests.push({
            updateTextStyle: {
                textStyle: {
                    bold: true
                },
                fields: "bold",
                range: {
                    startIndex: details.result.body.content[i+2].startIndex,
                    endIndex: details.result.body.content[i+2].startIndex + 9
                }
            }
        })
    }

    let boldResponse;
    try {
        response = await gapi.client.docs.documents.batchUpdate({
            documentId: copyId,
            resource: {
                requests: boldRequests
            }
        })
    } catch (e) {
        console.error(e)
    }

    console.log(boldResponse)
}

async function generateInitialMinutes() {
    document.getElementById("insert_initial_button").disabled = true;
    await copyTemplate();
    await insertData(createInitialRequest);
    document.getElementById("insert_initial_button").disabled = false;
    document.getElementById("redirect_button").style.visibility = "visible";
}

async function generateFinalMinutes() {
    document.getElementById("insert_final_button").disabled = true;
    await insertFinalData();
    document.getElementById("insert_final_button").disabled = false;
    document.getElementById("redirect_button").style.visibility = "visible";
}

async function generateMinutes() {
    document.getElementById("insert_button").disabled = true;
    await copyTemplate();
    await insertData(createRequest);
    document.getElementById("insert_button").disabled = false;
    document.getElementById("redirect_button").style.visibility = "visible";
}

document.getElementById("insert_button").addEventListener('click', generateMinutes)
document.getElementById("insert_initial_button").addEventListener('click', generateInitialMinutes)
document.getElementById("insert_final_button").addEventListener('click', generateFinalMinutes)
document.getElementById("redirect_button").addEventListener('click', (e) => {
    window.location = `https://docs.google.com/document/d/${copyId}/edit`;
})