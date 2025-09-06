'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, CheckCircle2} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { publications } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function PublicationsPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-3xl mx-auto"
				>
					<motion.h1
						variants={fadeIn('down', 0.2)}
						className="text-4xl font-bold mb-6"   
					>
						Publications
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)}
						className="text-lg text-muted-foreground mb-12"
					>
						My research participations in several conferences.
					</motion.p>

					<div className="space-y-8">
						{publications.map((pub, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
								className="relative"
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
											<div>
												<h2 className="text-2xl font-semibold">{pub.title}</h2>
												<p className="text-primary">{pub.authors}</p>
											</div>
											
										</div>

										<div className="space-y-3">
                                        <div className="flex items-center text-muted-foreground">           
												<CheckCircle2 className="h-4 w-4 mr-2" />
												{pub.conference}
											</div>
                                            <div className="flex items-center text-muted-foreground">
												<Award className="h-4 w-4 mr-2" />
												{pub.type}
											</div>
											<div className="flex items-center text-muted-foreground">
												<MapPin className="h-4 w-4 mr-2" />
												{pub.location}
											</div>
											<div className="flex items-center text-muted-foreground">
												<Calendar className="h-4 w-4 mr-2" />
												{pub.Date}
											</div>
										</div>

										
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}