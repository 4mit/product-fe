import Breadcrumb from '../../components/Bredcrumb/Breadcrumb';
import GeneralLayout from '../../Layout/GeneralLayout';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useFormik,
  FormikProvider,
} from 'formik';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import ShareArticle from '../../components/ShareArticle';
import MultiItemCarousel from '../../components/Carousel/MultiItemCarousel';

const initialValues = {
  stocks: [
    {
      unit: 1,
      amount: 0,
    },
    {
      unit: 0,
      amount: 0,
    },
    {
      unit: 0,
      amount: 0,
    },
  ],
};

const StockAverageCalculator = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const investedAmount = () => {
    let amount = 0; 
    let units = 0;
    formik.values.stocks.forEach((value) => {
        amount = amount + (value.unit*value.amount)
    })
    formik.values.stocks.forEach((value) => {
      units+= value.unit;
    });
    return [amount, amount/units];
  }

  const [amount,avg] = investedAmount();
  return (
    <main className=" border-2 bg-slate-100 h-600">
      <div className="shadow p-2 bg-white">
        <Breadcrumb />
        <br />
        <div className="flex justify-between">
          <h1 className=" text-xl font-extrabold font-sans  text-violet-900 antialiased">
            Stock Average Calculator
          </h1>
          <ShareArticle />
        </div>
      </div>
      <div className="p-5 flex justify-between">
        <Card className="grow">
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <FieldArray
                name="stocks"
                render={(arrayHelpers) => (
                  <div>
                    {formik.values.stocks.map((friend, index) => (
                      <div key={index} className="flex">
                        <div className="m-2">
                          <label htmlFor="username1" className="block">
                            Unit
                          </label>
                          <InputText
                            type="number"
                            name={`stocks[${index}].unit`}
                            value={formik.values.stocks[index].unit}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="m-2">
                          <label htmlFor="username1" className="block">
                            Price while Purchasing
                          </label>
                          <InputText
                            type="number"
                            name={`stocks.${index}.amount`}
                            value={formik.values.stocks[index].amount}
                            onChange={formik.handleChange}
                          />
                        </div>

                        <Button
                          style={{ marginTop: '2rem' }}
                          icon="pi pi-times"
                          className="p-button-rounded p-button-help p-button-outlined"
                          aria-label="Cancel"
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      </div>
                    ))}
                    <div className="m-2">
                      <Button
                        color="primary"
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({ unit: 0, amount: 0 })
                        }
                      >
                        Add More Unit
                      </Button>
                    </div>
                  </div>
                )}
              />
            </form>
          </FormikProvider>
        </Card>
        <Card className="grow">
          <div>
            <p className="text-xl"> Total Amount Invested </p>
            <Badge value={amount.toFixed(2)} size="xlarge" severity="success"></Badge>
          </div>
          <br/>
          <div>
            <p className="text-xl "> Average Price</p>
             <Badge value={avg.toFixed(2)} size="xlarge" severity="success"></Badge>
          </div>
        </Card>
      </div>
      <MultiItemCarousel />
    </main>
  );
};

StockAverageCalculator.getLayout = (page) => (
  <GeneralLayout>{page}</GeneralLayout>
);

export default StockAverageCalculator;
