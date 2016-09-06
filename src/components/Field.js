import React from 'react';

const Field = ({id, field, onClick}) => {
  return (
    <div id={id} className="field" onClick={onClick}>
      {field === false ? 'x' : field === true ? 'o' : ''}
    </div>
  );
}

export default Field;
