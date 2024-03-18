type NavItemProps = {
  text: string;
};

function NavItem({ text }: NavItemProps) {
  return (
    <div className="text-white hover:text-gray-300 cursor-pointer">
      <p>{text}</p>
    </div>
  );
}

export default NavItem;
