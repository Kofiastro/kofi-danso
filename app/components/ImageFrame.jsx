import Image from 'next/image';

export default function ImageFrame({
  src,
  alt,
  width,
  height,
  label,
  caption,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 896px',
  unoptimized = false,
}) {
  return (
    <figure className={className}>
      <div className='overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-2 shadow-xl shadow-slate-900/10 sm:p-3'>
        <div className='flex items-center gap-1.5 px-2 pb-3 pt-1' aria-hidden='true'>
          <span className='h-2 w-2 rounded-full bg-slate-500' />
          <span className='h-2 w-2 rounded-full bg-slate-600' />
          <span className='h-2 w-2 rounded-full bg-slate-700' />
          <span className='ml-3 font-mono text-[10px] uppercase tracking-widest text-slate-400'>{label}</span>
        </div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='h-auto w-full rounded-lg'
          sizes={sizes}
          unoptimized={unoptimized}
        />
      </div>
      {caption && <figcaption className='mt-3 text-sm leading-6 text-slate-500'>{caption}</figcaption>}
    </figure>
  );
}
