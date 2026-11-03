import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Homelab — Kofi Danso Amakye',
  description:
    'A breakdown of my homelab: hardware, network, storage, virtualisation and the self-hosted media stack.',
};

const hardware = [
  {
    device: 'Lenovo ThinkCentre M720q',
    role: 'Primary hypervisor',
    specs: '3.0 GHz, 9th Gen Intel, 32 GB RAM, 500 GB NVMe SSD',
    os: 'Proxmox VE',
  },
  {
    device: 'TP-Link Omada ES205GP',
    role: 'Easy Managed PoE+ switch',
    specs: '5× Gigabit RJ45 ports (4× PoE+), 65 W PoE budget',
    os: '—',
  },
  { device: 'WD External Storage', role: 'Media & file storage', specs: '8 TB', os: '—' },
];

const vms = [
  { name: 'Ubuntu 26.04', purpose: 'Runs all home services' },
  { name: 'Windows 11', purpose: 'Desktop workloads when needed' },
  { name: 'Windows Server 2022', purpose: 'Windows server lab, managed through MikroTik CHR' },
  { name: 'MikroTik RouterOS (CHR)', purpose: 'Virtual router managing the Windows Server' },
];

const services = [
  { name: 'Homepage', purpose: 'Dashboard for all services' },
  { name: 'Portainer', purpose: 'Docker container management' },
  { name: 'Jellyfin', purpose: 'Media server for movies, shows and music' },
  { name: 'Seerr', purpose: 'Request management and media discovery' },
  { name: 'Radarr', purpose: 'Movie library management' },
  { name: 'Sonarr', purpose: 'TV show library management' },
  { name: 'Lidarr', purpose: 'Music library management' },
  { name: 'Bazarr', purpose: 'Subtitle management' },
  { name: 'Prowlarr', purpose: 'Indexer manager for the *arr apps' },
  { name: 'qBittorrent', purpose: 'Torrent client' },
];

const otherServices = [
  { name: 'FluxDown', purpose: 'Download manager' },
  { name: 'Nextcloud', purpose: 'Self-hosted cloud storage' },
  { name: 'FileBrowser', purpose: 'Web-based file manager' },
  { name: 'code-server', purpose: 'VS Code running on the server' },
];

function Table({ headers, rows }) {
  return (
    <div className='mt-6 overflow-x-auto'>
      <table className='w-full min-w-[520px] border-collapse text-left text-sm'>
        <thead>
          <tr className='border-b border-slate-300 text-slate-500'>
            {headers.map((h) => (
              <th key={h} className='py-3 pr-4 font-mono text-xs font-semibold uppercase tracking-wider'>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className='border-b border-slate-200'>
              {row.map((cell, i) => (
                <td key={i} className={`py-3 pr-4 ${i === 0 ? 'font-medium text-slate-950' : 'text-slate-600'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ kicker, title, children }) {
  return (
    <section className='border-t border-slate-200 py-12'>
      <p className='section-kicker'>{kicker}</p>
      <h2 className='mt-3 text-2xl font-semibold tracking-tight text-slate-950'>{title}</h2>
      {children}
    </section>
  );
}

export default function HomelabPage() {
  return (
    <main className='overflow-hidden'>
      <div className='mx-auto max-w-4xl px-6 py-6 sm:px-10 lg:px-12'>
        <header className='flex items-center justify-between border-b border-slate-200 pb-5'>
          <Link href='/' className='font-mono text-sm font-semibold tracking-tight'>
            KD<span className='text-cyan-600'>.</span>
          </Link>
          <Link href='/' className='text-sm text-slate-500 transition hover:text-slate-950'>
            ← Back to portfolio
          </Link>
        </header>

        <section className='pb-12 pt-16'>
          <p className='section-kicker'>Homelab</p>
          <h1 className='mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl'>Homelab</h1>
          <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
            A breakdown of everything running in my homelab — hardware, network, storage, virtualisation and
            services.
          </p>
        </section>

        <Section kicker='01' title='Hardware'>
          <p className='mt-4 text-slate-600'>
            A compact Lenovo ThinkCentre M720q running Proxmox VE does the heavy lifting, hosting every virtual
            machine and service.
          </p>
          <Table
            headers={['Device', 'Role', 'Specs', 'OS']}
            rows={hardware.map((h) => [h.device, h.role, h.specs, h.os])}
          />
        </Section>

        <Section kicker='02' title='Network'>
          <p className='mt-4 text-slate-600'>
            <span className='font-medium text-slate-950'>Switch:</span> TP-Link Omada ES205GP, a 5-port Gigabit Easy
            Managed switch. Four ports support 802.3af/at PoE+ (up to 30 W each, 65 W total budget), with
            centralised Omada cloud management and a metal desktop/wall-mount casing. All machines
            connect through it.
          </p>
          <p className='mt-4 text-slate-600'>
            <span className='font-medium text-slate-950'>Remote access:</span> Tailscale. The lab is on my Tailnet,
            so I can reach Proxmox and every service from anywhere without opening ports on the router.
          </p>
          <Image
            src='/homelab-network.png'
            alt='TP-Link Omada ES205GP switch sitting on the Lenovo ThinkCentre M720q'
            width={768}
            height={1024}
            className='mt-6 w-full max-w-md rounded-xl border border-slate-200'
          />
        </Section>

        <Section kicker='03' title='Storage'>
          <p className='mt-4 text-slate-600'>
            <span className='font-medium text-slate-950'>External storage:</span> 8 TB WD external drive for media and long-term
            files, alongside the 500 GB NVMe SSD for the OS and VMs.
          </p>
        </Section>

        <Section kicker='04' title='Virtualisation'>
          <p className='mt-4 text-slate-600'>
            The M720q runs Proxmox VE as the hypervisor. Four VMs run on it: Ubuntu 26.04 hosts all home services,
            Windows 11 and Windows Server 2022 are there when needed, and a MikroTik RouterOS CHR instance manages
            the Windows Server.
          </p>
          <Image
            src='/homelab-proxmox.png'
            alt='Proxmox VE dashboard showing four running virtual machines'
            width={1334}
            height={684}
            className='mt-6 w-full rounded-xl border border-slate-200'
          />
          <Table headers={['VM / OS', 'Purpose']} rows={vms.map((v) => [v.name, v.purpose])} />
        </Section>

        <Section kicker='05' title='Media Stack & Services'>
          <p className='mt-4 text-slate-600'>
            Requests come in through Seerr, Radarr, Sonarr and Lidarr pick them up, Prowlarr finds sources, the
            downloaders fetch them, and Jellyfin serves the library.
          </p>
          <Image
            src='/homelab-media-stack.png'
            alt='Homepage dashboard showing the media stack: Jellyfin, Seerr, Sonarr, Prowlarr, Lidarr, qBittorrent, Radarr and Bazarr'
            width={1504}
            height={560}
            className='mt-6 w-full rounded-xl border border-slate-200'
          />
          <Table headers={['Service', 'Purpose']} rows={services.map((s) => [s.name, s.purpose])} />
          <h3 className='mt-10 text-lg font-semibold tracking-tight text-slate-950'>Other Services</h3>
          <Image
            src='/homelab-other-services.png'
            alt='Homepage dashboard showing Portainer, FluxDown, Filebrowser, Nextcloud and CodeServer'
            width={1620}
            height={330}
            className='mt-6 w-full rounded-xl border border-slate-200'
          />
          <Table headers={['Service', 'Purpose']} rows={otherServices.map((s) => [s.name, s.purpose])} />
        </Section>
      </div>
    </main>
  );
}
