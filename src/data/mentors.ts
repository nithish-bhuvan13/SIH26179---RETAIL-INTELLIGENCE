export type Mentor = {
  id: string;
  name: string;
  title: string;
  campus: string;
  photo: string;
  linkedin: string;
};

const rawMentors: Mentor[] = [
  {
    id: "muthusamy",
    name: "Mr. K. Muthusamy",
    title: "Head - Technical Competitions and Hackathons",
    campus: "",
    photo: "/media/mentors/muthusamy.jpg",
    linkedin: "https://www.linkedin.com/in/muthusamy-k-a7ba161b6/",
  },
  {
    id: "gajendran",
    name: "Er. Gajendran Parthasarathi",
    title: "Head - School of Design and Innovation",
    campus: "",
    photo: "/media/mentors/gajendran.jpg",
    linkedin: "https://www.linkedin.com/in/er-gajendran-parthasarathi-9689a2109/",
  },
];

export const mentors: Mentor[] = rawMentors.map((mentor) => {
  const envRoleKey = `VITE_MENTOR_${mentor.id.toUpperCase()}_TITLE`;
  const envLinkedinKey = `VITE_MENTOR_${mentor.id.toUpperCase()}_LINKEDIN`;

  const envTitle = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env[envRoleKey] as string | undefined) : undefined;
  const envLinkedin = typeof import.meta !== 'undefined' && import.meta.env ? (import.meta.env[envLinkedinKey] as string | undefined) : undefined;

  return {
    ...mentor,
    title: envTitle && envTitle.trim().length > 0 ? envTitle : mentor.title,
    linkedin: envLinkedin && envLinkedin.trim().length > 0 ? envLinkedin : mentor.linkedin,
  };
});
