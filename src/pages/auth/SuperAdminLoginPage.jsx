import { useState } from "react";
import { Shield } from "lucide-react";

export default function SuperAdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
            <Shield className="h-6 w-6 text-gray-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Superadmin Access
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access the superadmin dashboard
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-1">Login</h3>
          <p className="text-sm text-gray-500 mb-4">
            Secure access for authorized personnel only
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="admin@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">
                  Enter your password
                </span>
                <a
                  href="#"
                  className="text-xs font-medium text-gray-600 hover:text-gray-800"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-xs text-gray-500">
          This is a restricted area. Unauthorized access attempts will be
          logged.
        </div>
      </div>
    </div>
  );
}
