import RecentArticle from '../../../components/RecentArticle/RecentArticle';
import BlogLayout from '../../../Layout/BlogLayout';

const CategoryView = () => {
  return (
    <div>
      <h3>Welcome to category page</h3>
      <RecentArticle />
    </div>
  );
};
CategoryView.getLayout = (page: any) => <BlogLayout>{page}</BlogLayout>;
export default CategoryView;
