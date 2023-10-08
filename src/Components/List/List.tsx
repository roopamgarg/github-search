import * as React from 'react';

export enum ColumnTypes {
  IMAGE,
  LINK,
  STRING
}

export interface IListColumn {
  type: ColumnTypes
  value: string
  placeholder?: string
}

export interface IListProps {
    data: IListColumn[][];
}

function parseListColumn(data: IListColumn) {
  if(data.type === ColumnTypes.IMAGE){
    return <img className='avatar-image' src={data.value} alt="user"/>
  } else if(data.type === ColumnTypes.LINK){
    return <a rel="noreferrer" target='_blank' href={data.value}>{data.placeholder || data.value}</a>
  } else {
    return <div>{data.value}</div>
  }
}

export function List (props: IListProps) {
  return (
    <table>
      {props.data.map(row => <tr className='list-row'>{row.map(col => <td>{parseListColumn(col)}</td>)}</tr>)}
    </table>
  );
}
