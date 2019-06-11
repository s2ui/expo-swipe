import * as React from 'react';
import {Component} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import {BorderBottomStyleProperty} from "csstype";
import {runBoilerplate} from "./contentful/api";
import {ContentfulType} from "contentful";
import VendorCard from "./fc/VendorCard";
import {mapContentfulExhibitor} from "./types/expo-swipe-types";

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

type State = typeof initialState;

const initialState = {
  exhibitors: []
};


class App extends Component {
  state = initialState;

  async componentDidMount() {
    const exhibitors = await runBoilerplate();
    this.setState({exhibitors: exhibitors[0]});
  }

  render() {
    const {exhibitors} = this.state;

    return (
      <div className="App">
        <Container>
          <Row style={styles.navBar}/>
          {exhibitors && exhibitors.length > 0 ?
            exhibitors.map((exhibitor: ContentfulType) => {
              return (
                <VendorCard exhibitor={mapContentfulExhibitor(exhibitor)} />
              )
            })
            : null}
        </Container>
      </div>
    );
  }
}

export default App;
