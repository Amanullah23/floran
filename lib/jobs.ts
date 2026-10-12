export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Engineer (React / Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "2",
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "3",
    title: "Mobile Developer (Flutter)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
  },
  {
    id: "4",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Part-time",
  },
];
