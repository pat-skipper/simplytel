import { useState } from 'react'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onLogin) {
      onLogin({ email, password })
    }
  }

  return (
    <div className="bg-black flex items-center justify-center min-h-screen text-white">
      <div className="bg-[#1a1a1a] rounded-2xl p-6 w-[90%] max-w-sm text-center shadow-xl">
        <div className="mb-6">
          <div className="flex justify-center">
            <img src="images/logo.png" alt="Simplytel Logo" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-6 leading-snug">
          Gérer votre standard<br />téléphonique simplement
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#2d2d2d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#2d2d2d] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-full transition"
          >
            Log In
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4">
          En continuant, vous acceptez les{' '}
          <a href="#" className="underline">conditions générales</a>
        </p>
      </div>
    </div>
  )
}
