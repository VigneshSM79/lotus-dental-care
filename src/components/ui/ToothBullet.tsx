export default function ToothBullet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`text-accent flex-none w-[18px] h-[18px] mt-[3px] ${className}`}
    >
      <path d="M12 2C9.8 2 8.5 3 6.5 3 5.4 3 4.6 2.8 3.8 3.4 2.6 4.3 2.3 6 2.6 8c.3 1.9.9 3.4 1.4 5.2.4 1.5.6 3.2.9 4.6.3 1.3.7 2.2 1.6 2.2.9 0 1.2-1 1.5-2.3.3-1.3.5-2.9.8-4 .3-1 .6-1.7 1.4-1.7s1.1.7 1.4 1.7c.3 1.1.5 2.7.8 4 .3 1.3.6 2.3 1.5 2.3.9 0 1.3-.9 1.6-2.2.3-1.4.5-3.1.9-4.6.5-1.8 1.1-3.3 1.4-5.2.3-2 0-3.7-1.2-4.6C19.4 2.8 18.6 3 17.5 3 15.5 3 14.2 2 12 2Z" />
    </svg>
  );
}
