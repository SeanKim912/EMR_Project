import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>Welcome to a new kind of electronic medical record application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for the backend code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> and Redux for the frontend code</li>
        </ul>
        <p>
          Traditional EMR's like Epic or Cerner have a GUI, or graphical user interface where users navigate with the help of clickable
          buttons, menus, and links. While this is pretty much how all consumer software is built today, the more complex the application,
          the less intuitive and harder to navigate they get. And what's more complex than an electronic medical record?
        </p>
        <p>
          CareCommand takes a page from software developers who don't work with a GUI and instead do their jobs by typing commands
          into a command-line, exactly how you see in older movies with hacking scenes. Instead of wasting effort taking their hands off the keyboard
          and trying to find the button they're looking for, they just type the command and hit enter. It's how they keep their workspace organized when
          dealing with hundreds, if not thousands of lines of code!
        </p>
        <p>
          As a former healthcare worker turned software engineer, one of the first things I learned was how to use the command-line, and that was when I realized
          it was a potentially powerful tool for healthcare workers navigating a world of endless diseases, procedures, equipment, medications, administrative red-tape, and more.
          Is there a learning curve with using a command-line? Absolutely... but there's also a learning curve the big-name EMR's, and if they make changes or add features you
          have to go button-hunting all over again. With a command-line, the developers just have to tell you what to type, and I've added a handy little cheat sheet in
          case you forget!
        </p>
        <p>
          And don't worry, medicine is a heavily visual, geometric field, so for tasks where typing just won't cut it, there are still point-and-click features
          that you're used to. But overall, I think CareCommand's approach is one that is not only more intuitive and easier to remember in the long run, it's
          also significantly faster and more efficient. If you don't believe me, just watch any developer fly through their computer without ever touching the mouse!
        </p>
      </div>
    );
  }
}
