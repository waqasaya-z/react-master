import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IDropdownMenu {
  open: boolean;
  onClose: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  label?: string;
}

function DropdownMenuOptions({
  onClose,
  open,
  trigger,
  children,
  label,
}: IDropdownMenu) {
  return (
    <DropdownMenu open={open} onOpenChange={(open) => !open && onClose()}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMenuOptions;
