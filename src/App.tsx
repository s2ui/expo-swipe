import * as React from 'react';
import {FC} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import {BorderBottomStyleProperty} from "csstype";

const styles = {
  navBar: {
    backgroundColor: 'white',
    width: '100%',
    height: '100px',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid' as BorderBottomStyleProperty,
  }
};

const App: FC = () =>  {
    return (
      <div className="App">
        <Container>
          <Row style={styles.navBar}/>
        </Container>
      </div>
    );
};

export default App;
