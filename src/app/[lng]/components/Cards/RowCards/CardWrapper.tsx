import Link from 'next/link';

interface IWrapper {
  href?: string;
  className: string;
  children: React.ReactNode;
}

const CardWrapper: React.FC<IWrapper> = ({
  children,
  href,
  className,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
};

export default CardWrapper;
