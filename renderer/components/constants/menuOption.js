import Link from 'next/link';

const Option = ({ label, url }) => (
  <Link href={url}>
    <a>{label}</a>
  </Link>
);

export default Option;
