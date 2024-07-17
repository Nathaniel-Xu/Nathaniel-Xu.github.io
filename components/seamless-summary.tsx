import Image from 'next/image';
import mayflydiagram from '@/public/images/mayfly/mayflydiagram.png';
import { ArrowUpRight } from 'lucide-react';

import GradientButtonLink from '@/components/ui/gradient-button-link';

export default function SeamlessSummary() {
  return (
    <div id="seamless">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-base">
        Featured Project
      </p>
      <div className="mt-2 flex flex-col justify-between sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-[#aa2957] sm:text-4xl">
          Mayfly
        </h2>
        <GradientButtonLink
          href="https://mayfly.dev"
          title="Read Case Study"
        >
          <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </GradientButtonLink>
      </div>
      <p className="mt-8">
        I created Mayfly, an open-source, low-config orchestration tool for hosting high compute/memory
        web applications on AWS. It functions through an API that returns a link to an instance of your application. 
        This instance automatically spins down when the session is over. It features a CLI for AWS deployment, a dashboard,
        automatic scheduling of docker containers, and a custom DNS server for routing.
      </p>
      <div className="mt-8 block sm:mt-16">
        <Image
          src={mayflydiagram}
          alt="Mayfly screenshot"
          className="shadow-lg"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
