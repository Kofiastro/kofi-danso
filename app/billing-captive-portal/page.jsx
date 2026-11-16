import Link from 'next/link';
import ImageFrame from '../components/ImageFrame';

export const metadata = {
  title: 'Billing & Captive Portal — Kofi Danso Amakye',
  description:
    'A fiber-powered Wi-Fi setup using MikroTik, Centipid and Paystack for paid internet access.',
};

const setup = [
  { number: '01', title: 'Fiber connection', description: 'The upstream internet connection for the network.' },
  { number: '02', title: 'MikroTik router', description: 'Connects the fiber service to the Wi-Fi network.' },
  { number: '03', title: 'Two access points', description: 'Provide wireless coverage for users to connect.' },
];

export default function BillingCaptivePortalPage() {
  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-4xl px-6 py-6 sm:px-10 lg:px-12'>
        <header className='flex items-center justify-between gap-4 border-b border-slate-200 pb-5'>
          <Link href='/' className='font-mono text-sm font-semibold tracking-tight'>
            KD<span className='text-cyan-600'>.</span>
          </Link>
          <Link href='/' className='text-sm text-slate-500 transition hover:text-slate-950'>
            ← Back to portfolio
          </Link>
        </header>

        <section className='pb-12 pt-16 sm:pt-20'>
          <p className='section-kicker'>Networking &amp; access management</p>
          <h1 className='mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>
            Billing system &amp; captive portal
          </h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
            A fiber-powered Wi-Fi setup that brings connectivity, billing and paid internet access together.
            Centipid manages the billing system and captive portal, with Paystack as the payment gateway.
          </p>
          <div className='mt-7 flex flex-wrap gap-2'>
            {['Fiber', 'MikroTik', 'Centipid', 'Paystack'].map((technology) => (
              <span key={technology} className='rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600'>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <ImageFrame
          src='/billing-overview.png'
          alt='Centipid billing dashboard showing revenue, subscriptions, online users and network activity'
          width={1509}
          height={768}
          label='Billing overview'
          caption='The billing dashboard brings subscriptions, revenue and network activity into one view. Subscriber identifiers have been blurred.'
        />

        <section className='mt-12 border-t border-slate-200 py-12'>
          <p className='section-kicker'>01 / The setup</p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>From fiber to Wi-Fi</h2>
          <p className='mt-4 max-w-2xl leading-7 text-slate-600'>
            The fiber connection feeds a MikroTik router, which connects to two access points. Together they
            provide wireless internet access through a captive portal.
          </p>
          <div className='mt-7 grid gap-3 sm:grid-cols-3'>
            {setup.map((item) => (
              <div key={item.number} className='rounded-xl border border-slate-200 bg-white p-5'>
                <p className='font-mono text-xs text-cyan-700'>{item.number}</p>
                <h3 className='mt-4 font-semibold text-slate-950'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-500'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='border-t border-slate-200 py-12'>
          <p className='section-kicker'>02 / Access &amp; billing</p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>A simple path to getting online</h2>
          <p className='mt-4 max-w-2xl leading-7 text-slate-600'>
            Users connect to the Wi-Fi and use the captive portal to pay a fee for internet access. Centipid
            supports the billing and access-management workflow, while Paystack handles payments as the gateway.
          </p>
        </section>

        <section className='border-t border-slate-200 py-12'>
          <p className='section-kicker'>03 / Network visibility</p>
          <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>Keeping the network in view</h2>
          <p className='mb-7 mt-4 max-w-2xl leading-7 text-slate-600'>
            The Centipid network map provides a view of routers and access points, making it easier to see
            device status across the network.
          </p>
          <ImageFrame
            src='/billing-network-map.png'
            alt='Centipid network map showing routers, access points and their online status'
            width={1398}
            height={768}
            label='Network map'
            caption='The network map shows connected devices and their status. Network addresses have been blurred.'
          />
        </section>

        <div className='border-t border-slate-200 py-10'>
          <Link href='/homelab' className='text-sm font-medium text-cyan-700 transition hover:text-slate-950'>
            Explore my homelab →
          </Link>
        </div>
      </div>
    </main>
  );
}
