export type TeamMember = {
  id: string;
  name: string;
  department: string;
  year?: string;
  regNo?: string;
  role: string;       // editable default — override via VITE_TEAM_<ID>_ROLE
  photo: string;      // path under /media/team/
  linkedin: string;   // "" until the real URL is supplied — override via VITE_TEAM_<ID>_LINKEDIN
};

const rawTeam: TeamMember[] = [
  { id: "nithish",  name: "Nithish Bhuvan K", department: "IT",           role: "Team Lead",  photo: "/media/team/nithish-bhuvan-k.jpg", linkedin: "" },
  { id: "prakash",  name: "Prakash S",        department: "ECE",         role: "Team Member", photo: "/media/team/prakash-s.jpg",         linkedin: "" },
  { id: "rajinsam", name: "Rajin Sam A",      department: "IT",          role: "Team Member", photo: "/media/team/rajin-sam-a.jpg",        linkedin: "" },
  { id: "mohana",   name: "Mohana Chandra",   department: "ECE",         role: "Team Member", photo: "/media/team/mohana-chandra.jpg", linkedin: "" },
  { id: "suvitha",  name: "Suvitha D",        department: "Cybersecurity",role: "Team Member", photo: "/media/team/suvitha-d.jpg", linkedin: "" },
  { id: "arulkumar",name: "Arulkumar P",      department: "Cybersecurity", role: "Team Member", photo: "/media/team/arulkumar-p.jpg", linkedin: "" },
];

export const team: TeamMember[] = rawTeam.map((member) => {
  const envRoleKey = `VITE_TEAM_${member.id.toUpperCase()}_ROLE`;
  const envLinkedinKey = `VITE_TEAM_${member.id.toUpperCase()}_LINKEDIN`;

  const envRole = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env[envRoleKey] as string | undefined) : undefined;
  const envLinkedin = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env[envLinkedinKey] as string | undefined) : undefined;

  return {
    ...member,
    role: envRole && envRole.trim().length > 0 ? envRole : member.role,
    linkedin: envLinkedin && envLinkedin.trim().length > 0 ? envLinkedin : member.linkedin,
  };
});
