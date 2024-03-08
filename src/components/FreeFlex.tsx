import React, { FC } from 'react'

interface Props {
  child1: React.ReactNode;
  child2: React.ReactNode;
}

const FreeFlex:FC<Props> = ({child1, child2}) => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-start lg:flex-row gap-8">
          <div className=''>{child1}</div>
          <div className=''>{child2}</div>
        </div>
      </div>
    </>
  )
}

export default FreeFlex