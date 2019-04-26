import * as React from 'react';
import './App.css';
import {Container, Row} from "reactstrap";

const styles = {
  navBar: {
    backgroundColor: 'black',
    width: '100%',
    height: '100px',
  }
};

const App = () =>  {
    return (
      <div className="App">
        <Container>
          <Row style={styles.navBar}/>
        </Container>
      </div>
    );
};

export default App;
