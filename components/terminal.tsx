"use client"

import { useEffect, useRef, useState } from "react"

export function useTerminal(secretKey: string = "anonymua") {
  const [showSecret, setShowSecret] = useState(false)
  const [verified, setVerified] = useState(false)
  const [keySequence, setKeySequence] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Secret key listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key.toLowerCase()
      if (secretKey.startsWith(newSequence)) {
        setKeySequence(newSequence)
        if (newSequence === secretKey) {
          e.preventDefault()
          setShowSecret(true)
          setKeySequence("")
          setTimeout(() => inputRef.current?.focus(), 100)
        }
      } else {
        setKeySequence("")
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [keySequence, secretKey])

  return {
    showSecret,
    verified,
    setVerified,
    inputRef,
    reset: () => {
      setShowSecret(false)
      setVerified(false)
    },
  }
}

// Terminal Component  
export function Terminal({
  state,
  onExit,
}: {
  state: ReturnType<typeof useTerminal>
  onExit: () => void
}) {
  const { verified, setVerified, inputRef, reset } = state
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [countdown, setCountdown] = useState<number | null>(null)
  const [attempts, setAttempts] = useState(0)
  const MAX_ATTEMPTS = 5
  const [visible, setVisible] = useState(true)
  const API_URL = process.env.NEXT_PUBLIC_GULA_ARCANA_URL || "http://localhost:3000";

  async function verifyCode(code: string) {
    try {
      const res = await fetch(`${API_URL}/api/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      const data = await res.json()

      if (data.valid) {
        setVerified(true)
        setResponse("✔ Welcome master erujs, opening secret vault 1470 in")
        setCountdown(3)
      } else {
        const newAttempts = attempts + 1
        setAttempts(newAttempts)
        if (newAttempts >= MAX_ATTEMPTS) {
          setResponse(
            `✖ Too many failed attempts (${newAttempts}/${MAX_ATTEMPTS}) — access denied in`
          )
          setCountdown(3)
        } else {
          setResponse(`✖ Invalid code (${newAttempts}/${MAX_ATTEMPTS} tries used)`)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Countdown effect (works for both success and failure)
  useEffect(() => {
    if (countdown === null) return

    if (countdown <= 0) {
      setCountdown(null)
      setVisible(false)

      if (!verified) {
        // Only reset on failure
        reset()
      }

      onExit()
      return
    }

    const timer = setTimeout(() => setCountdown((c) => (c !== null ? c - 1 : null)), 1000)
    return () => clearTimeout(timer)
  }, [countdown, verified, reset, onExit])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      verifyCode(input.trim())
      setInput("")
    }
  }

  const keepFocus = () => setTimeout(() => inputRef.current?.focus(), 0)

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-70 p-6"
      onClick={keepFocus}
    >
      <div className="bg-black text-teal-400 font-mono p-6 rounded-lg shadow-xl w-full max-w-2xl">
        {/* Response + countdown */}
        {response && (
          <div className="mb-2">
            {response} {countdown !== null && <span>{countdown}...</span>}
          </div>
        )}

        {/* Input line only when countdown is null */}
        {!verified && countdown === null && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-teal-600 mr-2">temetnosce:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-teal-400 font-mono caret-teal-400"
              autoFocus
              spellCheck={false}
              onBlur={keepFocus}
            />
          </form>
        )}
      </div>
    </div>
  )
}
