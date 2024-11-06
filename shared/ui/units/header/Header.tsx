import { Navigation } from '../../navigation/Navigation';

const navItems = [
  { label: 'разработка', href: '/' },
  { label: 'обучение', href: '/education' },
  { label: 'исследования', href: '/' },
  { label: 'о нас', href: '/' },
  { label: 'контакты', href: '/' },
];

export const Header = () => {
  return (
    <header className="py-6  fixed w-screen z-10 bg-[#1b1b1bd8]">
      <div>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
