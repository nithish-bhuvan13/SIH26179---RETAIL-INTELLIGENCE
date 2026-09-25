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
  { id: "nithish",  name: "Nithish Bhuvan K", department: "IT",           role: "Team Lead",  photo: "/media/team/nithish.png", linkedin: "https://www.linkedin.com/in/nithish-bhuvan-13nov06/" },
  { id: "prakash",  name: "Prakash S",        department: "ECE",         role: "Team Member", photo: "/media/team/prakash.png",         linkedin: "https://www.linkedin.com/in/prakash-sekar-30a74431b/" },
  { id: "rajinsam", name: "Rajin Sam A",      department: "IT",          role: "Team Member", photo: "/media/team/rajin.png",        linkedin: "https://www.linkedin.com/in/rajin-sam/" },
  { id: "mohana",   name: "Mohana Chandra",   department: "ECE",         role: "Team Member", photo: "/media/team/mohana.png", linkedin: "https://www.linkedin.com/in/mohana-b-4ba93a334" },
  { id: "suvitha",  name: "Suvitha D",        department: "Cybersecurity",role: "Team Member", photo: "/media/team/suvith.png", linkedin: "https://www.linkedin.com/in/suvithadhamodaran" },
  { id: "arulkumar",name: "Arulkumar P",      department: "Cybersecurity", role: "Team Member", photo: "/media/team/arulkumar.png", linkedin: "https://www.linkedin.com/in/arulkumar-p-118ba2362?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
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
