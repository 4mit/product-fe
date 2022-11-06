import Link from 'next/link';
const CATEGORIES = [
  {
    title: 'Create New',
    link: '/admin/editor',
  },
  {
    title: 'List all ',
    link: '/admin/blog/list',
  },
  // {
  //   title: 'Study material',
  //   link: '',
  // },
  // {
  //   title: 'Exams Preparation',
  //   link: '',
  // },
  // {
  //   title: 'Syllabus',
  //   link: '',
  // },
  // {
  //   title: 'Notifications',
  //   link: '',
  // },
  // {
  //   title: 'Notifications',
  //   link: '',
  // },
  // {
  //   title: 'Free Courses',
  //   link: '',
  // },
  // {
  //   title: 'Interview Preparation',
  //   link: '',
  // },
  // {
  //   title: 'Interview Experiance',
  //   link: '',
  // },
  // {
  //   title: 'Online tools',
  //   link: '',
  // },
];
const BlogCategories = () => {
  return (
    <div className="flex flex-col sticky top-20 p-2">
      <ul className="m-0 p-0 rounded-lg text-gray-900 bg-white">
        {CATEGORIES.map((c, i) => {
          return (
            <li
              className=" py-2 border-b border-gray-200 w-full rounded-t-lg"
              key={i}
            >
              <Link href={c.link}>
                <a>{c.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default BlogCategories;
