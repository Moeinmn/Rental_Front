//'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  size?: string
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  size = "2xl"
}) => {

  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={`text-${size} font-bold`}>
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
    </div>
  );
}

export default Heading;