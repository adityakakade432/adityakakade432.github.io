import React from 'react'

const AboutMeButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#52796f] border-b border-[#283618]" : "text-[#52796f]"
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-[#52796f] ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default AboutMeButton