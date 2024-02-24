export default function define (args, print, runCommand) {
    async function definition() {
        const definitionFetch = fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${args[1]}?key=98db8ef1-9b37-496e-8895-e73969683ded`)
        .then((response) => {
            return response.json();
        });

        const d = await definitionFetch;
        let entry = d[0];
        console.log(entry);
        let printout = `${entry.hwi.hw} [${entry.hwi.prs[0].mw}] ${entry.fl}\n`;
        entry.shortdef.forEach((def, i) => {
            printout += `${i + 1}. ${def}\n`;
        });
        print(printout);
        return entry;
    }

    definition();
}
