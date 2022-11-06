import { Card, Collapse, Grid } from "@nextui-org/react";
import BlogCategories from "../BlogCategories";

const faqList = [
  {
    title: 'What is LearningHub ? ',
    subtitle: '',
  },
  {
    title: 'How can i request for new feature ? ',
    subtitle: '',
  },
  {
    title: 'How to refer LearningHub to my friend ? ',
    subtitle: '',
  },
  {
    title: 'How to share an article to all social media plateform',
    subtitle: '',
  },
  {
    title: 'How to post a content in learningHub? ',
    subtitle: '',
  },
];

const Faq = () => {
    return (
      <div className="p-2">
        <h4 className="text-center">FAQ</h4>
        <div className="p-5">
          <Collapse.Group>
            {faqList.map((faq, i) => {
              return (
                <Collapse title={<p>{faq.title}</p>} subtitle={faq.subtitle}>
                  <BlogCategories />
                </Collapse>
              );
            })}
          </Collapse.Group>
        </div>
      </div>
    );
}   

export default Faq;