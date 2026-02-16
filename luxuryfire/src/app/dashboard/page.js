import { cookies } from "next/headers";

export default function Dashboard() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  if (!userCookie) return <div>Non autorizzato</div>;

  const user = JSON.parse(userCookie.value);

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-4xl mb-4">Dashboard</h1>
      <p>Benvenuto {user.username}</p>
    </div>
  );
}
