import { ICON_TYPE } from './constants';

interface Props {
  className?: string;
  icon: keyof typeof ICON_TYPE;
  type?: 'outline' | 'solid';
}

export default function Icon({ className, icon, type = 'outline' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill={type === 'solid' ? 'currentColor' : 'none'}
      stroke={type === 'outline' ? 'currentColor' : undefined}
      className={`w-6 h-6 ${className}`}
    >
      <path
        fillRule={type === 'solid' ? 'evenodd' : undefined}
        clipRule={type === 'solid' ? 'evenodd' : undefined}
        strokeLinecap={type === 'outline' ? 'round' : undefined}
        strokeLinejoin={type === 'outline' ? 'round' : undefined}
        d={ICON_TYPE[icon]}
      />
    </svg>
  );
}
