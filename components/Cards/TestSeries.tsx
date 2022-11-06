import Anchors from '../Anchors/Anchors';
import styles from './ArticleCard.module.css';
import { Button, Card, Grid, Row, Switch, Text } from '@nextui-org/react';
import { GridIcon, ListIcon } from '../icons/grid';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const list = [
  {
    title: 'Data structure',
    img: '/images/fruit-1.jpeg',
    price: '$5.50',
  },
  {
    title: 'Algorithm',
    img: '/images/fruit-2.jpeg',
    price: '$3.00',
  },
  {
    title: 'SSC',
    img: '/images/fruit-3.jpeg',
    price: '$10.00',
  },
  {
    title: 'PSC',
    img: '/images/fruit-4.jpeg',
    price: '$5.30',
  },
  {
    title: '10th standarad',
    img: '/images/fruit-5.jpeg',
    price: '$15.70',
  },
  {
    title: '12 standard',
    img: '/images/fruit-6.jpeg',
    price: '$8.00',
  },
  {
    title: 'Banks',
    img: '/images/fruit-7.jpeg',
    price: '$7.50',
  },
  {
    title: 'General knowledge',
    img: '/images/fruit-8.jpeg',
    price: '$12.20',
  },
];
export default function TestSeries({ article }) {
  return (
    <div className="bg-slate-100  mt-3 p-2 sm:p-12">
      <div className="p-3 flex items-center justify-between">
        <h3>Test series</h3>
        <div className="flex items-center">
          <Switch
            checked={true}
            size="sm"
            iconOn={<GridIcon />}
            iconOff={<ListIcon />}
          />
          <Button size="xs" className="mt-1 ml-2 rounded-full">
            View all
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {list.map((item, index) => (
          <Grid key={index}>
            <Card isPressable variant="flat">
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={'https://nextui.org' + item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: '$accents7',
                      fontWeight: '$semibold',
                      fontSize: '$sm',
                    }}
                  >
                    (10 Courses)
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </div>
    </div>
  );
}
