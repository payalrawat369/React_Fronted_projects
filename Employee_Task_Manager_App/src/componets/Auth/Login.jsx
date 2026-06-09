import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,pass)

    console.log("hello guys ,form submitted")

    setEmail("")
    setPassword("")
  }

  return (
    <>
    <h1 className="text-2xl font-bold text-white leading-tight p-3">for admin dashboard use:  admin@gmail.com</h1>
    <h1 className="text-2xl font-bold text-white leading-tight p-3">for admin dashboard use:  employee@gmail.com</h1>

    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-10">
      


      <form
        onSubmit={submitHandler}
        className="w-full max-w-5xl"
      >

        <div className="flex overflow-hidden rounded-3xl shadow-2xl bg-[#1e293b]">

          {/* Left Image Section */}
          <div
            className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
            style={{
              backgroundImage:
"url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
            }}
          >

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-10">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Welcome Back
              </h1>

              <p className="text-gray-300 mt-4 text-lg">
                Manage your tasks, employees and workflow easily with your modern dashboard.
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 text-white">

            {/* Logo / Heading */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold">
                Login Account
              </h2>

              <p className="text-gray-400 mt-2">
                Please sign in to continue
              </p>
            </div>

            {/* Email */}
            <div className="mb-6">

              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Email Address
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#334155] border border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none rounded-2xl py-4 px-5 text-white placeholder:text-gray-400 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div className="mb-4">

              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-300">
                  Password
                </label>

              </div>

              <input
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-[#334155] border border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 outline-none rounded-2xl py-4 px-5 text-white placeholder:text-gray-400 transition-all duration-300"
              />
            </div>

            {/* Login Button */}
            <div className="mt-8">

              <button 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-lg"
              >
                Sign In
              </button>
            </div>

          

          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login