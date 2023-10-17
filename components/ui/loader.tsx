import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

export function Loader(props: LucideProps) {
    return <Loader2 {...props} className={cn("h-4 w-4 animate-spin", props.className)} />
}