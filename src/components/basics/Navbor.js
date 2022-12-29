import React from 'react'

const Navbor = ({categoryList,filteritem}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
          {categoryList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filteritem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbor