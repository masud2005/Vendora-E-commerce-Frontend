"use client";

import AboutHeader from "@/components/about/AboutHeader";
import AboutStats from "@/components/about/AboutStats";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-primary-50">
      <div className="container mx-auto px-4 py-8">
        {/* Top Hero fold (Header details + Image) */}
        <AboutHeader />

        {/* Statistics section */}
        <AboutStats />

        {/* Story and Mission cards */}
        <AboutStory />

        {/* Core Values grid */}
        <AboutValues />

        {/* Leadership team grid */}
        <AboutTeam />

        {/* Call to Action banner */}
        <AboutCTA />
      </div>
    </div>
  );
}
