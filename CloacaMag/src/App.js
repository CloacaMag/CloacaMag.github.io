import logo from './logo.svg';
import './App.css';
import skeleton from './dancingskeleton.gif'
import email from './email.gif'





function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Hallozine 2021
        </p>
        
      </header>
      <body className='body'>
        <p>whoa welcome to our sweetttt hallozine website</p>
        <p>submit your delicious whatever/s to CloacaMag@gmail.com
        </p>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXVZgPPsVgzmChpClSjkPxxQkXMnLWCRWHPkwXPsNQdQGpwjgpGLbFCKPvJrkWmkgMVSB'>
        <img 
        className="emailimage"  
        src={email}>
        </img>
</a>
        <img 
        className="skeletonimage" 
        src={skeleton}
        >
        </img>
      </body>
      <div>
        
      </div>
      
      
    </div>
  );
}

export default App;
