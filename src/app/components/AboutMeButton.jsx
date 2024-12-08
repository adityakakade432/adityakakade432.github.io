import React from 'react'

const AboutMeButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white border-b border-[#283618]" : "text-[#52796f]"
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default AboutMeButton