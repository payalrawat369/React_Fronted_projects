import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 w-[320px] min-h-[320px] bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-300">
        <div className="flex items-center justify-between">
          <h3 className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
           {data.category}
          </h3>

          <h4 className="text-sm text-red-100 font-medium">
            {data.taskDate}
          </h4>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white leading-snug">
          {data.taskTitle}
          </h2>

          <p className="text-red-100 text-sm leading-6 mt-4">
            {data.taskDescription}
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button className="bg-white text-red-600 font-semibold px-5 py-2 rounded-xl hover:bg-red-100 transition">
            View Task(Active)
          </button>

          <button>Mark as completed</button>
          <button>mark as fail</button>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
