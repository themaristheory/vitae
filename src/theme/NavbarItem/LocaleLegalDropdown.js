import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

const legalLinks = {
  en: {
    label: 'Legal',
    items: [
      {label: 'Privacy Policy', href: 'https://vitae.mrbt-software.com/privacy.html'},
      {label: 'Legal Notice', href: 'https://vitae.mrbt-software.com/legal.html'},
      {label: 'Licenses', href: 'https://vitae.mrbt-software.com/licenses.html'},
    ],
  },
  'pt-BR': {
    label: 'Informações legais',
    items: [
      {label: 'Política de Privacidade', href: 'https://vitae.mrbt-software.com/pt-br/privacy.html'},
      {label: 'Aviso Legal', href: 'https://vitae.mrbt-software.com/pt-br/legal.html'},
      {label: 'Licenças', href: 'https://vitae.mrbt-software.com/pt-br/licenses.html'},
    ],
  },
  de: {
    label: 'Rechtliches',
    items: [
      {label: 'Datenschutz', href: 'https://vitae.mrbt-software.com/de/privacy.html'},
      {label: 'Impressum', href: 'https://vitae.mrbt-software.com/de/legal.html'},
      {label: 'Lizenzen', href: 'https://vitae.mrbt-software.com/de/licenses.html'},
    ],
  },
};

export default function LocaleLegalDropdown({mobile, ...props}) {
  const {i18n} = useDocusaurusContext();
  const links = legalLinks[i18n.currentLocale] ?? legalLinks.en;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={links.label}
      items={links.items.map((item) => ({...item, target: '_self'}))}
    />
  );
}
