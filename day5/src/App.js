import './App.css';
import PageElement from './PageElement';

const pageElements = [
  {
    htmlElementName: 'div',
    innerHTML: 'Hello World1!',
    style: {
      margin: '2px',
      padding: '2px',
      border: '1px solid #ff0034',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'section',
    innerHTML: 'Hello World2!',
    style: {
      margin: '2px',
      padding: '2px',
      border: '1px solid #ff0034',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'section',
    innerHTML: [
      {
        htmlElementName: 'div',
        innerHTML: 'Hello World3.1!',
        style: {
          margin: '2px',
          padding: '2px',
          border: '1px solid #aaff34',
          backgroundColor: '#edeff2',
          color: '#4d4d4d',
        },
      },
      {
        htmlElementName: 'section',
        innerHTML: 'Hello World3.2!',
        style: {
          margin: '2px',
          padding: '2px',
          border: '1px solid #aaff34',
          backgroundColor: '#edeff2',
          color: '#4d4d4d',
        },
      },
    ],
    style: {
      margin: '2px',
      padding: '2px',
      border: '1px solid #ff0034',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'section',
    innerHTML: 'Hello World4!',
    style: {
      margin: '2px',
      padding: '2px',
      border: '1px solid blue',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
  {
    htmlElementName: 'section',
    innerHTML: {
      htmlElementName: 'section',
      innerHTML: 'Hello World5!',
      style: {
        margin: '2px',
        padding: '2px',
        border: '1px solid yellow',
        backgroundColor: '#edeff2',
        color: '#4d4d4d',
      },
    },
    style: {
      margin: '2px',
      padding: '2px',
      border: '1px solid blue',
      backgroundColor: '#edeff2',
      color: '#4d4d4d',
    },
  },
];

function App() {
  const style = {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
  };
  return (
    <div className="App" style={style}>
      {pageElements.map((x) => (
        <PageElement {...x} />
      ))}
    </div>
  );
}

export default App;
