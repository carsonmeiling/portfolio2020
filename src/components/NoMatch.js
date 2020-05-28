import React from 'react';

const NoMatch = (props) => {

  return(
    <div>
      <h2>404</h2>
      <h2>Page not found</h2>
      <button onClick = {() => props.history.goBack()}>Back</button>
    </div>
  )  
}

export default NoMatch;