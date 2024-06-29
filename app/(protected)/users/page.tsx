import { getUsers } from "@/actions/getUsers";
import UserList from "@/components/ui/auth/user-nav";

import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";


export default async function UsersPage () {
  const users = await getUsers();
  return (
    <div>
        <UserList items={users}/>

              
    </div>
  );
};
