import { NextRouter, useRouter } from 'next/router';

function generateBreadcrumbs(router: NextRouter) {
  const asPathWithoutQuery = router.asPath.split('?')[0];
  const asPathNestedRoutes = asPathWithoutQuery
    .split('/')
    .filter((v) => v.length > 0);
  const crumblist = asPathNestedRoutes.map((subpath, idx) => {
    const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
    const title = subpath;
    return { href, text: title };
  });
  return [{ href: '/', text: 'Home' }, ...crumblist];
}

const Breadcrumb = () => {
  const router = useRouter();
  const breadcrumbs = generateBreadcrumbs(router);
  return (
    <section className="flex">
      {breadcrumbs.map((_crumb, _idx) => {
        return (
          <div className="flex items-center justify-between">
            <a
              href={_crumb.href}
              className="no-underline  pl-2 pr-2 pt-1 pb-1 rounded-lg hover:underline"
            >
              <span>{_crumb.text} </span>
              <span>
                <i className="pi pi-angle-double-right "></i>
              </span>
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Breadcrumb;
