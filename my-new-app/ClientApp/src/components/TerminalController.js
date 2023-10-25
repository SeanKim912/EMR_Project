import React from 'react';
import Terminal from 'terminal-in-react';

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
                    popup: () => alert('Terminal in React')
                }}
                descriptions={{
                    'open-google': 'opens google.com',
                    // showmsg: 'shows a message',
                    alert: 'alert', popup: 'alert'
                }}
                msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
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
