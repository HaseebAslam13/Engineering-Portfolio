'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; 
import ProfilePic from '@/components/images/profile-pic.png';


import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
  <div className="container px-4">
    <SectionHeader title="About Me" description="" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative w-full max-w-[500px] aspect-[4/3]" // Set aspect ratio to match image
      >
        <Image
          src={ProfilePic}
          alt="Engineer portrait"
          fill
          className="object-contain" // Use object-contain to avoid cropping
          sizes="(max-width: 768px) 100vw, 500px" // Match max-width of container
        />
      </motion.div>

      {/* Rest of your code remains unchanged */}
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center"
      >
        <h3 className="text-4xl font-bold mb-4">Muhammad Haseeb Aslam</h3>
        <p className="text-muted-foreground mb-6">
          Hi! I am a 3rd year Computer Engineering student at McMaster University, with deep interest in FPGA Design, Power Systems and Artificial Intelligence.
          Feel free to look over my projects, skills and experience.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="card-gradient">
            <CardContent className="p-4">
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-muted-foreground">B.Eng. Computer Engineering @ McMaster</p>
            </CardContent>
          </Card>
          <Card className="card-gradient">
            <CardContent className="p-4">
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-muted-foreground">2+ Years</p>
            </CardContent>
          </Card>
          <Card className="card-gradient">
            <CardContent className="p-4">
              <h4 className="font-semibold">Projects</h4>
              <p className="text-sm text-muted-foreground">10+</p>
            </CardContent>
          </Card>
          <Card className="card-gradient">
            <CardContent className="p-4">
              <h4 className="font-semibold">Awards</h4>
              <p className="text-sm text-muted-foreground">3 Recognitions</p>
            </CardContent>
          </Card>
        </div>

        
      </motion.div>
    </div>
  </div>
</section>
	);
}