import { Navigation } from '../../navigation/Navigation';

const navItems = [
  { label: 'разработка', href: '/' },
  { label: 'обучение', href: '/education/adult' },
  { label: 'исследования', href: '/' },
  { label: 'о нас', href: '/' },
  { label: 'контакты', href: '/' },
];

export const Header = () => {
  return (
    <header className="py-4  fixed w-screen z-10 bg-[#1b1b1b]">
      <div>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
