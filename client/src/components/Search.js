import React, { useState } from 'react';

const Search = () => {
  const [input, setInput ] = useState('')
  
  return (
    <div>
      <input
        name='search'
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}  
      />
    </div>
  )
}

export default Search;