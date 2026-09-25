import React, { useState } from 'react';
import { team, TeamMember } from '../../data/team';
import { mentors, Mentor } from '../../data/mentors';
import { HairlineDivider } from '../ui/HairlineDivider';

export const Team: React.FC = () => {
  const [teamImageErrors, setTeamImageErrors] = useState<Record<string, boolean>>({});
  const [mentorImageErrors, setMentorImageErrors] = useState<Record<string, boolean>>({});

  return (
    <section id="team" className="bg-ink text-paper py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-lg sm:text-xl font-bold tracking-wider uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-300"></span>
            Team
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-paper leading-tight">
            Team Unovex
          </h2>
          <p className="mt-4 font-body text-base text-slate leading-relaxed">
            Multidisciplinary engineering team spanning Information Technology, Electronics & Communication, and Cybersecurity disciplines.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member: TeamMember) => {
            const hasLinkedIn = member.linkedin && member.linkedin.trim().length > 0;
            const hasError = teamImageErrors[member.id];

            const CardContent = (
              <div className="h-full p-6 border border-teal-300/30 bg-[#071310] rounded-[4px] flex flex-col justify-between transition-colors hover:border-teal-300/60 group">
                <div>
                  {/* Photo or Clean Stylized Initials Avatar */}
                  <div className="w-16 h-16 rounded-[4px] overflow-hidden bg-ink border border-teal-300/30 mb-4 flex items-center justify-center relative">
                    {!hasError ? (
                      <img
                        src={member.photo}
                        alt={`Portrait of ${member.name}`}
                        onError={() => setTeamImageErrors(prev => ({ ...prev, [member.id]: true }))}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-teal-700/30 text-teal-300 font-heading font-semibold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-paper group-hover:text-teal-300 transition-colors">
                    {member.name}
                  </h3>
                  
                  <span className="font-body text-xs text-teal-300 font-medium block mt-0.5">
                    {member.role}
                  </span>

                  <p className="font-body text-xs text-slate mt-2">
                    Department: {member.department}
                    {member.year && ` · ${member.year}`}
                    {member.regNo && ` · Reg: ${member.regNo}`}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-teal-300/10 flex items-center justify-between text-xs">
                  {hasLinkedIn ? (
                    <span className="font-body text-teal-300 group-hover:underline">
                      View LinkedIn Profile
                    </span>
                  ) : (
                    <span className="font-body text-slate italic">
                      Link coming soon
                    </span>
                  )}
                  <span className="font-body text-[10px] text-slate">
                    ID: {member.id}
                  </span>
                </div>
              </div>
            );

            if (hasLinkedIn) {
              return (
                <a
                  key={member.id}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-teal-700 block"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={member.id}>
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Mentors Section Anchor Target */}
        <div id="mentors" className="mt-24 scroll-mt-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-teal-300/15 border border-teal-300/35 text-teal-300 font-heading text-base sm:text-lg font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-300"></span>
              Mentors & Advisory
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-paper leading-tight">
            Academic & innovation leadership
          </h2>
          <p className="mt-3 font-body text-sm text-slate max-w-2xl leading-relaxed">
            Faculty guidance and technical innovation oversight from institutional and academic leadership.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mentors.map((mentor: Mentor) => {
              const hasLinkedIn = mentor.linkedin && mentor.linkedin.trim().length > 0;
              const hasError = mentorImageErrors[mentor.id];

              const MentorCard = (
                <div className="p-6 border border-teal-300/30 bg-[#071310] rounded-[4px] flex flex-col justify-between transition-colors hover:border-teal-300/60 group">
                  <div>
                    <div className="w-16 h-16 rounded-[4px] overflow-hidden bg-ink border border-teal-300/30 mb-4 flex items-center justify-center relative">
                      {!hasError ? (
                        <img
                          src={mentor.photo}
                          alt={`Portrait of ${mentor.name}`}
                          onError={() => setMentorImageErrors(prev => ({ ...prev, [mentor.id]: true }))}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-teal-700/30 text-teal-300 font-heading font-semibold text-lg">
                          {mentor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-paper group-hover:text-teal-300 transition-colors">
                      {mentor.name}
                    </h3>
                    <span className="font-body text-xs text-teal-300 font-medium block mt-0.5">
                      {mentor.title}
                    </span>
                    {mentor.campus && (
                      <p className="font-body text-xs text-slate mt-2">
                        {mentor.campus}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-teal-300/10 flex items-center justify-between text-xs">
                    {hasLinkedIn ? (
                      <span className="font-body text-teal-300 group-hover:underline">
                        View verified LinkedIn Profile
                      </span>
                    ) : (
                      <span className="font-body text-slate italic">
                        Link coming soon
                      </span>
                    )}
                    <span className="font-body text-[10px] text-slate">
                      Mentor
                    </span>
                  </div>
                </div>
              );

              if (hasLinkedIn) {
                return (
                  <a
                    key={mentor.id}
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-teal-700 block"
                  >
                    {MentorCard}
                  </a>
                );
              }

              return (
                <div key={mentor.id}>
                  {MentorCard}
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <HairlineDivider className="mt-20 opacity-30" />
    </section>
  );
};
