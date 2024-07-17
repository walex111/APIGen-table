import { UserTable } from "@/components/UserTable";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-between p-2 md:p-24 tracking-wider">
      <UserTable />
      {/* <UsersTable /> */}
    </main>
  );
}
