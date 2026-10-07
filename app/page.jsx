import Image from 'next/image';
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaWhatsapp,
} from 'react-icons/fa6';
import { MdKeyboardArrowRight } from 'react-icons/md';

const contact = {
  email: 'kofidanso@6lacktech.com',
  whatsapp: '233544294220',
};

const emailHref = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Project inquiry for Kofi Danso Amakye',
)}&body=${encodeURIComponent(
  'Hello Kofi,\n\nI would like to discuss a project with you.\n\n',
)}`;

const projects = [
  {
    name: '6lackTech',
    type: 'Technology solutions',
    description:
      'A technology agency combining web design and development with financial advisory solutions.',
    href: 'https://www.6lacktech.com/',
  },
  {
    name: 'Sikaflo',
    type: 'Founder-led fintech product',
    description:
      'A financial tracking product in public beta for individuals and small businesses, with income and expense tracking, real-time profit insights, dashboards, smart categorization, reporting, and automation.',
    href: 'https://sikaflo.com/',
  },
  {
    name: 'Energy Analytics & Sustainability Reporting Platform',
    type: 'Analytics & sustainability',
    description:
      'A public project focused on energy analytics and sustainability reporting.',
    href: 'https://energy-analytics-sustainability-rep.vercel.app/#/',
  },
  {
    name: 'KELANDREWS',
    type: 'Product website',
    description:
      'A product-focused web experience for the KELANDREWS ENERGY MASTER DEVICE.',
    href: 'https://kelandrews.vercel.app/',
  },
  {
    name: 'Frontend Mentor',
    type: 'Frontend practice',
    description:
      'Real-world interface challenges used to sharpen HTML, CSS, and JavaScript skills.',
    href: 'https://www.frontendmentor.io/profile/Kofiastro',
  },
  {
    name: 'Vercel Clone',
    type: 'Web development',
    description: 'An interface recreation of the Vercel website.',
    href: 'https://vercelclone-eight.vercel.app/',
  },
  {
    name: 'Networking infrastructure',
    type: 'IT infrastructure & networking',
    description:
      'Networking infrastructure work delivered for organizations and teams. Project details and individual case studies will be added here as they are documented.',
    href: '#contact',
  },
  {
    name: 'Credit risk analysis',
    type: 'Power BI & Excel',
    description:
      'A credit-risk project using Power BI and Excel to work with risk data, analysis, and reporting.',
    href: '#contact',
  },
];

const capabilities = [
  {
    number: '01',
    title: 'Software engineering',
    description:
      'Responsive websites and product interfaces built with clean, maintainable frontend code.',
  },
  {
    number: '02',
    title: 'Infrastructure & networking',
    description:
      'Practical technology support across the systems, connectivity, and digital foundations teams rely on.',
  },
  {
    number: '03',
    title: 'Technology solutions',
    description:
      'A delivery mindset that connects business needs, design decisions, and dependable implementation.',
  },
];

const stackGroups = [
  {
    title: 'Software & Web',
    technologies: ['JavaScript', 'React', 'Next.js', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    title: 'Data & Business Reporting',
    technologies: ['Microsoft Power BI', 'Microsoft Excel', 'Data analysis and reporting', 'Credit-risk analysis'],
  },
  {
    title: 'IT Infrastructure & Networking',
    technologies: ['Windows environments', 'Linux environments', 'Network configuration and troubleshooting', 'Routers, switches, and Wi-Fi infrastructure', 'Structured cabling and connectivity'],
  },
  {
    title: 'Systems & Delivery',
    technologies: ['Git', 'GitHub', 'Vercel', 'Figma', 'Technical documentation'],
  },
];

function ExternalLink({ href }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Open project'
      className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white'
    >
      <FaArrowUpRightFromSquare className='text-xs' />
    </a>
  );
}

export default function Page() {
  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12'>
        <header className='flex items-center justify-between border-b border-slate-200 pb-5'>
          <a href='#top' className='font-mono text-sm font-semibold tracking-tight'>
            KD<span className='text-cyan-600'>.</span>
          </a>
          <nav aria-label='Main navigation' className='flex items-center gap-5 text-sm text-slate-500'>
            <a href='#work' className='transition hover:text-slate-950'>
              Work
            </a>
            <a href='#about' className='transition hover:text-slate-950'>
              About
            </a>
            <a href='#contact' className='transition hover:text-slate-950'>
              Contact
            </a>
          </nav>
        </header>

        <section id='top' className='grid gap-12 pb-24 pt-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pt-24'>
          <div>
            <p className='mb-6 font-mono text-xs uppercase tracking-[0.25em] text-cyan-700'>
              Software Engineer · Accra, Ghana
            </p>
            <h1 className='max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-7xl'>
              Building the digital systems that move work forward.
            </h1>
            <p className='mt-8 max-w-xl text-lg leading-8 text-slate-500'>
              I&apos;m Kofi Danso Amakye — a software engineer, IT infrastructure and networking professional, and technology solutions builder. I turn ideas into useful, dependable digital experiences.
            </p>
            <div className='mt-9 flex flex-wrap items-center gap-4'>
              <a
                href={emailHref}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Email Kofi about a project'
                className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-700'
              >
                Let&apos;s work together <MdKeyboardArrowRight className='text-lg' />
              </a>
              <a href='#work' className='text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-8 transition hover:text-slate-950'>
                See selected work
              </a>
            </div>
          </div>
          <div className='flex flex-col items-start gap-6 md:items-end'>
            <Image
              src='/bioP.jpg'
              width={180}
              height={180}
              alt='Portrait of Kofi Danso Amakye'
              className='h-36 w-36 rounded-full object-cover grayscale sm:h-44 sm:w-44'
              priority
            />
            <p className='max-w-xs text-left text-sm leading-6 text-slate-500 md:text-right'>
              Founder &amp; Technology Lead at <span className='font-medium text-slate-900'>6lackTech</span>, helping ideas become clear, functional technology.
            </p>
          </div>
        </section>

        <section id='about' className='border-t border-slate-200 py-20'>
          <div className='grid gap-10 md:grid-cols-[0.7fr_1.3fr]'>
            <div>
              <p className='section-kicker'>What I do</p>
              <h2 className='mt-3 max-w-xs text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Technology with a practical point of view.</h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-3'>
              {capabilities.map((capability) => (
                <article key={capability.number} className='border-t border-slate-300 pt-4'>
                  <p className='font-mono text-xs text-cyan-700'>{capability.number}</p>
                  <h3 className='mt-8 text-lg font-medium text-slate-950'>{capability.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-slate-500'>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='pb-20'>
          <div className='rounded-3xl bg-slate-950 p-7 text-white sm:p-10'>
            <div className='flex flex-wrap items-start justify-between gap-6'>
              <div>
                <p className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-300'>Professional experience</p>
                <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl'>6lackTech</h2>
              </div>
              <span className='rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs text-slate-300'>Founder / Technology Lead</span>
            </div>
            <div className='mt-12 grid gap-10 md:grid-cols-[1fr_0.8fr]'>
              <p className='max-w-2xl text-xl leading-8 text-slate-300'>
                Leading the technology direction of a Ghana-based agency focused on web design, web development, and financial advisory solutions.
              </p>
              <div className='border-l border-white/20 pl-5 text-sm leading-6 text-slate-400'>
                <p className='text-slate-200'>A case study in progress</p>
                <p className='mt-2'>The public site is the available reference point for this work. Detailed client outcomes and project metrics are intentionally not stated here.</p>
                <a href='https://www.6lacktech.com/' target='_blank' rel='noopener noreferrer' className='mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white'>
                  Visit 6lackTech <FaArrowUpRightFromSquare className='text-xs' />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='border-y border-slate-200 py-16'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='section-kicker'>Partners &amp; clients</p>
              <h2 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950'>Built around real collaboration.</h2>
            </div>
            <p className='max-w-sm text-sm leading-6 text-slate-500 md:text-right'>This section highlights selected partnerships and client work. Verified brand assets will be added as they become available.</p>
          </div>
          <div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4'>
            <a
              href='https://dfr.gov.gh/dfr-ftp/index.html'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-20 items-center justify-center rounded-xl border border-slate-200 px-4 text-center text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700'
            >
              <Image
                src='/department-roads-logo.png'
                width={140}
                height={70}
                alt='Department of Feeder Roads, Republic of Ghana logo'
                className='max-h-16 w-auto max-w-full object-contain'
              />
              <span className='ml-3 text-sm font-semibold tracking-tight text-slate-800'>
                Department of Feeder Roads
              </span>
              <span className='sr-only'>Department of Feeder Roads</span>
            </a>
            <a
              href='https://www.6lacktech.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-20 items-center justify-center rounded-xl border border-slate-200 px-4 transition hover:border-cyan-500'
            >
              <Image
                src='/6lacktech-logo.png'
                width={96}
                height={96}
                alt='6lackTech logo'
                className='h-14 w-14 object-contain'
              />
              <span className='ml-3 text-sm font-semibold tracking-tight text-slate-800'>6lackTech</span>
            </a>
            <a
              href='https://www.africanaspirations.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex h-20 items-center justify-center rounded-xl border border-slate-200 px-4 transition hover:border-cyan-500'
            >
              <Image
                src='/african-aspirations-logo.svg'
                width={132}
                height={64}
                alt='African Aspirations logo'
                className='h-16 w-[132px] max-w-full object-contain'
              />
            </a>
            <div className='flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 text-center text-sm text-slate-400'>
              Partner logo
              <span className='sr-only'>placeholder — replace with verified logo</span>
            </div>
            <div className='flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 text-center text-sm text-slate-400'>
              Partner logo
              <span className='sr-only'>placeholder — replace with verified logo</span>
            </div>
          </div>
        </section>

        <section id='work' className='py-20'>
          <div className='mb-9 flex items-end justify-between gap-5'>
            <div>
              <p className='section-kicker'>Selected work</p>
              <h2 className='mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950'>Projects, experiments, and shipped ideas.</h2>
            </div>
            <span className='hidden font-mono text-xs text-slate-400 sm:block'>08 / selected</span>
          </div>
          <div className='divide-y divide-slate-200 border-y border-slate-200'>
            {projects.map((project, index) => (
              <article key={project.name} className='grid gap-4 py-6 sm:grid-cols-[70px_1fr_auto] sm:items-center'>
                <p className='font-mono text-xs text-slate-400'>0{index + 1}</p>
                <div>
                  <p className='font-mono text-xs uppercase tracking-[0.16em] text-cyan-700'>{project.type}</p>
                  <h3 className='mt-1 text-xl font-medium text-slate-950'>{project.name}</h3>
                  <p className='mt-1 max-w-2xl text-sm leading-6 text-slate-500'>{project.description}</p>
                </div>
                <ExternalLink href={project.href} />
              </article>
            ))}
          </div>
        </section>

        <section className='grid gap-10 border-t border-slate-200 py-16 md:grid-cols-[0.7fr_1.3fr]'>
          <div>
            <p className='section-kicker'>Technology stack</p>
            <h2 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950'>Business-minded tools for building, connecting, and improving technology.</h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2'>
            {stackGroups.map((group) => (
              <div key={group.title}>
                <h3 className='font-mono text-xs uppercase tracking-[0.16em] text-cyan-700'>{group.title}</h3>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {group.technologies.map((technology) => (
                    <span key={technology} className='rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600'>{technology}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='contact' className='rounded-3xl bg-cyan-500 px-7 py-12 sm:px-12 sm:py-16'>
          <p className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-950'>Start a conversation</p>
          <div className='mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end'>
            <h2 className='max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl'>Have a system, product, or idea that needs a thoughtful technology partner?</h2>
            <div className='flex flex-wrap gap-3'>
              <a href={emailHref} target='_blank' rel='noopener noreferrer' aria-label='Email Kofi about a project' className='inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-slate-950'>
                Email Kofi <MdKeyboardArrowRight className='text-lg' />
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target='_blank' rel='noopener noreferrer' className='inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-950/20 px-5 py-3 text-sm font-medium text-slate-950 transition hover:border-white hover:bg-white'>
                WhatsApp <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className='mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-950/15 pt-5 text-sm text-slate-900'>
            <a href={emailHref} target='_blank' rel='noopener noreferrer' className='transition hover:text-white'>{contact.email}</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target='_blank' rel='noopener noreferrer' className='transition hover:text-white'>+233 54 429 4220 on WhatsApp</a>
          </div>
        </section>

        <footer className='flex flex-col gap-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
          <p>© 2026 Kofi Danso Amakye</p>
          <div className='flex items-center gap-4'>
            <a href={emailHref} target='_blank' rel='noopener noreferrer' aria-label='Email Kofi' className='transition hover:text-slate-950'>{contact.email}</a>
            <a href={`https://wa.me/${contact.whatsapp}`} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='transition hover:text-slate-950'><FaWhatsapp /></a>
            <a href='https://github.com/Kofiastro' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='transition hover:text-slate-950'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/kofi-dansoo/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='transition hover:text-slate-950'><FaLinkedin /></a>
            <a href='https://open.spotify.com/user/htvri0jwrxhdqsuczyjclh8ul?si=9659e5648a114e8b' target='_blank' rel='noopener noreferrer' aria-label='Spotify' className='transition hover:text-slate-950'><FaSpotify /></a>
          </div>
        </footer>
      </div>
    </main>
  );
}
