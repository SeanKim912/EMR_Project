export default async function define (args, print, runCommand) {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${args[1]}?key=98db8ef1-9b37-496e-8895-e73969683ded`)

    let definition = response.json();
    console.log(definition);

    // definition.forEach((entry) => {
    //     console.log("AAA", entry.hwi.hw);
    //     entry.hwi.prs.forEach((pronunciation) => {
    //         console.log(pronunciation.mw);
    //     })
    //     console.log(entry.fl);
    //     entry.shortdef.forEach((def) => {
    //         console.log(def);
    //     });
    //     // print(entry.hwi.hw);
    //     // entry.hwi.prs.forEach((pronunciation) => {
    //     //     print(pronunciation.mw);
    //     // });
    //     // print(entry.fl);
    //     // entry.shortdef.forEach((def) => {
    //     //     print(def);
    //     // });
    // })

}
