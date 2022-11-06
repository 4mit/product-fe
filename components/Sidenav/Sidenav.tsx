import { Collapse, Text, Button } from '@nextui-org/react';
import { ArrowIcon } from './ArrowIcon';
import BlogCategories from '../BlogCategories';

const Sidenav = () => {
  return (
    <aside className="h-full" aria-label="Sidebar">
      <div
        className="shadow"
        style={{
          backgroundImage: 'url(/assets/imgs/sidenav-pattern.svg)',
          backgroundSize: '105% 164%',
          backgroundClip: 'border-box',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '8rem 0rem',
          height: '100%',
        }}
      >
        <div className="w-full bg-blue-500 h-12 flex items-center justify-center p-2">
          <h3 className="text-white m-0">Quick navigation</h3>
        </div>
        <div className="mt-0">
          <Collapse.Group splitted>
            <Collapse
              shadow
              title={<h5>Dashboard and overview</h5>}
              css={{
                borderRadius: '0 !important',
              }}
              arrowIcon={<ArrowIcon />}
              expanded
            >
              <Button
                css={{
                  borderRadius: '0', // radii.xs
                  border: '1px solid transparent',
                  background: '$pink800', // colors.pink800
                }}
              >
                Custom button
              </Button>
            </Collapse>
            <Collapse
              shadow
              title={<h5>Test series</h5>}
              arrowIcon={<ArrowIcon />}
              css={{
                borderRadius: '0 !important',
              }}
            >
              <BlogCategories />
            </Collapse>
            <Collapse
              shadow
              title={<h5>Blog and article</h5>}
              arrowIcon={<ArrowIcon />}
              css={{
                borderRadius: '0 !important',
              }}
            >
              <BlogCategories />
            </Collapse>
            <Collapse
              shadow
              title={<h5>Request and queries</h5>}
              arrowIcon={<ArrowIcon />}
              css={{
                borderRadius: '0 !important',
              }}
            >
              <BlogCategories />
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </aside>
  );
};
export default Sidenav;
