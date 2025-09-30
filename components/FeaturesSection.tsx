import React from 'react';
import { FadeIn } from './FadeIn';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
    <div className="mb-4 text-orange-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ChartBarIcon />,
      title: 'Placement Mastery',
      description: 'Turn placement anxiety into confidence with curated resources and insights.',
    },
    {
      icon: <CodeBracketIcon />,
      title: 'Daily Code Challenge',
      description: 'Sharpen problem-solving skills with a new "Problem of the Day" challenge.',
    },
    {
      icon: <UsersIcon />,
      title: 'Find Your Dream Team',
      description: 'Instantly match with highly-skilled peers for collaborative projects and hackathons.',
    },
    {
      icon: <HandshakeIcon />,
      title: 'Professional Network',
      description: 'Effortlessly connect with companies and alumni actively seeking student talent.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Ultimate Career Accelerator</h2>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">Everything you need to succeed, all in one place.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={150 * index}>
              <FeatureCard {...feature} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


// SVG Icons (defined outside the main component to prevent re-creation on re-renders)

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
const CodeBracketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 21a2.25 2.25 0 002.25-2.25V15M15 21a2.25 2.25 0 01-2.25-2.25V15" />
    </svg>
);
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.72,17.78a2.83,2.83,0,0,0,0-4L12,9.05,7.28,13.78a2.83,2.83,0,0,0,0,4l.71.71a2.83,2.83,0,0,0,4,0L12,17.78l-.71-.71a2.83,2.83,0,0,0-4,0l-.71.71m10.6-1.42L12,11.88l-3.54,3.53m4.95-4.95,3.54-3.54a2.83,2.83,0,0,0-4-4L12,3.54,7.28.00A2.83,2.83,0,0,0,3.28,4L6.81,7.54" transform="translate(1.5, 1.5) rotate(45 12 12)" />
  </svg>
);


export default FeaturesSection;