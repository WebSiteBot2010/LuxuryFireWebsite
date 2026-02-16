import { cookies } from "next/headers";
import { isStaff } from "@/lib/staff";

export default async function StaffPage() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  if (!userCookie) return <div>Non autorizzato</div>;

  const user = JSON.parse(userCookie.value);
  const staff = await isStaff(user.id);
  if (!staff) return <div>Accesso negato</div>;

  return (
    <div className="p-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-4xl mb-4">Staff Panel</h1>
      <p>Benvenuto staff {user.username}</p>
    </div>
  );
}
