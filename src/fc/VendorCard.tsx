import * as React from 'react';
import {ReactNode} from 'react';
import {Exhibitor} from "../types/expo-swipe-types";

type Props = {
  children?: ReactNode;
  exhibitor: Exhibitor;
}

const styles = {
  default: {
    color: 'white',
  },
};

const VendorCard = (props: Props) => {
  return (
    <p key={props.exhibitor.name}>{props.exhibitor.name}</p>
  );
};

export default VendorCard;