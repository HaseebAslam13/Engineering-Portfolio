'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Languages } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function SkillsPage() {
	const hardwareSkills = skills.filter(skill => skill.category === 'hardware');
	const LangSkills = skills.filter(skill => skill.category === 'lang');
	const LibSkills = skills.filter(skill => skill.category === 'libs');
	const TechSkills = skills.filter(skill => skill.category === 'tech');
	const DevSkills = skills.filter(skill => skill.category === 'dev');

	const SkillCategory = ({
		title,
		skills,
		icon,
		delay
	}: {
		title: string;
		skills: typeof hardwareSkills;
		icon: React.ReactNode;
		delay: number;
	}) => (
		<motion.div variants={fadeIn('up', delay)}>
			<Card className="card-gradient">
				<CardContent className="p-6">
					<div className="flex items-center gap-2 mb-6">
						{icon}
						<h2 className="text-2xl font-semibold">{title}</h2>
					</div>
					<div className="space-y-4">
						{skills.map((skill, index) => (
							<div key={index}>
								<div className="flex justify-between mb-1">
									<span>{skill.name}</span>
									<span className="text-muted-foreground">{skill.level}/10</span>
								</div>
								<div className="skill-bar">
									<motion.div
										className="skill-progress"
										initial={{ width: 0 }}
										whileInView={{ width: `${skill.level * 10}%` }}
										viewport={{ once: true }}
										transition={{ duration: 1, delay: index * 0.1 }}
									/>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div variants={fadeIn('down', 0.2)} className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							An overview of my hardware skills and software proficiency.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<SkillCategory
							title="Hardware Skills"
							skills={hardwareSkills}
							icon={<Cpu className="h-6 w-6 text-primary" />}
							delay={0.3}
						/>
						<SkillCategory
							title="Software Languages"
							skills={LangSkills}
							icon={<Code2 className="h-6 w-6 text-secondary" />}
							delay={0.4}
						/>
						<SkillCategory
							title="Libraries"
							skills={LibSkills}
							icon={<Brain className="h-6 w-6 text-accent" />}
							delay={0.5}
						/>
						<SkillCategory
							title="Techonologies"
							skills={TechSkills}
							icon={<Languages className="h-6 w-6 text-primary" />}
							delay={0.6}
						/>
						
					</div>
				</motion.div>
			</div>
		</div>
	);
}