import React from 'react'

const LastQuate = () => {
  return (
    <div>
       <section className="flex flex-col items-center w-full px-4 py-24 text-center bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          We don’t just build websites, we get results.
          <br /> Be it planning, designing or marketing your brand online
        </h1>

        <p className="mt-6 text-xl font-semibold text-orange-500">
          — we do it all with an edge.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
          <div className="text-lg text-gray-600">
            Request a tailored quote today
          </div>

          <button
            className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden bg-gradient-to-r from-[#5fcf3a]  to-[#a0ec86]  shadow-lg shadow-green-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 translate-x-[-100%] hover:translate-x-[100%] duration-700 ease-out"
            ></span>
           Get a quote now
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default LastQuate
