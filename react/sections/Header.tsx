import { Navigation } from '../components/ui/Navigation';
// import { ThemeButton } from "./ThemeButton";

const navItems = [
  { label: 'разработка', href: '/' },
  { label: 'обучение', href: '/' },
  { label: 'исследования', href: '/' },
  { label: 'о нас', href: '/' },
  { label: 'контакты', href: '/' },
];

export const Header = () => {
  return (
    <header className="py-4 pt-14 absolute w-full z-10">
      <div>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
