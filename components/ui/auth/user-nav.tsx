"use client"
import { User } from "@prisma/client";
import Userbox from "./UserBox";

interface UserListProps{
  items: User[]
}
const UserList:React.FC<UserListProps> = ({
 items
})=>{
  return(
    <div>
      {items.map((item)=>(
          <Userbox key={item.id} data = {item}/>
      ))}
    </div>
    
  )
}
export default UserList;