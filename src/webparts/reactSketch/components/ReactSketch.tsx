import * as React from 'react';
import styles from './ReactSketch.module.scss';
import { IReactSketchProps } from './IReactSketchProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {SketchField, Tools} from 'react-sketch';

export default class ReactSketch extends React.Component<IReactSketchProps, {}> {
  public render(): React.ReactElement<IReactSketchProps> {
    return (
      <SketchField width='1024px' 
                   height='768px' 
                   tool={Tools.Pencil} 
                   lineColor='red'
                   lineWidth={3}/>
  )
  }
}
