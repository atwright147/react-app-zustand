import React from 'react';
// import ReactDOM from 'react-dom';

type LevelNumber = 1 | 2 | 3 | 4 | 5 | 6;
type LevelString = '1' | '2' | '3' | '4' | '5' | '6';
type Level = LevelNumber | LevelString;

interface Props {
  level?: Level,
  children: any,
}

export const Heading = ({ level = 1, children }: Props): JSX.Element => (
  React.createElement(`h${level}`, {}, children)
);
