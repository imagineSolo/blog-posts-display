import React from 'react'

const Loader: React.FC = () => (
  <div className="absolute inset-0 flex justify-center items-center z-50" role="progressbar">
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 border-8 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  </div>
)

export default Loader
