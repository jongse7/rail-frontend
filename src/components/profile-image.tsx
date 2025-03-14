import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function ProfileImage() {
  return (
    <Avatar className={cn("border-2 size-30 rounded-sm")}>
      <AvatarImage src="/image/profile.webp" />
      <AvatarFallback>RAIL</AvatarFallback>
    </Avatar>
  );
}
