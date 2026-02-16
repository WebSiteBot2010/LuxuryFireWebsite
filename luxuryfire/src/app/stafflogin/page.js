export default function StaffLogin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl mb-6">Staff Login</h1>
      <a
        href="/login"
        className="bg-red-500 px-6 py-3 rounded-lg font-bold hover:bg-red-600"
      >
        Accedi con Discord
      </a>
    </div>
  );
}
