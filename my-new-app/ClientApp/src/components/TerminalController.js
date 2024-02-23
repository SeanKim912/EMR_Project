import React from 'react';
import Terminal from 'terminal-in-react';
import doubleMe from './Commands/test.js';

const TerminalController = () => {
    // let showMsg = () => "Hey Hey Hey";

    return (
        <>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    'open-google': () => window.open('google.com', '_blank'),
                    // showmsg: this.showMsg,
                    popup: () => alert('Terminal in React'),
                    'type-text': (args, print, runCommand) => {
                        const text = args.slice(1).join(' ');
                        print('');
                        for (let i = 0; i < text.length; i += 1) {
                            setTimeout(() => {
                                runCommand(`edit-line ${text.slice(0, i + 1)}`);
                            }, 100 * i);
                        }
                    },
                    'double': doubleMe
                }}
                // Remember that args is an array, with args[0] being the command itself!
                descriptions={{
                    'open-google': 'opens google.com',
                    // showmsg: 'shows a message',
                    alert: 'alert', popup: 'alert'
                }}
                msg='Type your commands here. Use the Cheat Sheet to see what you can do!'
            />
        </>
    );
}

export default TerminalController;

// import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

// const TerminalController = () => {
//     const [terminalLineData, setTerminalLineData] = useState([
//         <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>
//     ]);

//     return (
//         <>
//             <Terminal
//                 name='React Terminal Usage Example'
//                 colorMode={ ColorMode.Dark }
//                 onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`)}
//             >
//                 { terminalLineData }
//             </Terminal>
//         </>
//     );
// }
