import {
  Breadcrumb,
  Button,
  Container,
  Input,
  TextEditor,
} from "../../components";
import { BreadcrumbDemo, Icons } from "../../utility";

export const ContactUs = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <Breadcrumb>{BreadcrumbDemo}</Breadcrumb>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <form>
            <div className="grid grid-cols-3 gap-x-6 gap-y-5">
              <Input isrequired label="subject" type="text" />
              <Input isrequired label="name" type="text" />
              <Input isrequired label="email" type="email" />
              <TextEditor
                isrequired
                parentClassName="col-span-2"
                label="explanation"
                col={10}
                rows={10}
              />
              {/* <Input label="email" type="email" /> */}
            </div>
            <div className="flex justify-end mt-6">
              <Button className="py-3 px-4" variant="primary">
                {Icons.SaveIcon}save
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
};
