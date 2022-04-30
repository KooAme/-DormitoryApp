import React from 'react';

function Search() {
  const handleSubmit = (event) => {
    event.preventDefault();
    onsubmit(event.target.elements.filter.value);
  };

  return (
    <button
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'orange',
        border: 'none',
        borderRadius: 5,
        color: 'white',
        paddingInline: 10,
        paddingBlock: 3,
      }}
    >
      조회
    </button>
  );
}

export default Search;
